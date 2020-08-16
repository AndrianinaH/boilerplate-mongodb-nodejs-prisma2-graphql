import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { permissions } from './security/permission';
import typeDefs from './typeDefs';
import { resolvers } from './resolvers';
import { ApolloServer } from 'apollo-server';

// ---- config graphql
export const schema = applyMiddleware(
  makeExecutableSchema({
    resolvers: resolvers as any,
    typeDefs,
  }),
  permissions,
);

// ---- authrorization
const getAccessToken = async (req, connection): Promise<string> => {
  if (connection) {
    return connection.context.accessToken;
  }

  if (req && req.headers && req.headers.authorization) {
    const accessToken = req.headers.authorization.replace('Bearer ', '');
    return accessToken;
  }
  return '';
};

const server = new ApolloServer({
  schema,
  context: async ({ req, connection }) => {
    const accessToken = await getAccessToken(req, connection);

    return {
      accessToken,
      headers: (req && req.headers) || {},
    };
  },
  subscriptions: {
    path: '/',
    onConnect: async (connectionParams: any, webSocket, context) => {
      let accessToken = '';
      if (connectionParams.authToken || connectionParams.Authorization) {
        accessToken = connectionParams.authToken
          ? connectionParams.authToken
          : connectionParams.Authorization.replace('Bearer ', '');
        return { accessToken };
      }
      return {};
    },
    onDisconnect: async (connectionParams, context) => {
      const c = await context.initPromise;
      const { accessToken } = c;
      if (accessToken) {
        return { accessToken };
      }
      return {};
    },
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url, subscriptionsUrl }) => {
  // tslint:disable:no-console
  console.log(`🚀  Server ready at ${url}`);
  console.log(`🚀  Subscriptions ready at ${subscriptionsUrl}`);
  // tslint:enable:no-console
});
