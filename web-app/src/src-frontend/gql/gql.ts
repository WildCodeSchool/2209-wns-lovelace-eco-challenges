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
    "\n  mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {\n    createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {\n      teamName\n      city\n      country\n      isPublic\n      img\n    }\n}\n": types.CreateTeamDocument,
    "\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n": types.GetChallengesDocument,
    "\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      teams {\n        id\n        teamName\n        img\n        userToTeams {\n          userRole\n          user {\n            nickname\n          }\n        }\n      }\n    }\n  }\n": types.GetChallengeByIdDocument,
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
export function graphql(source: "\n  mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {\n    createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {\n      teamName\n      city\n      country\n      isPublic\n      img\n    }\n}\n"): (typeof documents)["\n  mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {\n    createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {\n      teamName\n      city\n      country\n      isPublic\n      img\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n"): (typeof documents)["\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      teams {\n        id\n        teamName\n        img\n        userToTeams {\n          userRole\n          user {\n            nickname\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      teams {\n        id\n        teamName\n        img\n        userToTeams {\n          userRole\n          user {\n            nickname\n          }\n        }\n      }\n    }\n  }\n"];
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