import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  testQueryBuilder: Scalars['Boolean'];
  getRecipes: Array<Recipe>;
  hello: Scalars['String'];
  hey: Scalars['String'];
  users: Array<User>;
  user?: Maybe<User>;
  authUsers: Scalars['String'];
  pictures: Array<Picture>;
  search: Array<SearchResult>;
  picture?: Maybe<Picture>;
  profiles: Array<Profile>;
  userProfile?: Maybe<Profile>;
};


export type QuerySearchArgs = {
  searchUserId: Scalars['String'];
};


export type QueryPictureArgs = {
  pictureId: Scalars['ID'];
};

/** Object representing cooking recipe */
export type Recipe = {
   __typename?: 'Recipe';
  id: Scalars['ID'];
  title: Scalars['String'];
  pages: Scalars['Int'];
  grade?: Maybe<Grade>;
  isPrivate: Scalars['Boolean'];
  ingredients: Array<Scalars['String']>;
  rating: Array<Scalars['Int']>;
  averageRating?: Maybe<Scalars['Float']>;
  aboveSixRating?: Maybe<Scalars['Boolean']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  userId: Scalars['String'];
  user: User;
};

/** Grade the Recipe */
export enum Grade {
  Excellent = 'EXCELLENT',
  Good = 'GOOD',
  Average = 'AVERAGE',
  Bad = 'BAD',
  Horrendous = 'HORRENDOUS'
}


export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  tokenVersion: Scalars['Int'];
  profile?: Maybe<Profile>;
  recipes: Array<Recipe>;
  pictures: Array<Picture>;
};

export type Profile = {
   __typename?: 'Profile';
  id: Scalars['ID'];
  gender: Scalars['String'];
  age: Scalars['Int'];
  photoUrl: Scalars['String'];
  user: User;
};

export type Picture = {
   __typename?: 'Picture';
  id: Scalars['ID'];
  title: Scalars['String'];
  specification?: Maybe<Scalars['String']>;
  pictureUrl: Scalars['String'];
  userId: Scalars['String'];
  user: User;
};

export type SearchResult = Profile | Picture;

export type Mutation = {
   __typename?: 'Mutation';
  togglePrivacy?: Maybe<Recipe>;
  setRating?: Maybe<Recipe>;
  updateIngredient?: Maybe<Recipe>;
  deleteRecipe: Scalars['Boolean'];
  setGrade?: Maybe<Recipe>;
  createRecipe?: Maybe<Recipe>;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  createPicture?: Maybe<Picture>;
  login: LoginResponse;
  register: Scalars['Boolean'];
  deletePicture: Scalars['Boolean'];
  createProfile?: Maybe<Profile>;
};


export type MutationTogglePrivacyArgs = {
  recipeId: Scalars['ID'];
};


export type MutationSetRatingArgs = {
  score: Scalars['Float'];
  recipeId: Scalars['String'];
};


export type MutationUpdateIngredientArgs = {
  newIngredient: Scalars['String'];
  recipeId: Scalars['String'];
};


export type MutationDeleteRecipeArgs = {
  recipeId: Scalars['ID'];
};


export type MutationSetGradeArgs = {
  grade: Grade;
  recipeId: Scalars['ID'];
};


export type MutationCreateRecipeArgs = {
  data: CreateRecipeInput;
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['String'];
};


export type MutationCreatePictureArgs = {
  pictureUrl: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationDeletePictureArgs = {
  pictureId: Scalars['ID'];
};


export type MutationCreateProfileArgs = {
  age: Scalars['Float'];
  photoUrl: Scalars['String'];
  gender: Scalars['String'];
};

export type CreateRecipeInput = {
  title: Scalars['String'];
  pages: Scalars['Int'];
  grade?: Maybe<Grade>;
  ingredients: Array<Scalars['String']>;
};

export type LoginResponse = {
   __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type HelloQueryVariables = {};


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type HeyQueryVariables = {};


export type HeyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hey'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        return ApolloReactHooks.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
      }
export function useHelloLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, baseOptions);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQuery, HelloQueryVariables>;
export const HeyDocument = gql`
    query Hey {
  hey
}
    `;

/**
 * __useHeyQuery__
 *
 * To run a query within a React component, call `useHeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeyQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HeyQuery, HeyQueryVariables>) {
        return ApolloReactHooks.useQuery<HeyQuery, HeyQueryVariables>(HeyDocument, baseOptions);
      }
export function useHeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HeyQuery, HeyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HeyQuery, HeyQueryVariables>(HeyDocument, baseOptions);
        }
export type HeyQueryHookResult = ReturnType<typeof useHeyQuery>;
export type HeyLazyQueryHookResult = ReturnType<typeof useHeyLazyQuery>;
export type HeyQueryResult = ApolloReactCommon.QueryResult<HeyQuery, HeyQueryVariables>;