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
  isVerified: Scalars['Boolean'];
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
  name: Scalars['String'];
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
  acceptInvitation: Invitation;
  addChallengeToTeam: Team;
  createChallenge: Challenge;
  createTeam: Team;
  createUserToTeam: UserToTeam;
  deleteChallenge: Challenge;
  deleteTeam: Team;
  deniInvitation: Invitation;
  signIn: AppUser;
  signUp: AppUser;
  updateChallengePremium: Challenge;
  updateDatesChallenge: Challenge;
  updateTeam: Team;
};


export type MutationAcceptInvitationArgs = {
  id: Scalars['String'];
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
  challengeName: Scalars['String'];
  teamId: Scalars['ID'];
  userEmail: Scalars['String'];
  userRole: UserRole;
};


export type MutationDeleteChallengeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};


export type MutationDeniInvitationArgs = {
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
  getInvitations: Array<Invitation>;
  myProfile: AppUser;
  teamById: Team;
  teamByName: Team;
  teams: Array<Team>;
  teamsByCity: Array<Team>;
  teamsByCountry: Array<Team>;
  userByEmail: AppUser;
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


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
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

<<<<<<< HEAD
=======
export type CreateTeamMutationVariables = Exact<{
  teamName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  isPublic: Scalars['Boolean'];
  img?: InputMaybe<Scalars['String']>;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', teamName: string, city: string, country: string, isPublic: boolean, img?: string | null } };

>>>>>>> 887afb1 (wip form create challenge)
export type GetChallengesQueryVariables = Exact<{
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
}>;


export type GetChallengesQuery = { __typename?: 'Query', challenges: Array<{ __typename?: 'Challenge', id: string, challengeName: string, description: string, level: Level, category: Array<Category>, startsAt?: any | null, endAt?: any | null, img?: string | null }> };

export type GetChallengeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetChallengeByIdQuery = { __typename?: 'Query', challengeById: { __typename?: 'Challenge', id: string, img?: string | null, challengeName: string, description: string, category: Array<Category>, level: Level, startsAt?: any | null, endAt?: any | null, teams?: Array<{ __typename?: 'Team', id: string, teamName: string, img?: string | null, userToTeams?: Array<{ __typename?: 'UserToTeam', userRole: UserRole, user: { __typename?: 'AppUser', nickname: string } }> | null }> | null } };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AppUser', id: string, email: string, firstName: string, lastName: string } };

export type SignUpMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickname: Scalars['String'];
  email: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AppUser', id: string, email: string, firstName: string, lastName: string, nickname: string, score: number, disabled: boolean, city: string, country: string } };


<<<<<<< HEAD
=======
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPublic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"img"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"Argument","name":{"kind":"Name","value":"isPublic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPublic"}}},{"kind":"Argument","name":{"kind":"Name","value":"img"},"value":{"kind":"Variable","name":{"kind":"Name","value":"img"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
>>>>>>> 887afb1 (wip form create challenge)
export const GetChallengesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallenges"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsByPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemsByPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsByPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<GetChallengesQuery, GetChallengesQueryVariables>;
export const GetChallengeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallengeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"teams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"userToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"disabled"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;