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
    "\n    mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!, $age: Float!, $desc: String!) {\n        signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password, age: $age, desc: $desc) {\n            id\n            email\n            firstName\n            lastName\n            nickname\n            score\n            disabled\n            city\n            country\n            img\n            hobbies\n            isVerified\n            desc\n            age\n        }\n    }\n": types.SignUpDocument,
    "\n    mutation ChangePassword($userId: String!, $newPassword: String!) {\n    changePassword(userId: $userId, newPassword: $newPassword) {\n        id\n        email\n        firstName\n        lastName\n        nickname\n        score\n        disabled\n        city\n        country\n        isVerified\n    }\n    }\n": types.ChangePasswordDocument,
    "\n    mutation AskChangePassword($email: String!) {\n        askChangePassword(email: $email)\n    }\n": types.AskChangePasswordDocument,
    "\n  mutation CreateTeam(\n    $teamName: String!\n    $city: String!\n    $country: String!\n    $isPublic: Boolean!\n    $img: String\n  ) {\n    createTeam(\n      teamName: $teamName\n      city: $city\n      country: $country\n      isPublic: $isPublic\n      img: $img\n    ) {\n      id\n      teamName\n    }\n  }\n": types.CreateTeamDocument,
    "\n  mutation CreateUserToTeam(\n    $teamId: ID!\n    $userEmail: String!\n    $userRole: UserRole!\n    $challengeName: String\n  ) {\n    createUserToTeam(\n      teamId: $teamId\n      userEmail: $userEmail\n      userRole: $userRole\n      challengeName: $challengeName\n    ) {\n        team {\n          teamName\n          challengeToTeams {\n            challenge {\n              challengeName\n            }\n          }\n        }\n        userRole\n        user {\n          email\n        }\n    }\n  }\n": types.CreateUserToTeamDocument,
    "\n  mutation CreateChallengeToTeam(\n    $teamId: ID!\n    $challengeId: ID!\n    $startsAt: DateTime!\n    $endAt: DateTime!\n  ) {\n    createChallengeToTeam(\n      teamId: $teamId\n      challengeId: $challengeId\n      startsAt: $startsAt\n      endAt: $endAt\n    ) {\n      id\n      challenge {\n        challengeName\n      }\n      startsAt\n      endAt\n      team {\n        teamName\n      }\n    }\n  }\n": types.CreateChallengeToTeamDocument,
    "\n  query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {\n    challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {\n      id\n      challengeName\n      description\n      level\n      category\n      startsAt\n      endAt\n      img\n    }\n  }\n": types.GetChallengesDocument,
    "\n  query GetChallengeById($id: String!) {\n    challengeById(id: $id) {\n      id\n      img\n      challengeName\n      description\n      category\n      level\n      startsAt\n      endAt\n      challengeToTeams {\n        startsAt\n        endAt\n        team {\n          id\n          teamName\n          img\n          userToTeams {\n            userRole\n            user {\n              nickname\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetChallengeByIdDocument,
    "\n  query GetChallengesLight {\n    challengesLight {\n      challengeName\n      id\n      level\n      category\n    }\n  }\n": types.GetChallengesLightDocument,
    "\nquery userById($id: String!) {\n  userById(id: $id) {\n    id\n    lastName\n    firstName\n    email\n    country\n    desc\n    age\n    city\n    nickname\n    score\n    hobbies\n    userToTeams {\n      userRole\n      score\n      team {\n        id\n        teamName\n        country\n        city\n        isPublic\n        img\n        challengeToTeams {\n          challenge {\n            id\n            challengeName\n            level\n            description\n            img\n            startsAt\n            endAt\n            category\n          }\n        }\n      }\n    }\n  }\n}\n": types.UserByIdDocument,
    "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n": types.SignInDocument,
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
export function graphql(source: "\n    mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!, $age: Float!, $desc: String!) {\n        signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password, age: $age, desc: $desc) {\n            id\n            email\n            firstName\n            lastName\n            nickname\n            score\n            disabled\n            city\n            country\n            img\n            hobbies\n            isVerified\n            desc\n            age\n        }\n    }\n"): (typeof documents)["\n    mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!, $age: Float!, $desc: String!) {\n        signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password, age: $age, desc: $desc) {\n            id\n            email\n            firstName\n            lastName\n            nickname\n            score\n            disabled\n            city\n            country\n            img\n            hobbies\n            isVerified\n            desc\n            age\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation ChangePassword($userId: String!, $newPassword: String!) {\n    changePassword(userId: $userId, newPassword: $newPassword) {\n        id\n        email\n        firstName\n        lastName\n        nickname\n        score\n        disabled\n        city\n        country\n        isVerified\n    }\n    }\n"): (typeof documents)["\n    mutation ChangePassword($userId: String!, $newPassword: String!) {\n    changePassword(userId: $userId, newPassword: $newPassword) {\n        id\n        email\n        firstName\n        lastName\n        nickname\n        score\n        disabled\n        city\n        country\n        isVerified\n    }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AskChangePassword($email: String!) {\n        askChangePassword(email: $email)\n    }\n"): (typeof documents)["\n    mutation AskChangePassword($email: String!) {\n        askChangePassword(email: $email)\n    }\n"];
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
export function graphql(source: "\nquery userById($id: String!) {\n  userById(id: $id) {\n    id\n    lastName\n    firstName\n    email\n    country\n    desc\n    age\n    city\n    nickname\n    score\n    hobbies\n    userToTeams {\n      userRole\n      score\n      team {\n        id\n        teamName\n        country\n        city\n        isPublic\n        img\n        challengeToTeams {\n          challenge {\n            id\n            challengeName\n            level\n            description\n            img\n            startsAt\n            endAt\n            category\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery userById($id: String!) {\n  userById(id: $id) {\n    id\n    lastName\n    firstName\n    email\n    country\n    desc\n    age\n    city\n    nickname\n    score\n    hobbies\n    userToTeams {\n      userRole\n      score\n      team {\n        id\n        teamName\n        country\n        city\n        isPublic\n        img\n        challengeToTeams {\n          challenge {\n            id\n            challengeName\n            level\n            description\n            img\n            startsAt\n            endAt\n            category\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;