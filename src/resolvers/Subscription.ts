// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { SubscriptionResolvers } from '../generated/graphqlgen';
import { withFilter, PubSub } from 'apollo-server';
import pubsub from '../pubsub';

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  onUserSignup: {
    subscribe: () => pubsub.asyncIterator(['ON_SIGNUP']),
  },
};
