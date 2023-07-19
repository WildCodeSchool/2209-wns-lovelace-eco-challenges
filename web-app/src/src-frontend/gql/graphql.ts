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
  age: Scalars['Float'];
  city: Scalars['String'];
  country: Scalars['String'];
  desc: Scalars['String'];
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hobbies?: Maybe<Array<Hobbies>>;
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
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
  challengeToTeams?: Maybe<Array<ChallengeToTeam>>;
  description: Scalars['String'];
  endAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  img?: Maybe<Scalars['String']>;
  level: Level;
  startsAt?: Maybe<Scalars['DateTime']>;
};

export type ChallengeToTeam = {
  __typename?: 'ChallengeToTeam';
  challenge: Challenge;
  endAt: Scalars['DateTime'];
  id: Scalars['ID'];
  startsAt: Scalars['DateTime'];
  team: Team;
};

export enum Hobbies {
  Art = 'ART',
  Book = 'BOOK',
  Cook = 'COOK',
  Games = 'GAMES',
  Music = 'MUSIC',
  Pets = 'PETS',
  Sport = 'SPORT',
  Trips = 'TRIPS'
}

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
  createChallenge: Challenge;
  createChallengeToTeam: ChallengeToTeam;
  createTeam: Team;
  createUserToTeam: UserToTeam;
  deleteChallenge: Challenge;
  deleteTeam: Team;
  deniInvitation: Invitation;
  signIn: AppUser;
  signUp: AppUser;
  updateAppUser: AppUser;
  updateChallengePremium: Challenge;
  updateDatesChallenge: Challenge;
  updateTeam: Team;
};


export type MutationAcceptInvitationArgs = {
  id: Scalars['String'];
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


export type MutationCreateChallengeToTeamArgs = {
  challengeId: Scalars['ID'];
  endAt: Scalars['DateTime'];
  startsAt: Scalars['DateTime'];
  teamId: Scalars['ID'];
};


export type MutationCreateTeamArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  img?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  teamName: Scalars['String'];
};


export type MutationCreateUserToTeamArgs = {
  challengeName?: InputMaybe<Scalars['String']>;
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
  age: Scalars['Float'];
  city: Scalars['String'];
  country: Scalars['String'];
  desc: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateAppUserArgs = {
  age?: InputMaybe<Scalars['Float']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  hobbies?: InputMaybe<Array<Hobbies>>;
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
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
  challengeToTeams: Array<ChallengeToTeam>;
  challenges: Array<Challenge>;
  challengesByCategory: Array<Challenge>;
  challengesByLevel: Array<Challenge>;
  challengesLight: Array<Challenge>;
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
  challengeToTeams?: Maybe<Array<ChallengeToTeam>>;
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

export type CreateTeamMutationVariables = Exact<{
  teamName: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  isPublic: Scalars['Boolean'];
  img?: InputMaybe<Scalars['String']>;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: string, teamName: string } };

export type CreateUserToTeamMutationVariables = Exact<{
  teamId: Scalars['ID'];
  userEmail: Scalars['String'];
  userRole: UserRole;
  challengeName?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserToTeamMutation = { __typename?: 'Mutation', createUserToTeam: { __typename?: 'UserToTeam', userRole: UserRole, team: { __typename?: 'Team', teamName: string, challengeToTeams?: Array<{ __typename?: 'ChallengeToTeam', challenge: { __typename?: 'Challenge', challengeName: string } }> | null }, user: { __typename?: 'AppUser', email: string } } };

export type CreateChallengeToTeamMutationVariables = Exact<{
  teamId: Scalars['ID'];
  challengeId: Scalars['ID'];
  startsAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
}>;


export type CreateChallengeToTeamMutation = { __typename?: 'Mutation', createChallengeToTeam: { __typename?: 'ChallengeToTeam', id: string, startsAt: any, endAt: any, challenge: { __typename?: 'Challenge', challengeName: string }, team: { __typename?: 'Team', teamName: string } } };

export type GetChallengesQueryVariables = Exact<{
  itemsByPage: Scalars['Int'];
  pageNumber: Scalars['Int'];
}>;


export type GetChallengesQuery = { __typename?: 'Query', challenges: Array<{ __typename?: 'Challenge', id: string, challengeName: string, description: string, level: Level, category: Array<Category>, startsAt?: any | null, endAt?: any | null, img?: string | null }> };

export type GetChallengeByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetChallengeByIdQuery = { __typename?: 'Query', challengeById: { __typename?: 'Challenge', id: string, img?: string | null, challengeName: string, description: string, category: Array<Category>, level: Level, startsAt?: any | null, endAt?: any | null, challengeToTeams?: Array<{ __typename?: 'ChallengeToTeam', startsAt: any, endAt: any, team: { __typename?: 'Team', id: string, teamName: string, img?: string | null, userToTeams?: Array<{ __typename?: 'UserToTeam', userRole: UserRole, user: { __typename?: 'AppUser', nickname: string } }> | null } }> | null } };

export type GetChallengesLightQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChallengesLightQuery = { __typename?: 'Query', challengesLight: Array<{ __typename?: 'Challenge', challengeName: string, id: string, level: Level, category: Array<Category> }> };

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'Query', userById: { __typename?: 'AppUser', id: string, lastName: string, firstName: string, email: string, country: string, city: string, nickname: string, score: number, hobbies?: Array<Hobbies> | null, userToTeams?: Array<{ __typename?: 'UserToTeam', userRole: UserRole, score: number, team: { __typename?: 'Team', id: string, teamName: string, country: string, city: string, isPublic: boolean, img?: string | null, challengeToTeams?: Array<{ __typename?: 'ChallengeToTeam', challenge: { __typename?: 'Challenge', id: string, challengeName: string, level: Level, description: string, img?: string | null, startsAt?: any | null, endAt?: any | null, category: Array<Category> } }> | null } }> | null } };

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
  desc: Scalars['String'];
  age: Scalars['Float'];
  country: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AppUser', id: string, email: string, firstName: string, lastName: string, nickname: string, score: number, disabled: boolean, city: string, desc: string, age: number, country: string } };


export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPublic"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"img"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamName"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"Argument","name":{"kind":"Name","value":"isPublic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPublic"}}},{"kind":"Argument","name":{"kind":"Name","value":"img"},"value":{"kind":"Variable","name":{"kind":"Name","value":"img"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateUserToTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserToTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"challengeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserToTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"userRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userRole"}}},{"kind":"Argument","name":{"kind":"Name","value":"challengeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"challengeName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"challengeToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserToTeamMutation, CreateUserToTeamMutationVariables>;
export const CreateChallengeToTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChallengeToTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"challengeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startsAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChallengeToTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"challengeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"challengeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"startsAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startsAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"endAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamName"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChallengeToTeamMutation, CreateChallengeToTeamMutationVariables>;
export const GetChallengesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallenges"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemsByPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemsByPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemsByPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<GetChallengesQuery, GetChallengesQueryVariables>;
export const GetChallengeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallengeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"challengeToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"userToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>;
export const GetChallengesLightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallengesLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengesLight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]} as unknown as DocumentNode<GetChallengesLightQuery, GetChallengesLightQueryVariables>;
export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"userToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"challengeToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"desc"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"nickname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nickname"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"desc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"desc"}}},{"kind":"Argument","name":{"kind":"Name","value":"age"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age"}}},{"kind":"Argument","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"disabled"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;