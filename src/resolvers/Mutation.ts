// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { MutationResolvers } from '../generated/graphqlgen';
import { v4 as uuidv4 } from 'uuid';
import pubsub from '../pubsub';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup: (parent, args, ctx) => {
    const newUser = {
      ...args,
      id: uuidv4(),
      createdAt: new Date().toLocaleString(),
      updatedAt: null,
    };
    pubsub.publish('ON_SIGNUP', { onUserSignup: newUser });
    return newUser;
  },
  login: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
