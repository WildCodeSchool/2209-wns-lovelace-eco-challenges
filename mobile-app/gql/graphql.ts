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
  category?: InputMaybe<Array<Category>>;
  challengeName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Level>;
  startsAt?: InputMaybe<Scalars['DateTime']>;
};


export type MutationUpdateDatesChallengeArgs = {
  endAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  startsAt: Scalars['DateTime'];
};


export type MutationUpdateTeamArgs = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  img?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  teamName?: InputMaybe<Scalars['String']>;
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

export type UserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByIdQuery = { __typename?: 'Query', userById: { __typename?: 'AppUser', id: string, email: string, firstName: string, lastName: string, nickname: string, score: number, disabled: boolean, city: string, desc: string, age: number, country: string, img?: string | null, hobbies?: Array<Hobbies> | null, isVerified: boolean, userToTeams?: Array<{ __typename?: 'UserToTeam', id: string, userRole: UserRole, score: number, disabled: boolean, team: { __typename?: 'Team', id: string, teamName: string, city: string, country: string, img?: string | null, isPublic: boolean, challengeToTeams?: Array<{ __typename?: 'ChallengeToTeam', id: string, startsAt: any, endAt: any, challenge: { __typename?: 'Challenge', challengeName: string, level: Level, description: string, category: Array<Category>, img?: string | null, id: string } }> | null } }> | null } };


export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"disabled"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"hobbies"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"userToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teamName"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"challengeToTeams"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"challenge"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challengeName"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startsAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"userRole"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"disabled"}}]}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;