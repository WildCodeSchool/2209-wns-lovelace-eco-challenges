/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateTeam(\n    $teamName: String!\n    $city: String!\n    $country: String!\n    $isPublic: Boolean!\n    $img: String\n  ) {\n    createTeam(\n      teamName: $teamName\n      city: $city\n      country: $country\n      isPublic: $isPublic\n      img: $img\n    ) {\n      id\n      teamName\n    }\n  }\n": types.CreateTeamDocument,
    "\n  mutation CreateUserToTeam(\n    $teamId: ID!\n    $userEmail: String!\n    $userRole: UserRole!\n    $challengeName: String\n  ) {\n    createUserToTeam(\n      teamId: $teamId\n      userEmail: $userEmail\n      userRole: $userRole\n      challengeName: $challengeName\n    ) {\n        team {\n          teamName\n          challengeToTeams {\n            challenge {\n              challengeName\n            }\n          }\n        }\n        userRole\n        user {\n          email\n        }\n    }\n  }\n": types.CreateUserToTeamDocument,
    "\n  mutation CreateChallengeToTeam(\n    $teamId: ID!\n    $challengeId: ID!\n    $startsAt: DateTime!\n    $endAt: DateTime!\n  ) {\n    createChallengeToTeam(\n      teamId: $teamId\n      challengeId: $challengeId\n      startsAt: $startsAt\n      endAt: $endAt\n    ) {\n      id\n      challenge {\n        challengeName\n      }\n      startsAt\n      endAt\n      team {\n        teamName\n      }\n    }\n  }\n": types.CreateChallengeToTeamDocument,
    "\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n": types.GetChallengesDocument,
    "\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      challengeToTeams {\n        startsAt\n        endAt\n        team {\n          id\n          teamName\n          img\n          userToTeams {\n            userRole\n            user {\n              nickname\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetChallengeByIdDocument,
    "\n  query GetChallengesLight {\n    challengesLight {\n      challengeName\n      id\n      level\n      category\n    }\n  }\n": types.GetChallengesLightDocument,
    "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $nickname: String!\n    $email: String!\n    $city: String!\n    $country: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      nickname: $nickname\n      email: $email\n      city: $city\n      country: $country\n      password: $password\n    ) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n": types.SignUpDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTeam(\n    $teamName: String!\n    $city: String!\n    $country: String!\n    $isPublic: Boolean!\n    $img: String\n  ) {\n    createTeam(\n      teamName: $teamName\n      city: $city\n      country: $country\n      isPublic: $isPublic\n      img: $img\n    ) {\n      id\n      teamName\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTeam(\n    $teamName: String!\n    $city: String!\n    $country: String!\n    $isPublic: Boolean!\n    $img: String\n  ) {\n    createTeam(\n      teamName: $teamName\n      city: $city\n      country: $country\n      isPublic: $isPublic\n      img: $img\n    ) {\n      id\n      teamName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserToTeam(\n    $teamId: ID!\n    $userEmail: String!\n    $userRole: UserRole!\n    $challengeName: String\n  ) {\n    createUserToTeam(\n      teamId: $teamId\n      userEmail: $userEmail\n      userRole: $userRole\n      challengeName: $challengeName\n    ) {\n        team {\n          teamName\n          challengeToTeams {\n            challenge {\n              challengeName\n            }\n          }\n        }\n        userRole\n        user {\n          email\n        }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserToTeam(\n    $teamId: ID!\n    $userEmail: String!\n    $userRole: UserRole!\n    $challengeName: String\n  ) {\n    createUserToTeam(\n      teamId: $teamId\n      userEmail: $userEmail\n      userRole: $userRole\n      challengeName: $challengeName\n    ) {\n        team {\n          teamName\n          challengeToTeams {\n            challenge {\n              challengeName\n            }\n          }\n        }\n        userRole\n        user {\n          email\n        }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChallengeToTeam(\n    $teamId: ID!\n    $challengeId: ID!\n    $startsAt: DateTime!\n    $endAt: DateTime!\n  ) {\n    createChallengeToTeam(\n      teamId: $teamId\n      challengeId: $challengeId\n      startsAt: $startsAt\n      endAt: $endAt\n    ) {\n      id\n      challenge {\n        challengeName\n      }\n      startsAt\n      endAt\n      team {\n        teamName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChallengeToTeam(\n    $teamId: ID!\n    $challengeId: ID!\n    $startsAt: DateTime!\n    $endAt: DateTime!\n  ) {\n    createChallengeToTeam(\n      teamId: $teamId\n      challengeId: $challengeId\n      startsAt: $startsAt\n      endAt: $endAt\n    ) {\n      id\n      challenge {\n        challengeName\n      }\n      startsAt\n      endAt\n      team {\n        teamName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n"): (typeof documents)["\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      challengeToTeams {\n        startsAt\n        endAt\n        team {\n          id\n          teamName\n          img\n          userToTeams {\n            userRole\n            user {\n              nickname\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      challengeToTeams {\n        startsAt\n        endAt\n        team {\n          id\n          teamName\n          img\n          userToTeams {\n            userRole\n            user {\n              nickname\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChallengesLight {\n    challengesLight {\n      challengeName\n      id\n      level\n      category\n    }\n  }\n"): (typeof documents)["\n  query GetChallengesLight {\n    challengesLight {\n      challengeName\n      id\n      level\n      category\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $nickname: String!\n    $email: String!\n    $city: String!\n    $country: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      nickname: $nickname\n      email: $email\n      city: $city\n      country: $country\n      password: $password\n    ) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp(\n    $firstName: String!\n    $lastName: String!\n    $nickname: String!\n    $email: String!\n    $city: String!\n    $country: String!\n    $password: String!\n  ) {\n    signUp(\n      firstName: $firstName\n      lastName: $lastName\n      nickname: $nickname\n      email: $email\n      city: $city\n      country: $country\n      password: $password\n    ) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;