// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, LoginPayload, Success, Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    id: string;
  }

  export type MeResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type UserResolver =
    | ((
        parent: undefined,
        args: ArgsUser,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type AllUsersResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<User | null> | null | Promise<Array<User | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<User | null> | null | Promise<Array<User | null> | null>;
      };

  export interface Type {
    me:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    user:
      | ((
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUser,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    allUsers:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<User | null> | null | Promise<Array<User | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<User | null> | null | Promise<Array<User | null> | null>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => (parent.name === undefined ? null : parent.name),
    email: (parent: User) => (parent.email === undefined ? null : parent.email),
    password: (parent: User) =>
      parent.password === undefined ? null : parent.password,
    createdAt: (parent: User) =>
      parent.createdAt === undefined ? null : parent.createdAt,
    updatedAt: (parent: User) =>
      parent.updatedAt === undefined ? null : parent.updatedAt
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type PasswordResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CreatedAtResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type UpdatedAtResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | Promise<string>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    password:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    createdAt:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    updatedAt:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    name: string;
    email: string;
    password: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export type SignupResolver =
    | ((
        parent: undefined,
        args: ArgsSignup,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type LoginResolver =
    | ((
        parent: undefined,
        args: ArgsLogin,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => LoginPayload | null | Promise<LoginPayload | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => LoginPayload | null | Promise<LoginPayload | null>;
      };

  export interface Type {
    signup:
      | ((
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    login:
      | ((
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => LoginPayload | null | Promise<LoginPayload | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLogin,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => LoginPayload | null | Promise<LoginPayload | null>;
        };
  }
}

export namespace LoginPayloadResolvers {
  export const defaultResolvers = {
    accessToken: (parent: LoginPayload) => parent.accessToken
  };

  export type AccessTokenResolver =
    | ((
        parent: LoginPayload,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: LoginPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    accessToken:
      | ((
          parent: LoginPayload,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: LoginPayload,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {};

  export type OnUserSignupResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AsyncIterator<User | null> | Promise<AsyncIterator<User | null>>;
    resolve?: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;
  };

  export interface Type {
    onUserSignup: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => AsyncIterator<User | null> | Promise<AsyncIterator<User | null>>;
      resolve?: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>;
    };
  }
}

export namespace SuccessResolvers {
  export const defaultResolvers = {
    action: (parent: Success) => parent.action,
    success: (parent: Success) => parent.success,
    message: (parent: Success) => parent.message
  };

  export type ActionResolver =
    | ((
        parent: Success,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type SuccessResolver =
    | ((
        parent: Success,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => boolean | null | Promise<boolean | null>)
    | {
        fragment: string;
        resolve: (
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | null | Promise<boolean | null>;
      };

  export type MessageResolver =
    | ((
        parent: Success,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    action:
      | ((
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Success,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    success:
      | ((
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => boolean | null | Promise<boolean | null>)
      | {
          fragment: string;
          resolve: (
            parent: Success,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => boolean | null | Promise<boolean | null>;
        };

    message:
      | ((
          parent: Success,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Success,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  LoginPayload: LoginPayloadResolvers.Type;
  Subscription: SubscriptionResolvers.Type;
  Success: SuccessResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}
