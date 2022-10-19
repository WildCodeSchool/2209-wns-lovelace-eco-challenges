/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation DeleteWilder($id: String!) {\n    deleteWilder(id: $id) {\n      id\n      firstName\n    }\n  }\n": types.DeleteWilderDocument,
    "\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n": types.GetWildersDocument,
};

export function graphql(source: "\n  mutation DeleteWilder($id: String!) {\n    deleteWilder(id: $id) {\n      id\n      firstName\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteWilder($id: String!) {\n    deleteWilder(id: $id) {\n      id\n      firstName\n    }\n  }\n"];
export function graphql(source: "\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetWilders {\n    wilders {\n      id\n      firstName\n      lastName\n      skills {\n        id\n        skillName\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;