import { shield } from 'graphql-shield';

// This function control if USER has access for each endpoint in graphql

export const permissions = shield(
  {
    Mutation: {},
    Query: {},
  },
  { allowExternalErrors: true },
);
