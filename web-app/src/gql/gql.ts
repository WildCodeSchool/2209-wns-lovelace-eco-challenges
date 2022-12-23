/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation CreateWilder($firstName: String!, $lastName: String!) {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n": types.CreateWilderDocument,
    "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n": types.SignInDocument,
    "\n  mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {\n    signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n": types.SignUpDocument,
};

export function graphql(source: "\n  mutation CreateWilder($firstName: String!, $lastName: String!) {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWilder($firstName: String!, $lastName: String!) {\n    createWilder(firstName: $firstName, lastName: $lastName) {\n      id\n      firstName\n    }\n  }\n"];
export function graphql(source: "\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"];
export function graphql(source: "\n  mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {\n    signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n"): (typeof documents)["\n  mutation SignUp($firstName: String!, $lastName: String!, $nickname: String!, $email: String!, $city: String!, $country: String!, $password: String!) {\n    signUp(firstName: $firstName, lastName: $lastName, nickname: $nickname, email: $email, city: $city, country: $country, password: $password) {\n      id\n      email\n      firstName\n      lastName\n      nickname\n      score\n      disabled\n      city\n      country\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;