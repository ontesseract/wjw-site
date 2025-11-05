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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment PublicProfile on Profile {\n    createdAt\n    displayName\n    id\n    kind\n    locationId\n    tenantId\n    username\n  }\n": typeof types.PublicProfileFragmentDoc,
    "\n  fragment PublicLocation on GeoLocation {\n    city\n    country\n    countryCode\n    createdAt\n    formatted\n    id\n    latitude\n    longitude\n    metadata\n    name\n    postalCode\n    state\n    stateCode\n    street1\n    street2\n    tenantId\n    timezone\n    updatedAt\n  }\n": typeof types.PublicLocationFragmentDoc,
    "\n  fragment PublicEvent on Event {\n    createdAt\n    endDate\n    endTimestamp\n    id\n    kind\n    label\n    locationId\n    metadata\n    name\n    profileId\n    startDate\n    startTimestamp\n    tenantId\n    updatedAt\n    # visibility\n  }\n": typeof types.PublicEventFragmentDoc,
    "\n  query events(\n    $distinctOn: [EventSelectColumn!]\n    $limit: Int\n    $offset: Int\n    $orderBy: [EventOrderBy!]\n    $where: EventBoolExp\n  ) {\n    events: event(\n      distinctOn: $distinctOn\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n      where: $where\n    ) {\n      ...PublicEvent\n      location {\n        ...PublicLocation\n      }\n      profile {\n        ...PublicProfile\n      }\n    }\n  }\n": typeof types.EventsDocument,
};
const documents: Documents = {
    "\n  fragment PublicProfile on Profile {\n    createdAt\n    displayName\n    id\n    kind\n    locationId\n    tenantId\n    username\n  }\n": types.PublicProfileFragmentDoc,
    "\n  fragment PublicLocation on GeoLocation {\n    city\n    country\n    countryCode\n    createdAt\n    formatted\n    id\n    latitude\n    longitude\n    metadata\n    name\n    postalCode\n    state\n    stateCode\n    street1\n    street2\n    tenantId\n    timezone\n    updatedAt\n  }\n": types.PublicLocationFragmentDoc,
    "\n  fragment PublicEvent on Event {\n    createdAt\n    endDate\n    endTimestamp\n    id\n    kind\n    label\n    locationId\n    metadata\n    name\n    profileId\n    startDate\n    startTimestamp\n    tenantId\n    updatedAt\n    # visibility\n  }\n": types.PublicEventFragmentDoc,
    "\n  query events(\n    $distinctOn: [EventSelectColumn!]\n    $limit: Int\n    $offset: Int\n    $orderBy: [EventOrderBy!]\n    $where: EventBoolExp\n  ) {\n    events: event(\n      distinctOn: $distinctOn\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n      where: $where\n    ) {\n      ...PublicEvent\n      location {\n        ...PublicLocation\n      }\n      profile {\n        ...PublicProfile\n      }\n    }\n  }\n": types.EventsDocument,
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
export function graphql(source: "\n  fragment PublicProfile on Profile {\n    createdAt\n    displayName\n    id\n    kind\n    locationId\n    tenantId\n    username\n  }\n"): (typeof documents)["\n  fragment PublicProfile on Profile {\n    createdAt\n    displayName\n    id\n    kind\n    locationId\n    tenantId\n    username\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PublicLocation on GeoLocation {\n    city\n    country\n    countryCode\n    createdAt\n    formatted\n    id\n    latitude\n    longitude\n    metadata\n    name\n    postalCode\n    state\n    stateCode\n    street1\n    street2\n    tenantId\n    timezone\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment PublicLocation on GeoLocation {\n    city\n    country\n    countryCode\n    createdAt\n    formatted\n    id\n    latitude\n    longitude\n    metadata\n    name\n    postalCode\n    state\n    stateCode\n    street1\n    street2\n    tenantId\n    timezone\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PublicEvent on Event {\n    createdAt\n    endDate\n    endTimestamp\n    id\n    kind\n    label\n    locationId\n    metadata\n    name\n    profileId\n    startDate\n    startTimestamp\n    tenantId\n    updatedAt\n    # visibility\n  }\n"): (typeof documents)["\n  fragment PublicEvent on Event {\n    createdAt\n    endDate\n    endTimestamp\n    id\n    kind\n    label\n    locationId\n    metadata\n    name\n    profileId\n    startDate\n    startTimestamp\n    tenantId\n    updatedAt\n    # visibility\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query events(\n    $distinctOn: [EventSelectColumn!]\n    $limit: Int\n    $offset: Int\n    $orderBy: [EventOrderBy!]\n    $where: EventBoolExp\n  ) {\n    events: event(\n      distinctOn: $distinctOn\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n      where: $where\n    ) {\n      ...PublicEvent\n      location {\n        ...PublicLocation\n      }\n      profile {\n        ...PublicProfile\n      }\n    }\n  }\n"): (typeof documents)["\n  query events(\n    $distinctOn: [EventSelectColumn!]\n    $limit: Int\n    $offset: Int\n    $orderBy: [EventOrderBy!]\n    $where: EventBoolExp\n  ) {\n    events: event(\n      distinctOn: $distinctOn\n      limit: $limit\n      offset: $offset\n      orderBy: $orderBy\n      where: $where\n    ) {\n      ...PublicEvent\n      location {\n        ...PublicLocation\n      }\n      profile {\n        ...PublicProfile\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;