/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AppUser = {
  __typename?: 'AppUser';
  city: Scalars['String'];
  country: Scalars['String'];
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  nickname: Scalars['String'];
  score: Scalars['Float'];
  userToTeams?: Maybe<Array<UserToTeam>>;
};

export enum Category {
  Carpooling = 'CARPOOLING',
  Electricity = 'ELECTRICITY',
  Less = 'LESS',
  Meat = 'MEAT',
  Protectsnature = 'PROTECTSNATURE',
  Selfsufficiency = 'SELFSUFFICIENCY',
  Waste = 'WASTE',
  Water = 'WATER'
}

export type Challenge = {
  __typename?: 'Challenge';
  category: Array<Category>;
  challengeName: Scalars['String'];
  description: Scalars['String'];
  endAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
  level: Level;
  startsAt?: Maybe<Scalars['DateTime']>;
  teams?: Maybe<Array<Team>>;
};

export type Invitation = {
  __typename?: 'Invitation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: InvitationStatus;
  userToTeams: Array<UserToTeam>;
};

export enum InvitationStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export enum Level {
  Challenging = 'CHALLENGING',
  Easy = 'EASY',
  Moderate = 'MODERATE',
  Supergreen = 'SUPERGREEN'
}

export type Mutation = {
  __typename?: 'Mutation';
  addChallengeToTeam: Team;
  createChallenge: Challenge;
  createTeam: Team;
  createUserToTeam: UserToTeam;
  deleteChallenge: Challenge;
  deleteTeam: Team;
  signIn: AppUser;
  signUp: AppUser;
  updateChallengePremium: Challenge;
  updateDatesChallenge: Challenge;
  updateTeam: Team;
};


export type MutationAddChallengeToTeamArgs = {
  challengeId: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationCreateChallengeArgs = {
  category: Array<Category>;
  challengeName: Scalars['String'];
  description: Scalars['String'];
  endAt?: InputMaybe<Scalars['DateTime']>;
  img?: InputMaybe<Scalars['String']>;
  level: Level;
  startsAt?: InputMaybe<Scalars['DateTime']>;
};


export type MutationCreateTeamArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  img?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  teamName: Scalars['String'];
};


export type MutationCreateUserToTeamArgs = {
  disabled?: InputMaybe<Scalars['Boolean']>;
  invitation?: InputMaybe<Scalars['ID']>;
  score?: InputMaybe<Scalars['Int']>;
  teamId: Scalars['ID'];
  userId: Scalars['ID'];
  userRole: UserRole;
};


export type MutationDeleteChallengeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateChallengePremiumArgs = {
  category: Array<Category>;
  challengeName: Scalars['String'];
  description: Scalars['String'];
  endAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  level: Level;
  startsAt?: InputMaybe<Scalars['DateTime']>;
};


export type MutationUpdateDatesChallengeArgs = {
  endAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  startsAt: Scalars['DateTime'];
};


export type MutationUpdateTeamArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  teamName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  challengeById: Challenge;
  challengeByName: Challenge;
  challenges: Array<Challenge>;
  challengesByCategory: Array<Challenge>;
  challengesByLevel: Array<Challenge>;
  myProfile: AppUser;
  teamById: Team;
  teamByName: Team;
  teams: Array<Team>;
  teamsByCity: Array<Team>;
  teamsByCountry: Array<Team>;
  userById: AppUser;
  userByNickname: AppUser;
  userToTeams: Array<UserToTeam>;
};


export type QueryChallengeByIdArgs = {
  id: Scalars['String'];
};


export type QueryChallengeByNameArgs = {
  challengeName: Scalars['String'];
};


export type QueryChallengesArgs = {
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
};


export type QueryChallengesByCategoryArgs = {
  category: Array<Category>;
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
};


export type QueryChallengesByLevelArgs = {
  itemsByPage: Scalars['Int'];
  level: Level;
  pageNumber: Scalars['Int'];
};


export type QueryTeamByIdArgs = {
  id: Scalars['String'];
};


export type QueryTeamByNameArgs = {
  teamName: Scalars['String'];
};


export type QueryTeamsArgs = {
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
};


export type QueryTeamsByCityArgs = {
  city: Scalars['String'];
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
};


export type QueryTeamsByCountryArgs = {
  country: Scalars['String'];
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryUserByNicknameArgs = {
  nickname: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  challenges?: Maybe<Array<Challenge>>;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  teamName: Scalars['String'];
  userToTeams?: Maybe<Array<UserToTeam>>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Player = 'PLAYER'
}

export type UserToTeam = {
  __typename?: 'UserToTeam';
  disabled: Scalars['Boolean'];
  id: Scalars['ID'];
  invitation?: Maybe<Invitation>;
  score: Scalars['Float'];
  team: Team;
  user: AppUser;
  userRole: UserRole;
};

export type UserByIdQueryVariables = Exact<{
  Id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'Query', userById: { __typename?: 'AppUser', id: string, lastName: string, firstName: string, email: string, country: string, city: string, nickname: string, score: number, userToTeams?: Array<{ __typename?: 'UserToTeam', userRole: UserRole, score: number, team: { __typename?: 'Team', id: string, teamName: string, country: string, city: string, isPublic: boolean, img?: string | null, challenges?: Array<{ __typename?: 'Challenge', id: string, challengeName: string, level: Level, description: string, img?: string | null, startsAt?: any | null, endAt?: any | null, category: Array<Category> }> | null } }> | null } };


export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"Id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"userToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"challenges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;