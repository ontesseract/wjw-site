/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  citext: { input: string; output: string; }
  date: { input: string; output: string; }
  jsonb: { input: Record<string, any>; output: Record<string, any>; }
  numeric: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

export type AuthAnonymousInput = {
  deviceId: Scalars['String']['input'];
};

export type AuthEmailInput = {
  email: Scalars['citext']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthEmailPasswordInput = {
  email: Scalars['citext']['input'];
  password: Scalars['String']['input'];
};

export type AuthEmailPasswordSignUpInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['citext']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

export type AuthEmailSignupInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['citext']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

export type AuthEmailTicketInput = {
  email: Scalars['citext']['input'];
  ticket: Scalars['String']['input'];
};

export type AuthOutput = {
  __typename?: 'AuthOutput';
  profileId?: Maybe<Scalars['uuid']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  sessionId?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type AuthResetPasswordInput = {
  email: Scalars['citext']['input'];
  password: Scalars['String']['input'];
  ticket: Scalars['String']['input'];
};

/** columns and relationships of "auth_role_kind" */
export type AuthRoleKind = {
  __typename?: 'AuthRoleKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "auth_role_kind". All fields are combined with a logical 'AND'. */
export type AuthRoleKindBoolExp = {
  _and?: InputMaybe<Array<AuthRoleKindBoolExp>>;
  _not?: InputMaybe<AuthRoleKindBoolExp>;
  _or?: InputMaybe<Array<AuthRoleKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "auth_role_kind". */
export type AuthRoleKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "auth_role_kind" */
export enum AuthRoleKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "auth_role_kind" */
export type AuthRoleKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthRoleKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoleKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AuthSmsCodeInput = {
  code: Scalars['String']['input'];
  mobile: Scalars['citext']['input'];
};

export type AuthSmsInput = {
  mobile: Scalars['citext']['input'];
};

export type AuthSmsSignUpInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['citext']['input'];
  username?: InputMaybe<Scalars['citext']['input']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

export type ContactFormInput = {
  data: Scalars['jsonb']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profileId?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['String']['input'];
  turnstileToken: Scalars['String']['input'];
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "document" */
export type Document = {
  __typename?: 'Document';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isDeleted: Scalars['Boolean']['output'];
  kind: DocumentKindEnum;
  profileId?: Maybe<Scalars['uuid']['output']>;
  slug: Scalars['citext']['output'];
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  visibility: VisibilityKindEnum;
};

/** columns and relationships of "document_block" */
export type DocumentBlock = {
  __typename?: 'DocumentBlock';
  body?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  childBlocks: Array<DocumentBlock>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  document: Document;
  documentId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  kind: DocumentBlockKindEnum;
  /** An object relationship */
  mediaItem?: Maybe<MediaItem>;
  mediaItemId?: Maybe<Scalars['String']['output']>;
  metadata: Scalars['jsonb']['output'];
  /** An object relationship */
  parentBlock?: Maybe<DocumentBlock>;
  parentBlockId?: Maybe<Scalars['uuid']['output']>;
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "document_block" */
export type DocumentBlockChildBlocksArgs = {
  distinctOn?: InputMaybe<Array<DocumentBlockSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentBlockOrderBy>>;
  where?: InputMaybe<DocumentBlockBoolExp>;
};


/** columns and relationships of "document_block" */
export type DocumentBlockMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "document_block" */
export type DocumentBlockAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DocumentBlockMaxOrderBy>;
  min?: InputMaybe<DocumentBlockMinOrderBy>;
};

/** Boolean expression to filter rows from the table "document_block". All fields are combined with a logical 'AND'. */
export type DocumentBlockBoolExp = {
  _and?: InputMaybe<Array<DocumentBlockBoolExp>>;
  _not?: InputMaybe<DocumentBlockBoolExp>;
  _or?: InputMaybe<Array<DocumentBlockBoolExp>>;
  body?: InputMaybe<StringComparisonExp>;
  childBlocks?: InputMaybe<DocumentBlockBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  document?: InputMaybe<DocumentBoolExp>;
  documentId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  kind?: InputMaybe<DocumentBlockKindEnumComparisonExp>;
  mediaItem?: InputMaybe<MediaItemBoolExp>;
  mediaItemId?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  parentBlock?: InputMaybe<DocumentBlockBoolExp>;
  parentBlockId?: InputMaybe<UuidComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** columns and relationships of "document_block_kind" */
export type DocumentBlockKind = {
  __typename?: 'DocumentBlockKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "document_block_kind". All fields are combined with a logical 'AND'. */
export type DocumentBlockKindBoolExp = {
  _and?: InputMaybe<Array<DocumentBlockKindBoolExp>>;
  _not?: InputMaybe<DocumentBlockKindBoolExp>;
  _or?: InputMaybe<Array<DocumentBlockKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

export enum DocumentBlockKindEnum {
  Image = 'IMAGE',
  Text = 'TEXT'
}

/** Boolean expression to compare columns of type "DocumentBlockKindEnum". All fields are combined with logical 'AND'. */
export type DocumentBlockKindEnumComparisonExp = {
  _eq?: InputMaybe<DocumentBlockKindEnum>;
  _in?: InputMaybe<Array<DocumentBlockKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<DocumentBlockKindEnum>;
  _nin?: InputMaybe<Array<DocumentBlockKindEnum>>;
};

/** Ordering options when selecting data from "document_block_kind". */
export type DocumentBlockKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "document_block_kind" */
export enum DocumentBlockKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "document_block_kind" */
export type DocumentBlockKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DocumentBlockKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DocumentBlockKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "document_block" */
export type DocumentBlockMaxOrderBy = {
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  documentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  parentBlockId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "document_block" */
export type DocumentBlockMinOrderBy = {
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  documentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  parentBlockId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "document_block". */
export type DocumentBlockOrderBy = {
  body?: InputMaybe<OrderBy>;
  childBlocksAggregate?: InputMaybe<DocumentBlockAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  document?: InputMaybe<DocumentOrderBy>;
  documentId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  mediaItem?: InputMaybe<MediaItemOrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  parentBlock?: InputMaybe<DocumentBlockOrderBy>;
  parentBlockId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "document_block" */
export enum DocumentBlockSelectColumn {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  MediaItemId = 'mediaItemId',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ParentBlockId = 'parentBlockId',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "document_block" */
export type DocumentBlockStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DocumentBlockStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DocumentBlockStreamCursorValueInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kind?: InputMaybe<DocumentBlockKindEnum>;
  mediaItemId?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  parentBlockId?: InputMaybe<Scalars['uuid']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to filter rows from the table "document". All fields are combined with a logical 'AND'. */
export type DocumentBoolExp = {
  _and?: InputMaybe<Array<DocumentBoolExp>>;
  _not?: InputMaybe<DocumentBoolExp>;
  _or?: InputMaybe<Array<DocumentBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  kind?: InputMaybe<DocumentKindEnumComparisonExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  slug?: InputMaybe<CitextComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visibility?: InputMaybe<VisibilityKindEnumComparisonExp>;
};

/** columns and relationships of "document_kind" */
export type DocumentKind = {
  __typename?: 'DocumentKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "document_kind". All fields are combined with a logical 'AND'. */
export type DocumentKindBoolExp = {
  _and?: InputMaybe<Array<DocumentKindBoolExp>>;
  _not?: InputMaybe<DocumentKindBoolExp>;
  _or?: InputMaybe<Array<DocumentKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

export enum DocumentKindEnum {
  Agreement = 'AGREEMENT',
  Page = 'PAGE'
}

/** Boolean expression to compare columns of type "DocumentKindEnum". All fields are combined with logical 'AND'. */
export type DocumentKindEnumComparisonExp = {
  _eq?: InputMaybe<DocumentKindEnum>;
  _in?: InputMaybe<Array<DocumentKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<DocumentKindEnum>;
  _nin?: InputMaybe<Array<DocumentKindEnum>>;
};

/** Ordering options when selecting data from "document_kind". */
export type DocumentKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "document_kind" */
export enum DocumentKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "document_kind" */
export type DocumentKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DocumentKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DocumentKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options when selecting data from "document". */
export type DocumentOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  profileId?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** select columns of table "document" */
export enum DocumentSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Kind = 'kind',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  Slug = 'slug',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visibility = 'visibility'
}

/** Streaming cursor of the table "document" */
export type DocumentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DocumentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DocumentStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<DocumentKindEnum>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['citext']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  visibility?: InputMaybe<VisibilityKindEnum>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'Event';
  /** An object relationship */
  coverPhoto?: Maybe<MediaItem>;
  coverPhotoId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  endDate: Scalars['date']['output'];
  endTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  eventLive?: Maybe<EventLive>;
  id: Scalars['uuid']['output'];
  isDeleted: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  location?: Maybe<GeoLocation>;
  locationId?: Maybe<Scalars['uuid']['output']>;
  metadata: Scalars['jsonb']['output'];
  name: Scalars['citext']['output'];
  /** An object relationship */
  profile: Profile;
  profileId: Scalars['uuid']['output'];
  raffleId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  recurrence?: Maybe<EventRecurrence>;
  recurrenceId?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['date']['output'];
  startTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  templateId?: Maybe<Scalars['uuid']['output']>;
  tenantId: Scalars['String']['output'];
  /** An array relationship */
  ticketOptions: Array<EventTicketOption>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  visibility: VisibilityKindEnum;
};


/** columns and relationships of "event" */
export type EventMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "event" */
export type EventTicketOptionsArgs = {
  distinctOn?: InputMaybe<Array<EventTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventTicketOptionOrderBy>>;
  where?: InputMaybe<EventTicketOptionBoolExp>;
};

/** columns and relationships of "event_availability_kind" */
export type EventAvailabilityKind = {
  __typename?: 'EventAvailabilityKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "event_availability_kind". All fields are combined with a logical 'AND'. */
export type EventAvailabilityKindBoolExp = {
  _and?: InputMaybe<Array<EventAvailabilityKindBoolExp>>;
  _not?: InputMaybe<EventAvailabilityKindBoolExp>;
  _or?: InputMaybe<Array<EventAvailabilityKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "event_availability_kind". */
export type EventAvailabilityKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "event_availability_kind" */
export enum EventAvailabilityKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "event_availability_kind" */
export type EventAvailabilityKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventAvailabilityKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventAvailabilityKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type EventBoolExp = {
  _and?: InputMaybe<Array<EventBoolExp>>;
  _not?: InputMaybe<EventBoolExp>;
  _or?: InputMaybe<Array<EventBoolExp>>;
  coverPhoto?: InputMaybe<MediaItemBoolExp>;
  coverPhotoId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  endDate?: InputMaybe<DateComparisonExp>;
  endTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  eventLive?: InputMaybe<EventLiveBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDeleted?: InputMaybe<BooleanComparisonExp>;
  kind?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  link?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<GeoLocationBoolExp>;
  locationId?: InputMaybe<UuidComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  name?: InputMaybe<CitextComparisonExp>;
  profile?: InputMaybe<ProfileBoolExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  raffleId?: InputMaybe<UuidComparisonExp>;
  recurrence?: InputMaybe<EventRecurrenceBoolExp>;
  recurrenceId?: InputMaybe<UuidComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  startDate?: InputMaybe<DateComparisonExp>;
  startTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  templateId?: InputMaybe<UuidComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  ticketOptions?: InputMaybe<EventTicketOptionBoolExp>;
  timezone?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visibility?: InputMaybe<VisibilityKindEnumComparisonExp>;
};

/** columns and relationships of "event_live" */
export type EventLive = {
  __typename?: 'EventLive';
  cleanupReady?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  event: Event;
  eventId: Scalars['uuid']['output'];
  id: Scalars['String']['output'];
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  /** Gets the response counts for the currently active question_set */
  liveResponseCounts?: Maybe<Scalars['jsonb']['output']>;
  nextTimer?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  profile: Profile;
  profileId: Scalars['uuid']['output'];
  questionId?: Maybe<Scalars['uuid']['output']>;
  questionSetId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  raffle?: Maybe<GameRaffle>;
  raffleId?: Maybe<Scalars['uuid']['output']>;
  /** A computed field, executes function "current_time" */
  serverTime?: Maybe<Scalars['timestamptz']['output']>;
  showAfterQuestionDetails: Scalars['Boolean']['output'];
  startTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "event_live" */
export type EventLiveLiveResponseCountsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "event_live". All fields are combined with a logical 'AND'. */
export type EventLiveBoolExp = {
  _and?: InputMaybe<Array<EventLiveBoolExp>>;
  _not?: InputMaybe<EventLiveBoolExp>;
  _or?: InputMaybe<Array<EventLiveBoolExp>>;
  cleanupReady?: InputMaybe<BooleanComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventBoolExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isLive?: InputMaybe<BooleanComparisonExp>;
  isPaused?: InputMaybe<BooleanComparisonExp>;
  liveResponseCounts?: InputMaybe<JsonbComparisonExp>;
  nextTimer?: InputMaybe<TimestamptzComparisonExp>;
  profile?: InputMaybe<ProfileBoolExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  questionId?: InputMaybe<UuidComparisonExp>;
  questionSetId?: InputMaybe<UuidComparisonExp>;
  raffle?: InputMaybe<GameRaffleBoolExp>;
  raffleId?: InputMaybe<UuidComparisonExp>;
  serverTime?: InputMaybe<TimestamptzComparisonExp>;
  showAfterQuestionDetails?: InputMaybe<BooleanComparisonExp>;
  startTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  tenant?: InputMaybe<TenantBoolExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "event_live". */
export type EventLiveOrderBy = {
  cleanupReady?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventOrderBy>;
  eventId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isLive?: InputMaybe<OrderBy>;
  isPaused?: InputMaybe<OrderBy>;
  liveResponseCounts?: InputMaybe<OrderBy>;
  nextTimer?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfileOrderBy>;
  profileId?: InputMaybe<OrderBy>;
  questionId?: InputMaybe<OrderBy>;
  questionSetId?: InputMaybe<OrderBy>;
  raffle?: InputMaybe<GameRaffleOrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  serverTime?: InputMaybe<OrderBy>;
  showAfterQuestionDetails?: InputMaybe<OrderBy>;
  startTimestamp?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantOrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "event_live" */
export enum EventLiveSelectColumn {
  /** column name */
  CleanupReady = 'cleanupReady',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  IsLive = 'isLive',
  /** column name */
  IsPaused = 'isPaused',
  /** column name */
  NextTimer = 'nextTimer',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  QuestionId = 'questionId',
  /** column name */
  QuestionSetId = 'questionSetId',
  /** column name */
  RaffleId = 'raffleId',
  /** column name */
  ShowAfterQuestionDetails = 'showAfterQuestionDetails',
  /** column name */
  StartTimestamp = 'startTimestamp',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "event_live" */
export type EventLiveStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventLiveStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventLiveStreamCursorValueInput = {
  cleanupReady?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  nextTimer?: InputMaybe<Scalars['timestamptz']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  questionId?: InputMaybe<Scalars['uuid']['input']>;
  questionSetId?: InputMaybe<Scalars['uuid']['input']>;
  raffleId?: InputMaybe<Scalars['uuid']['input']>;
  showAfterQuestionDetails?: InputMaybe<Scalars['Boolean']['input']>;
  startTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Ordering options when selecting data from "event". */
export type EventOrderBy = {
  coverPhoto?: InputMaybe<MediaItemOrderBy>;
  coverPhotoId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  endTimestamp?: InputMaybe<OrderBy>;
  eventLive?: InputMaybe<EventLiveOrderBy>;
  id?: InputMaybe<OrderBy>;
  isDeleted?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  link?: InputMaybe<OrderBy>;
  location?: InputMaybe<GeoLocationOrderBy>;
  locationId?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfileOrderBy>;
  profileId?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  recurrence?: InputMaybe<EventRecurrenceOrderBy>;
  recurrenceId?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  startTimestamp?: InputMaybe<OrderBy>;
  templateId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  ticketOptionsAggregate?: InputMaybe<EventTicketOptionAggregateOrderBy>;
  timezone?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** columns and relationships of "event_recurrence" */
export type EventRecurrence = {
  __typename?: 'EventRecurrence';
  createdAt: Scalars['timestamptz']['output'];
  dayOfMonth?: Maybe<Scalars['Int']['output']>;
  daysOfWeek?: Maybe<Array<Scalars['String']['output']>>;
  endsAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  event?: Maybe<Event>;
  id: Scalars['uuid']['output'];
  kind: EventRecurrenceKindEnum;
  month?: Maybe<Scalars['Int']['output']>;
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "event_recurrence". All fields are combined with a logical 'AND'. */
export type EventRecurrenceBoolExp = {
  _and?: InputMaybe<Array<EventRecurrenceBoolExp>>;
  _not?: InputMaybe<EventRecurrenceBoolExp>;
  _or?: InputMaybe<Array<EventRecurrenceBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dayOfMonth?: InputMaybe<IntComparisonExp>;
  daysOfWeek?: InputMaybe<StringArrayComparisonExp>;
  endsAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  kind?: InputMaybe<EventRecurrenceKindEnumComparisonExp>;
  month?: InputMaybe<IntComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

export enum EventRecurrenceKindEnum {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

/** Boolean expression to compare columns of type "EventRecurrenceKindEnum". All fields are combined with logical 'AND'. */
export type EventRecurrenceKindEnumComparisonExp = {
  _eq?: InputMaybe<EventRecurrenceKindEnum>;
  _in?: InputMaybe<Array<EventRecurrenceKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<EventRecurrenceKindEnum>;
  _nin?: InputMaybe<Array<EventRecurrenceKindEnum>>;
};

/** Ordering options when selecting data from "event_recurrence". */
export type EventRecurrenceOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dayOfMonth?: InputMaybe<OrderBy>;
  daysOfWeek?: InputMaybe<OrderBy>;
  endsAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventOrderBy>;
  id?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  month?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "event_recurrence" */
export enum EventRecurrenceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DayOfMonth = 'dayOfMonth',
  /** column name */
  DaysOfWeek = 'daysOfWeek',
  /** column name */
  EndsAt = 'endsAt',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Month = 'month',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "event_recurrence" */
export type EventRecurrenceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventRecurrenceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventRecurrenceStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  dayOfMonth?: InputMaybe<Scalars['Int']['input']>;
  daysOfWeek?: InputMaybe<Array<Scalars['String']['input']>>;
  endsAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kind?: InputMaybe<EventRecurrenceKindEnum>;
  month?: InputMaybe<Scalars['Int']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** select columns of table "event" */
export enum EventSelectColumn {
  /** column name */
  CoverPhotoId = 'coverPhotoId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  EndTimestamp = 'endTimestamp',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Kind = 'kind',
  /** column name */
  Label = 'label',
  /** column name */
  Link = 'link',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  RaffleId = 'raffleId',
  /** column name */
  RecurrenceId = 'recurrenceId',
  /** column name */
  Slug = 'slug',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  StartTimestamp = 'startTimestamp',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visibility = 'visibility'
}

/** Streaming cursor of the table "event" */
export type EventStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventStreamCursorValueInput = {
  coverPhotoId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['date']['input']>;
  endTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['citext']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  raffleId?: InputMaybe<Scalars['uuid']['input']>;
  recurrenceId?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['date']['input']>;
  startTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  templateId?: InputMaybe<Scalars['uuid']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  visibility?: InputMaybe<VisibilityKindEnum>;
};

/** columns and relationships of "event_ticket_option" */
export type EventTicketOption = {
  __typename?: 'EventTicketOption';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  eventId: Scalars['uuid']['output'];
  /** An object relationship */
  product: ShopProduct;
  productId: Scalars['uuid']['output'];
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "event_ticket_option" */
export type EventTicketOptionAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<EventTicketOptionMaxOrderBy>;
  min?: InputMaybe<EventTicketOptionMinOrderBy>;
};

/** Boolean expression to filter rows from the table "event_ticket_option". All fields are combined with a logical 'AND'. */
export type EventTicketOptionBoolExp = {
  _and?: InputMaybe<Array<EventTicketOptionBoolExp>>;
  _not?: InputMaybe<EventTicketOptionBoolExp>;
  _or?: InputMaybe<Array<EventTicketOptionBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventBoolExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  product?: InputMaybe<ShopProductBoolExp>;
  productId?: InputMaybe<UuidComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "event_ticket_option" */
export type EventTicketOptionMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  productId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "event_ticket_option" */
export type EventTicketOptionMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  productId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "event_ticket_option". */
export type EventTicketOptionOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventOrderBy>;
  eventId?: InputMaybe<OrderBy>;
  product?: InputMaybe<ShopProductOrderBy>;
  productId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "event_ticket_option" */
export enum EventTicketOptionSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  ProductId = 'productId',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "event_ticket_option" */
export type EventTicketOptionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventTicketOptionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventTicketOptionStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['uuid']['input']>;
  productId?: InputMaybe<Scalars['uuid']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type FeedbackInput = {
  email: Scalars['String']['input'];
  feedback: Scalars['String']['input'];
  name: Scalars['String']['input'];
  navigationStateJSON?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  sourceScreen?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['String']['input'];
};

export type FeedbackOutput = {
  __typename?: 'FeedbackOutput';
  success: Scalars['Boolean']['output'];
};

/** columns and relationships of "game_raffle" */
export type GameRaffle = {
  __typename?: 'GameRaffle';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  profile: Profile;
  profileId: Scalars['uuid']['output'];
  prompt?: Maybe<Scalars['String']['output']>;
  promptDescription?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  rafflePrizes: Array<GameRafflePrize>;
  /** An aggregate relationship */
  rafflePrizesAggregate: GameRafflePrizeAggregate;
  /** An array relationship */
  raffleTicketOptions: Array<GameRaffleTicketOption>;
  /** An aggregate relationship */
  raffleTicketOptionsAggregate: GameRaffleTicketOptionAggregate;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  visibility: VisibilityKindEnum;
};


/** columns and relationships of "game_raffle" */
export type GameRaffleRafflePrizesArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


/** columns and relationships of "game_raffle" */
export type GameRaffleRafflePrizesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


/** columns and relationships of "game_raffle" */
export type GameRaffleRaffleTicketOptionsArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


/** columns and relationships of "game_raffle" */
export type GameRaffleRaffleTicketOptionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};

/** Boolean expression to filter rows from the table "game_raffle". All fields are combined with a logical 'AND'. */
export type GameRaffleBoolExp = {
  _and?: InputMaybe<Array<GameRaffleBoolExp>>;
  _not?: InputMaybe<GameRaffleBoolExp>;
  _or?: InputMaybe<Array<GameRaffleBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  profile?: InputMaybe<ProfileBoolExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  prompt?: InputMaybe<StringComparisonExp>;
  promptDescription?: InputMaybe<StringComparisonExp>;
  rafflePrizes?: InputMaybe<GameRafflePrizeBoolExp>;
  rafflePrizesAggregate?: InputMaybe<GameRafflePrizeAggregateBoolExp>;
  raffleTicketOptions?: InputMaybe<GameRaffleTicketOptionBoolExp>;
  raffleTicketOptionsAggregate?: InputMaybe<GameRaffleTicketOptionAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visibility?: InputMaybe<VisibilityKindEnumComparisonExp>;
};

/** Ordering options when selecting data from "game_raffle". */
export type GameRaffleOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfileOrderBy>;
  profileId?: InputMaybe<OrderBy>;
  prompt?: InputMaybe<OrderBy>;
  promptDescription?: InputMaybe<OrderBy>;
  rafflePrizesAggregate?: InputMaybe<GameRafflePrizeAggregateOrderBy>;
  raffleTicketOptionsAggregate?: InputMaybe<GameRaffleTicketOptionAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** columns and relationships of "game_raffle_prize" */
export type GameRafflePrize = {
  __typename?: 'GameRafflePrize';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  raffle: GameRaffle;
  raffleId: Scalars['uuid']['output'];
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "game_raffle_prize" */
export type GameRafflePrizeAggregate = {
  __typename?: 'GameRafflePrizeAggregate';
  aggregate?: Maybe<GameRafflePrizeAggregateFields>;
  nodes: Array<GameRafflePrize>;
};

export type GameRafflePrizeAggregateBoolExp = {
  count?: InputMaybe<GameRafflePrizeAggregateBoolExpCount>;
};

/** aggregate fields of "game_raffle_prize" */
export type GameRafflePrizeAggregateFields = {
  __typename?: 'GameRafflePrizeAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<GameRafflePrizeMaxFields>;
  min?: Maybe<GameRafflePrizeMinFields>;
};


/** aggregate fields of "game_raffle_prize" */
export type GameRafflePrizeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_raffle_prize" */
export type GameRafflePrizeAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GameRafflePrizeMaxOrderBy>;
  min?: InputMaybe<GameRafflePrizeMinOrderBy>;
};

/** Boolean expression to filter rows from the table "game_raffle_prize". All fields are combined with a logical 'AND'. */
export type GameRafflePrizeBoolExp = {
  _and?: InputMaybe<Array<GameRafflePrizeBoolExp>>;
  _not?: InputMaybe<GameRafflePrizeBoolExp>;
  _or?: InputMaybe<Array<GameRafflePrizeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  raffle?: InputMaybe<GameRaffleBoolExp>;
  raffleId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** aggregate max on columns */
export type GameRafflePrizeMaxFields = {
  __typename?: 'GameRafflePrizeMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  raffleId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "game_raffle_prize" */
export type GameRafflePrizeMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GameRafflePrizeMinFields = {
  __typename?: 'GameRafflePrizeMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  raffleId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "game_raffle_prize" */
export type GameRafflePrizeMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "game_raffle_prize". */
export type GameRafflePrizeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  raffle?: InputMaybe<GameRaffleOrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "game_raffle_prize" */
export enum GameRafflePrizeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RaffleId = 'raffleId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "game_raffle_prize" */
export type GameRafflePrizeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GameRafflePrizeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GameRafflePrizeStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  raffleId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** select columns of table "game_raffle" */
export enum GameRaffleSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  PromptDescription = 'promptDescription',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visibility = 'visibility'
}

/** Streaming cursor of the table "game_raffle" */
export type GameRaffleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GameRaffleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GameRaffleStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  promptDescription?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  visibility?: InputMaybe<VisibilityKindEnum>;
};

/** columns and relationships of "game_raffle_ticket_option" */
export type GameRaffleTicketOption = {
  __typename?: 'GameRaffleTicketOption';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  instructions?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  kind: GameRaffleTicketOptionKindEnum;
  /** An object relationship */
  raffle: GameRaffle;
  raffleId: Scalars['uuid']['output'];
  ticketsGranted: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "game_raffle_ticket_option" */
export type GameRaffleTicketOptionAggregate = {
  __typename?: 'GameRaffleTicketOptionAggregate';
  aggregate?: Maybe<GameRaffleTicketOptionAggregateFields>;
  nodes: Array<GameRaffleTicketOption>;
};

export type GameRaffleTicketOptionAggregateBoolExp = {
  bool_and?: InputMaybe<GameRaffleTicketOptionAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<GameRaffleTicketOptionAggregateBoolExpBool_Or>;
  count?: InputMaybe<GameRaffleTicketOptionAggregateBoolExpCount>;
};

/** aggregate fields of "game_raffle_ticket_option" */
export type GameRaffleTicketOptionAggregateFields = {
  __typename?: 'GameRaffleTicketOptionAggregateFields';
  avg?: Maybe<GameRaffleTicketOptionAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GameRaffleTicketOptionMaxFields>;
  min?: Maybe<GameRaffleTicketOptionMinFields>;
  stddev?: Maybe<GameRaffleTicketOptionStddevFields>;
  stddevPop?: Maybe<GameRaffleTicketOptionStddevPopFields>;
  stddevSamp?: Maybe<GameRaffleTicketOptionStddevSampFields>;
  sum?: Maybe<GameRaffleTicketOptionSumFields>;
  varPop?: Maybe<GameRaffleTicketOptionVarPopFields>;
  varSamp?: Maybe<GameRaffleTicketOptionVarSampFields>;
  variance?: Maybe<GameRaffleTicketOptionVarianceFields>;
};


/** aggregate fields of "game_raffle_ticket_option" */
export type GameRaffleTicketOptionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionAggregateOrderBy = {
  avg?: InputMaybe<GameRaffleTicketOptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GameRaffleTicketOptionMaxOrderBy>;
  min?: InputMaybe<GameRaffleTicketOptionMinOrderBy>;
  stddev?: InputMaybe<GameRaffleTicketOptionStddevOrderBy>;
  stddevPop?: InputMaybe<GameRaffleTicketOptionStddevPopOrderBy>;
  stddevSamp?: InputMaybe<GameRaffleTicketOptionStddevSampOrderBy>;
  sum?: InputMaybe<GameRaffleTicketOptionSumOrderBy>;
  varPop?: InputMaybe<GameRaffleTicketOptionVarPopOrderBy>;
  varSamp?: InputMaybe<GameRaffleTicketOptionVarSampOrderBy>;
  variance?: InputMaybe<GameRaffleTicketOptionVarianceOrderBy>;
};

/** aggregate avg on columns */
export type GameRaffleTicketOptionAvgFields = {
  __typename?: 'GameRaffleTicketOptionAvgFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionAvgOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "game_raffle_ticket_option". All fields are combined with a logical 'AND'. */
export type GameRaffleTicketOptionBoolExp = {
  _and?: InputMaybe<Array<GameRaffleTicketOptionBoolExp>>;
  _not?: InputMaybe<GameRaffleTicketOptionBoolExp>;
  _or?: InputMaybe<Array<GameRaffleTicketOptionBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  instructions?: InputMaybe<StringComparisonExp>;
  isRequired?: InputMaybe<BooleanComparisonExp>;
  kind?: InputMaybe<GameRaffleTicketOptionKindEnumComparisonExp>;
  raffle?: InputMaybe<GameRaffleBoolExp>;
  raffleId?: InputMaybe<UuidComparisonExp>;
  ticketsGranted?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

export enum GameRaffleTicketOptionKindEnum {
  MailingList = 'MAILING_LIST',
  SmsNotifications = 'SMS_NOTIFICATIONS'
}

/** Boolean expression to compare columns of type "GameRaffleTicketOptionKindEnum". All fields are combined with logical 'AND'. */
export type GameRaffleTicketOptionKindEnumComparisonExp = {
  _eq?: InputMaybe<GameRaffleTicketOptionKindEnum>;
  _in?: InputMaybe<Array<GameRaffleTicketOptionKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<GameRaffleTicketOptionKindEnum>;
  _nin?: InputMaybe<Array<GameRaffleTicketOptionKindEnum>>;
};

/** aggregate max on columns */
export type GameRaffleTicketOptionMaxFields = {
  __typename?: 'GameRaffleTicketOptionMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  raffleId?: Maybe<Scalars['uuid']['output']>;
  ticketsGranted?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instructions?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  ticketsGranted?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GameRaffleTicketOptionMinFields = {
  __typename?: 'GameRaffleTicketOptionMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  raffleId?: Maybe<Scalars['uuid']['output']>;
  ticketsGranted?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instructions?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  ticketsGranted?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "game_raffle_ticket_option". */
export type GameRaffleTicketOptionOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instructions?: InputMaybe<OrderBy>;
  isRequired?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  raffle?: InputMaybe<GameRaffleOrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  ticketsGranted?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "game_raffle_ticket_option" */
export enum GameRaffleTicketOptionSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  IsRequired = 'isRequired',
  /** column name */
  Kind = 'kind',
  /** column name */
  RaffleId = 'raffleId',
  /** column name */
  TicketsGranted = 'ticketsGranted',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "gameRaffleTicketOptionAggregateBoolExpBool_andArgumentsColumns" columns of table "game_raffle_ticket_option" */
export enum GameRaffleTicketOptionSelectColumnGameRaffleTicketOptionAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsRequired = 'isRequired'
}

/** select "gameRaffleTicketOptionAggregateBoolExpBool_orArgumentsColumns" columns of table "game_raffle_ticket_option" */
export enum GameRaffleTicketOptionSelectColumnGameRaffleTicketOptionAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsRequired = 'isRequired'
}

/** aggregate stddev on columns */
export type GameRaffleTicketOptionStddevFields = {
  __typename?: 'GameRaffleTicketOptionStddevFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionStddevOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type GameRaffleTicketOptionStddevPopFields = {
  __typename?: 'GameRaffleTicketOptionStddevPopFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionStddevPopOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type GameRaffleTicketOptionStddevSampFields = {
  __typename?: 'GameRaffleTicketOptionStddevSampFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionStddevSampOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GameRaffleTicketOptionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GameRaffleTicketOptionStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<GameRaffleTicketOptionKindEnum>;
  raffleId?: InputMaybe<Scalars['uuid']['input']>;
  ticketsGranted?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type GameRaffleTicketOptionSumFields = {
  __typename?: 'GameRaffleTicketOptionSumFields';
  ticketsGranted?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionSumOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type GameRaffleTicketOptionVarPopFields = {
  __typename?: 'GameRaffleTicketOptionVarPopFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionVarPopOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type GameRaffleTicketOptionVarSampFields = {
  __typename?: 'GameRaffleTicketOptionVarSampFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionVarSampOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type GameRaffleTicketOptionVarianceFields = {
  __typename?: 'GameRaffleTicketOptionVarianceFields';
  ticketsGranted?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_raffle_ticket_option" */
export type GameRaffleTicketOptionVarianceOrderBy = {
  ticketsGranted?: InputMaybe<OrderBy>;
};

/** columns and relationships of "geo_location" */
export type GeoLocation = {
  __typename?: 'GeoLocation';
  city?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  formatted?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  latitude: Scalars['numeric']['output'];
  longitude: Scalars['numeric']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  profile?: Maybe<Profile>;
  state?: Maybe<Scalars['String']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  street1?: Maybe<Scalars['String']['output']>;
  street2?: Maybe<Scalars['String']['output']>;
  tenantId: Scalars['String']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "geo_location" */
export type GeoLocationMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "geo_location". All fields are combined with a logical 'AND'. */
export type GeoLocationBoolExp = {
  _and?: InputMaybe<Array<GeoLocationBoolExp>>;
  _not?: InputMaybe<GeoLocationBoolExp>;
  _or?: InputMaybe<Array<GeoLocationBoolExp>>;
  city?: InputMaybe<StringComparisonExp>;
  country?: InputMaybe<StringComparisonExp>;
  countryCode?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventBoolExp>;
  formatted?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  latitude?: InputMaybe<NumericComparisonExp>;
  longitude?: InputMaybe<NumericComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  postalCode?: InputMaybe<StringComparisonExp>;
  profile?: InputMaybe<ProfileBoolExp>;
  state?: InputMaybe<StringComparisonExp>;
  stateCode?: InputMaybe<StringComparisonExp>;
  street1?: InputMaybe<StringComparisonExp>;
  street2?: InputMaybe<StringComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  timezone?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "geo_location". */
export type GeoLocationOrderBy = {
  city?: InputMaybe<OrderBy>;
  country?: InputMaybe<OrderBy>;
  countryCode?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventOrderBy>;
  formatted?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  latitude?: InputMaybe<OrderBy>;
  longitude?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  postalCode?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfileOrderBy>;
  state?: InputMaybe<OrderBy>;
  stateCode?: InputMaybe<OrderBy>;
  street1?: InputMaybe<OrderBy>;
  street2?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  timezone?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "geo_location" */
export enum GeoLocationSelectColumn {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Formatted = 'formatted',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  PostalCode = 'postalCode',
  /** column name */
  State = 'state',
  /** column name */
  StateCode = 'stateCode',
  /** column name */
  Street1 = 'street1',
  /** column name */
  Street2 = 'street2',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "geo_location" */
export type GeoLocationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GeoLocationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GeoLocationStreamCursorValueInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  formatted?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  latitude?: InputMaybe<Scalars['numeric']['input']>;
  longitude?: InputMaybe<Scalars['numeric']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateCode?: InputMaybe<Scalars['String']['input']>;
  street1?: InputMaybe<Scalars['String']['input']>;
  street2?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "media_item" */
export type MediaItem = {
  __typename?: 'MediaItem';
  blurHash: Scalars['String']['output'];
  contentLength: Scalars['Int']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  defaultUrl: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  kind: MediaKindEnum;
  /** An array relationship */
  tags: Array<MediaItemTag>;
  tenantId: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  width: Scalars['Int']['output'];
};


/** columns and relationships of "media_item" */
export type MediaItemTagsArgs = {
  distinctOn?: InputMaybe<Array<MediaItemTagSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaItemTagOrderBy>>;
  where?: InputMaybe<MediaItemTagBoolExp>;
};

/** Boolean expression to filter rows from the table "media_item". All fields are combined with a logical 'AND'. */
export type MediaItemBoolExp = {
  _and?: InputMaybe<Array<MediaItemBoolExp>>;
  _not?: InputMaybe<MediaItemBoolExp>;
  _or?: InputMaybe<Array<MediaItemBoolExp>>;
  blurHash?: InputMaybe<StringComparisonExp>;
  contentLength?: InputMaybe<IntComparisonExp>;
  contentType?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  defaultUrl?: InputMaybe<StringComparisonExp>;
  filename?: InputMaybe<StringComparisonExp>;
  height?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  kind?: InputMaybe<MediaKindEnumComparisonExp>;
  tags?: InputMaybe<MediaItemTagBoolExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  thumbnailUrl?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  width?: InputMaybe<IntComparisonExp>;
};

/** Ordering options when selecting data from "media_item". */
export type MediaItemOrderBy = {
  blurHash?: InputMaybe<OrderBy>;
  contentLength?: InputMaybe<OrderBy>;
  contentType?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  defaultUrl?: InputMaybe<OrderBy>;
  filename?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  tagsAggregate?: InputMaybe<MediaItemTagAggregateOrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  thumbnailUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** select columns of table "media_item" */
export enum MediaItemSelectColumn {
  /** column name */
  BlurHash = 'blurHash',
  /** column name */
  ContentLength = 'contentLength',
  /** column name */
  ContentType = 'contentType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultUrl = 'defaultUrl',
  /** column name */
  Filename = 'filename',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  ThumbnailUrl = 'thumbnailUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Width = 'width'
}

/** Streaming cursor of the table "media_item" */
export type MediaItemStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MediaItemStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MediaItemStreamCursorValueInput = {
  blurHash?: InputMaybe<Scalars['String']['input']>;
  contentLength?: InputMaybe<Scalars['Int']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  defaultUrl?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<MediaKindEnum>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "media_item_tag" */
export type MediaItemTag = {
  __typename?: 'MediaItemTag';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  mediaItem: MediaItem;
  mediaItemId: Scalars['String']['output'];
  tag: Scalars['String']['output'];
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** order by aggregate values of table "media_item_tag" */
export type MediaItemTagAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<MediaItemTagMaxOrderBy>;
  min?: InputMaybe<MediaItemTagMinOrderBy>;
};

/** Boolean expression to filter rows from the table "media_item_tag". All fields are combined with a logical 'AND'. */
export type MediaItemTagBoolExp = {
  _and?: InputMaybe<Array<MediaItemTagBoolExp>>;
  _not?: InputMaybe<MediaItemTagBoolExp>;
  _or?: InputMaybe<Array<MediaItemTagBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  mediaItem?: InputMaybe<MediaItemBoolExp>;
  mediaItemId?: InputMaybe<StringComparisonExp>;
  tag?: InputMaybe<StringComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "media_item_tag" */
export type MediaItemTagMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "media_item_tag" */
export type MediaItemTagMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "media_item_tag". */
export type MediaItemTagOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  mediaItem?: InputMaybe<MediaItemOrderBy>;
  mediaItemId?: InputMaybe<OrderBy>;
  tag?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "media_item_tag" */
export enum MediaItemTagSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  MediaItemId = 'mediaItemId',
  /** column name */
  Tag = 'tag',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "media_item_tag" */
export type MediaItemTagStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MediaItemTagStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MediaItemTagStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  mediaItemId?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "media_kind" */
export type MediaKind = {
  __typename?: 'MediaKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "media_kind". All fields are combined with a logical 'AND'. */
export type MediaKindBoolExp = {
  _and?: InputMaybe<Array<MediaKindBoolExp>>;
  _not?: InputMaybe<MediaKindBoolExp>;
  _or?: InputMaybe<Array<MediaKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

export enum MediaKindEnum {
  CloudflareImage = 'CLOUDFLARE_IMAGE',
  CloudflareVideo = 'CLOUDFLARE_VIDEO',
  SvgAvatar = 'SVG_AVATAR',
  WebImage = 'WEB_IMAGE'
}

/** Boolean expression to compare columns of type "MediaKindEnum". All fields are combined with logical 'AND'. */
export type MediaKindEnumComparisonExp = {
  _eq?: InputMaybe<MediaKindEnum>;
  _in?: InputMaybe<Array<MediaKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<MediaKindEnum>;
  _nin?: InputMaybe<Array<MediaKindEnum>>;
};

/** Ordering options when selecting data from "media_kind". */
export type MediaKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "media_kind" */
export enum MediaKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "media_kind" */
export type MediaKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MediaKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MediaKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "post_reaction_kind" */
export type PostReactionKind = {
  __typename?: 'PostReactionKind';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "post_reaction_kind". All fields are combined with a logical 'AND'. */
export type PostReactionKindBoolExp = {
  _and?: InputMaybe<Array<PostReactionKindBoolExp>>;
  _not?: InputMaybe<PostReactionKindBoolExp>;
  _or?: InputMaybe<Array<PostReactionKindBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "post_reaction_kind". */
export type PostReactionKindOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "post_reaction_kind" */
export enum PostReactionKindSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "post_reaction_kind" */
export type PostReactionKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostReactionKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostReactionKindStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'Profile';
  /** An array relationship */
  attributes: Array<ProfileAttribute>;
  bio?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  childProfileNodes: Array<Profile>;
  createdAt: Scalars['timestamptz']['output'];
  /** A computed field, executes function "display_name" */
  displayName?: Maybe<Scalars['String']['output']>;
  facebookUsername?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  followedProfiles: Array<ProfileFollower>;
  /** An aggregate relationship */
  followedProfilesAggregate: ProfileFollowerAggregate;
  /** An array relationship */
  followers: Array<ProfileFollower>;
  /** An aggregate relationship */
  followersAggregate: ProfileFollowerAggregate;
  id: Scalars['uuid']['output'];
  instagramUsername?: Maybe<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  /** An object relationship */
  location?: Maybe<GeoLocation>;
  locationId?: Maybe<Scalars['uuid']['output']>;
  metaData: Scalars['jsonb']['output'];
  parentNodeId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  parentProfileNode?: Maybe<Profile>;
  /** An object relationship */
  photo?: Maybe<MediaItem>;
  photoId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['date']['output']>;
  /** An object relationship */
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
  tiktokUsername?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  username: Scalars['citext']['output'];
  xUsername?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "profile" */
export type ProfileAttributesArgs = {
  distinctOn?: InputMaybe<Array<ProfileAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileAttributeOrderBy>>;
  where?: InputMaybe<ProfileAttributeBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileChildProfileNodesArgs = {
  distinctOn?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileFollowedProfilesArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileFollowedProfilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileFollowersArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileFollowersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


/** columns and relationships of "profile" */
export type ProfileMetaDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "profile" */
export type ProfileAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfileMaxOrderBy>;
  min?: InputMaybe<ProfileMinOrderBy>;
};

/** columns and relationships of "profile_attribute" */
export type ProfileAttribute = {
  __typename?: 'ProfileAttribute';
  createdAt: Scalars['timestamptz']['output'];
  kind: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  value: Scalars['String']['output'];
};

/** order by aggregate values of table "profile_attribute" */
export type ProfileAttributeAggregateOrderBy = {
  avg?: InputMaybe<ProfileAttributeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfileAttributeMaxOrderBy>;
  min?: InputMaybe<ProfileAttributeMinOrderBy>;
  stddev?: InputMaybe<ProfileAttributeStddevOrderBy>;
  stddevPop?: InputMaybe<ProfileAttributeStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ProfileAttributeStddevSampOrderBy>;
  sum?: InputMaybe<ProfileAttributeSumOrderBy>;
  varPop?: InputMaybe<ProfileAttributeVarPopOrderBy>;
  varSamp?: InputMaybe<ProfileAttributeVarSampOrderBy>;
  variance?: InputMaybe<ProfileAttributeVarianceOrderBy>;
};

/** order by avg() on columns of table "profile_attribute" */
export type ProfileAttributeAvgOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "profile_attribute". All fields are combined with a logical 'AND'. */
export type ProfileAttributeBoolExp = {
  _and?: InputMaybe<Array<ProfileAttributeBoolExp>>;
  _not?: InputMaybe<ProfileAttributeBoolExp>;
  _or?: InputMaybe<Array<ProfileAttributeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  kind?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "profile_attribute" */
export type ProfileAttributeMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "profile_attribute" */
export type ProfileAttributeMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "profile_attribute". */
export type ProfileAttributeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** select columns of table "profile_attribute" */
export enum ProfileAttributeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Kind = 'kind',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "profile_attribute" */
export type ProfileAttributeStddevOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "profile_attribute" */
export type ProfileAttributeStddevPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "profile_attribute" */
export type ProfileAttributeStddevSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "profile_attribute" */
export type ProfileAttributeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProfileAttributeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProfileAttributeStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "profile_attribute" */
export type ProfileAttributeSumOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "profile_attribute" */
export type ProfileAttributeVarPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "profile_attribute" */
export type ProfileAttributeVarSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "profile_attribute" */
export type ProfileAttributeVarianceOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type ProfileBoolExp = {
  _and?: InputMaybe<Array<ProfileBoolExp>>;
  _not?: InputMaybe<ProfileBoolExp>;
  _or?: InputMaybe<Array<ProfileBoolExp>>;
  attributes?: InputMaybe<ProfileAttributeBoolExp>;
  bio?: InputMaybe<StringComparisonExp>;
  childProfileNodes?: InputMaybe<ProfileBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  facebookUsername?: InputMaybe<StringComparisonExp>;
  followedProfiles?: InputMaybe<ProfileFollowerBoolExp>;
  followedProfilesAggregate?: InputMaybe<ProfileFollowerAggregateBoolExp>;
  followers?: InputMaybe<ProfileFollowerBoolExp>;
  followersAggregate?: InputMaybe<ProfileFollowerAggregateBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  instagramUsername?: InputMaybe<StringComparisonExp>;
  kind?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<GeoLocationBoolExp>;
  locationId?: InputMaybe<UuidComparisonExp>;
  metaData?: InputMaybe<JsonbComparisonExp>;
  parentNodeId?: InputMaybe<UuidComparisonExp>;
  parentProfileNode?: InputMaybe<ProfileBoolExp>;
  photo?: InputMaybe<MediaItemBoolExp>;
  photoId?: InputMaybe<StringComparisonExp>;
  startDate?: InputMaybe<DateComparisonExp>;
  tenant?: InputMaybe<TenantBoolExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  tiktokUsername?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<CitextComparisonExp>;
  xUsername?: InputMaybe<StringComparisonExp>;
};

export type ProfileCheckUsernameInput = {
  username: Scalars['citext']['input'];
};

export type ProfileCheckUsernameOutput = {
  __typename?: 'ProfileCheckUsernameOutput';
  isAvailable: Scalars['Boolean']['output'];
  suggestedUsername?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "profile_follower" */
export type ProfileFollower = {
  __typename?: 'ProfileFollower';
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  followedProfile: Profile;
  followedProfileId: Scalars['uuid']['output'];
  /** An object relationship */
  follower: Profile;
  followerId: Scalars['uuid']['output'];
  kind: ProfileFollowerKindEnum;
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "profile_follower" */
export type ProfileFollowerAggregate = {
  __typename?: 'ProfileFollowerAggregate';
  aggregate?: Maybe<ProfileFollowerAggregateFields>;
  nodes: Array<ProfileFollower>;
};

export type ProfileFollowerAggregateBoolExp = {
  count?: InputMaybe<ProfileFollowerAggregateBoolExpCount>;
};

/** aggregate fields of "profile_follower" */
export type ProfileFollowerAggregateFields = {
  __typename?: 'ProfileFollowerAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ProfileFollowerMaxFields>;
  min?: Maybe<ProfileFollowerMinFields>;
};


/** aggregate fields of "profile_follower" */
export type ProfileFollowerAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "profile_follower" */
export type ProfileFollowerAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProfileFollowerMaxOrderBy>;
  min?: InputMaybe<ProfileFollowerMinOrderBy>;
};

/** Boolean expression to filter rows from the table "profile_follower". All fields are combined with a logical 'AND'. */
export type ProfileFollowerBoolExp = {
  _and?: InputMaybe<Array<ProfileFollowerBoolExp>>;
  _not?: InputMaybe<ProfileFollowerBoolExp>;
  _or?: InputMaybe<Array<ProfileFollowerBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  followedProfile?: InputMaybe<ProfileBoolExp>;
  followedProfileId?: InputMaybe<UuidComparisonExp>;
  follower?: InputMaybe<ProfileBoolExp>;
  followerId?: InputMaybe<UuidComparisonExp>;
  kind?: InputMaybe<ProfileFollowerKindEnumComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

export enum ProfileFollowerKindEnum {
  Organization = 'ORGANIZATION',
  Social = 'SOCIAL'
}

/** Boolean expression to compare columns of type "ProfileFollowerKindEnum". All fields are combined with logical 'AND'. */
export type ProfileFollowerKindEnumComparisonExp = {
  _eq?: InputMaybe<ProfileFollowerKindEnum>;
  _in?: InputMaybe<Array<ProfileFollowerKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<ProfileFollowerKindEnum>;
  _nin?: InputMaybe<Array<ProfileFollowerKindEnum>>;
};

/** aggregate max on columns */
export type ProfileFollowerMaxFields = {
  __typename?: 'ProfileFollowerMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  followedProfileId?: Maybe<Scalars['uuid']['output']>;
  followerId?: Maybe<Scalars['uuid']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "profile_follower" */
export type ProfileFollowerMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  followedProfileId?: InputMaybe<OrderBy>;
  followerId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProfileFollowerMinFields = {
  __typename?: 'ProfileFollowerMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  followedProfileId?: Maybe<Scalars['uuid']['output']>;
  followerId?: Maybe<Scalars['uuid']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "profile_follower" */
export type ProfileFollowerMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  followedProfileId?: InputMaybe<OrderBy>;
  followerId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "profile_follower". */
export type ProfileFollowerOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  followedProfile?: InputMaybe<ProfileOrderBy>;
  followedProfileId?: InputMaybe<OrderBy>;
  follower?: InputMaybe<ProfileOrderBy>;
  followerId?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "profile_follower" */
export enum ProfileFollowerSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FollowedProfileId = 'followedProfileId',
  /** column name */
  FollowerId = 'followerId',
  /** column name */
  Kind = 'kind',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "profile_follower" */
export type ProfileFollowerStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProfileFollowerStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProfileFollowerStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  followedProfileId?: InputMaybe<Scalars['uuid']['input']>;
  followerId?: InputMaybe<Scalars['uuid']['input']>;
  kind?: InputMaybe<ProfileFollowerKindEnum>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** order by max() on columns of table "profile" */
export type ProfileMaxOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  facebookUsername?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramUsername?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  locationId?: InputMaybe<OrderBy>;
  parentNodeId?: InputMaybe<OrderBy>;
  photoId?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  tiktokUsername?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  xUsername?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "profile" */
export type ProfileMinOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  facebookUsername?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramUsername?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  locationId?: InputMaybe<OrderBy>;
  parentNodeId?: InputMaybe<OrderBy>;
  photoId?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  tiktokUsername?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  xUsername?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "profile". */
export type ProfileOrderBy = {
  attributesAggregate?: InputMaybe<ProfileAttributeAggregateOrderBy>;
  bio?: InputMaybe<OrderBy>;
  childProfileNodesAggregate?: InputMaybe<ProfileAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  facebookUsername?: InputMaybe<OrderBy>;
  followedProfilesAggregate?: InputMaybe<ProfileFollowerAggregateOrderBy>;
  followersAggregate?: InputMaybe<ProfileFollowerAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  instagramUsername?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  location?: InputMaybe<GeoLocationOrderBy>;
  locationId?: InputMaybe<OrderBy>;
  metaData?: InputMaybe<OrderBy>;
  parentNodeId?: InputMaybe<OrderBy>;
  parentProfileNode?: InputMaybe<ProfileOrderBy>;
  photo?: InputMaybe<MediaItemOrderBy>;
  photoId?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantOrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  tiktokUsername?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
  xUsername?: InputMaybe<OrderBy>;
};

/** select columns of table "profile" */
export enum ProfileSelectColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FacebookUsername = 'facebookUsername',
  /** column name */
  Id = 'id',
  /** column name */
  InstagramUsername = 'instagramUsername',
  /** column name */
  Kind = 'kind',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  MetaData = 'metaData',
  /** column name */
  ParentNodeId = 'parentNodeId',
  /** column name */
  PhotoId = 'photoId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  TiktokUsername = 'tiktokUsername',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username',
  /** column name */
  XUsername = 'xUsername'
}

/** Streaming cursor of the table "profile" */
export type ProfileStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProfileStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProfileStreamCursorValueInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  facebookUsername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['uuid']['input']>;
  metaData?: InputMaybe<Scalars['jsonb']['input']>;
  parentNodeId?: InputMaybe<Scalars['uuid']['input']>;
  photoId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['date']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  tiktokUsername?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
  xUsername?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "question_kind" */
export type QuestionKind = {
  __typename?: 'QuestionKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "question_kind". All fields are combined with a logical 'AND'. */
export type QuestionKindBoolExp = {
  _and?: InputMaybe<Array<QuestionKindBoolExp>>;
  _not?: InputMaybe<QuestionKindBoolExp>;
  _or?: InputMaybe<Array<QuestionKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "question_kind". */
export type QuestionKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "question_kind" */
export enum QuestionKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "question_kind" */
export type QuestionKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: QuestionKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuestionKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "shop_product" */
export type ShopProduct = {
  __typename?: 'ShopProduct';
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  kind: ShopProductKindEnum;
  metadata: Scalars['jsonb']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  tenantId: Scalars['String']['output'];
  trialPeriodDays?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "shop_product" */
export type ShopProductMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "shop_product". All fields are combined with a logical 'AND'. */
export type ShopProductBoolExp = {
  _and?: InputMaybe<Array<ShopProductBoolExp>>;
  _not?: InputMaybe<ShopProductBoolExp>;
  _or?: InputMaybe<Array<ShopProductBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  externalId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  kind?: InputMaybe<ShopProductKindEnumComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  price?: InputMaybe<IntComparisonExp>;
  sku?: InputMaybe<StringComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  trialPeriodDays?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** columns and relationships of "shop_product_kind" */
export type ShopProductKind = {
  __typename?: 'ShopProductKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "shop_product_kind". All fields are combined with a logical 'AND'. */
export type ShopProductKindBoolExp = {
  _and?: InputMaybe<Array<ShopProductKindBoolExp>>;
  _not?: InputMaybe<ShopProductKindBoolExp>;
  _or?: InputMaybe<Array<ShopProductKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

export enum ShopProductKindEnum {
  Digital = 'DIGITAL',
  EventTicket = 'EVENT_TICKET',
  Physical = 'PHYSICAL',
  Subscription = 'SUBSCRIPTION'
}

/** Boolean expression to compare columns of type "ShopProductKindEnum". All fields are combined with logical 'AND'. */
export type ShopProductKindEnumComparisonExp = {
  _eq?: InputMaybe<ShopProductKindEnum>;
  _in?: InputMaybe<Array<ShopProductKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<ShopProductKindEnum>;
  _nin?: InputMaybe<Array<ShopProductKindEnum>>;
};

/** Ordering options when selecting data from "shop_product_kind". */
export type ShopProductKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "shop_product_kind" */
export enum ShopProductKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "shop_product_kind" */
export type ShopProductKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ShopProductKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ShopProductKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options when selecting data from "shop_product". */
export type ShopProductOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  externalId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  sku?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  trialPeriodDays?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "shop_product" */
export enum ShopProductSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sku = 'sku',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  TrialPeriodDays = 'trialPeriodDays',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "shop_product" */
export type ShopProductStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ShopProductStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ShopProductStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kind?: InputMaybe<ShopProductKindEnum>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  trialPeriodDays?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringArrayComparisonExp = {
  /** is the array contained in the given array value */
  _containedIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type SuccessOutput = {
  __typename?: 'SuccessOutput';
  success: Scalars['Boolean']['output'];
};

/** columns and relationships of "tenant" */
export type Tenant = {
  __typename?: 'Tenant';
  domain: Scalars['citext']['output'];
  /** url friendly version of name */
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileId?: Maybe<Scalars['uuid']['output']>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type TenantBoolExp = {
  _and?: InputMaybe<Array<TenantBoolExp>>;
  _not?: InputMaybe<TenantBoolExp>;
  _or?: InputMaybe<Array<TenantBoolExp>>;
  domain?: InputMaybe<CitextComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
};

/** Ordering options when selecting data from "tenant". */
export type TenantOrderBy = {
  domain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileId?: InputMaybe<OrderBy>;
};

/** select columns of table "tenant" */
export enum TenantSelectColumn {
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId'
}

/** Streaming cursor of the table "tenant" */
export type TenantStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TenantStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TenantStreamCursorValueInput = {
  domain?: InputMaybe<Scalars['citext']['input']>;
  /** url friendly version of name */
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "value_kind" */
export type ValueKind = {
  __typename?: 'ValueKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "value_kind". All fields are combined with a logical 'AND'. */
export type ValueKindBoolExp = {
  _and?: InputMaybe<Array<ValueKindBoolExp>>;
  _not?: InputMaybe<ValueKindBoolExp>;
  _or?: InputMaybe<Array<ValueKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "value_kind". */
export type ValueKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "value_kind" */
export enum ValueKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "value_kind" */
export type ValueKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ValueKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ValueKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "visibility_kind" */
export type VisibilityKind = {
  __typename?: 'VisibilityKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "visibility_kind". All fields are combined with a logical 'AND'. */
export type VisibilityKindBoolExp = {
  _and?: InputMaybe<Array<VisibilityKindBoolExp>>;
  _not?: InputMaybe<VisibilityKindBoolExp>;
  _or?: InputMaybe<Array<VisibilityKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

export enum VisibilityKindEnum {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/** Boolean expression to compare columns of type "VisibilityKindEnum". All fields are combined with logical 'AND'. */
export type VisibilityKindEnumComparisonExp = {
  _eq?: InputMaybe<VisibilityKindEnum>;
  _in?: InputMaybe<Array<VisibilityKindEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<VisibilityKindEnum>;
  _nin?: InputMaybe<Array<VisibilityKindEnum>>;
};

/** Ordering options when selecting data from "visibility_kind". */
export type VisibilityKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "visibility_kind" */
export enum VisibilityKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "visibility_kind" */
export type VisibilityKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: VisibilityKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VisibilityKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GameRafflePrizeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GameRafflePrizeBoolExp>;
  predicate: IntComparisonExp;
};

export type GameRaffleTicketOptionAggregateBoolExpBool_And = {
  arguments: GameRaffleTicketOptionSelectColumnGameRaffleTicketOptionAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GameRaffleTicketOptionBoolExp>;
  predicate: BooleanComparisonExp;
};

export type GameRaffleTicketOptionAggregateBoolExpBool_Or = {
  arguments: GameRaffleTicketOptionSelectColumnGameRaffleTicketOptionAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GameRaffleTicketOptionBoolExp>;
  predicate: BooleanComparisonExp;
};

export type GameRaffleTicketOptionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GameRaffleTicketOptionBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  authAnonymousSignIn?: Maybe<AuthOutput>;
  authEmailSendVerification?: Maybe<AuthOutput>;
  authEmailVerify?: Maybe<AuthOutput>;
  authMagicLinkSendEmail?: Maybe<AuthOutput>;
  authMagicLinkSignIn?: Maybe<AuthOutput>;
  authMagicLinkSignUpAndSend?: Maybe<AuthOutput>;
  authPasswordReset?: Maybe<AuthOutput>;
  authPasswordSendResetEmail?: Maybe<AuthOutput>;
  authPasswordSignIn?: Maybe<AuthOutput>;
  authPasswordSignUpAndSendVerification?: Maybe<AuthOutput>;
  authSmsSendCode?: Maybe<AuthOutput>;
  authSmsSignIn?: Maybe<AuthOutput>;
  authSmsSignUpAndSend?: Maybe<AuthOutput>;
  authSmsVerify?: Maybe<AuthOutput>;
  submitContactForm?: Maybe<SuccessOutput>;
  submitFeedback?: Maybe<FeedbackOutput>;
};


/** mutation root */
export type Mutation_RootAuthAnonymousSignInArgs = {
  args: AuthAnonymousInput;
};


/** mutation root */
export type Mutation_RootAuthEmailSendVerificationArgs = {
  args: AuthEmailInput;
};


/** mutation root */
export type Mutation_RootAuthEmailVerifyArgs = {
  args: AuthEmailTicketInput;
};


/** mutation root */
export type Mutation_RootAuthMagicLinkSendEmailArgs = {
  args: AuthEmailInput;
};


/** mutation root */
export type Mutation_RootAuthMagicLinkSignInArgs = {
  args: AuthEmailTicketInput;
};


/** mutation root */
export type Mutation_RootAuthMagicLinkSignUpAndSendArgs = {
  args: AuthEmailSignupInput;
};


/** mutation root */
export type Mutation_RootAuthPasswordResetArgs = {
  args: AuthResetPasswordInput;
};


/** mutation root */
export type Mutation_RootAuthPasswordSendResetEmailArgs = {
  args: AuthEmailInput;
};


/** mutation root */
export type Mutation_RootAuthPasswordSignInArgs = {
  args: AuthEmailPasswordInput;
};


/** mutation root */
export type Mutation_RootAuthPasswordSignUpAndSendVerificationArgs = {
  args: AuthEmailPasswordSignUpInput;
};


/** mutation root */
export type Mutation_RootAuthSmsSendCodeArgs = {
  args: AuthSmsInput;
};


/** mutation root */
export type Mutation_RootAuthSmsSignInArgs = {
  args: AuthSmsCodeInput;
};


/** mutation root */
export type Mutation_RootAuthSmsSignUpAndSendArgs = {
  args: AuthSmsSignUpInput;
};


/** mutation root */
export type Mutation_RootAuthSmsVerifyArgs = {
  args: AuthSmsCodeInput;
};


/** mutation root */
export type Mutation_RootSubmitContactFormArgs = {
  args: ContactFormInput;
};


/** mutation root */
export type Mutation_RootSubmitFeedbackArgs = {
  args: FeedbackInput;
};

export type ProfileFollowerAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProfileFollowerBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth_role_kind" */
  authRoleKind: Array<AuthRoleKind>;
  /** fetch data from the table: "auth_role_kind" using primary key columns */
  authRoleKindByPk?: Maybe<AuthRoleKind>;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch data from the table: "document_block" */
  documentBlock: Array<DocumentBlock>;
  /** fetch data from the table: "document_block" using primary key columns */
  documentBlockByPk?: Maybe<DocumentBlock>;
  /** fetch data from the table: "document_block_kind" */
  documentBlockKind: Array<DocumentBlockKind>;
  /** fetch data from the table: "document_block_kind" using primary key columns */
  documentBlockKindByPk?: Maybe<DocumentBlockKind>;
  /** fetch data from the table: "document" using primary key columns */
  documentByPk?: Maybe<Document>;
  /** fetch data from the table: "document_kind" */
  documentKind: Array<DocumentKind>;
  /** fetch data from the table: "document_kind" using primary key columns */
  documentKindByPk?: Maybe<DocumentKind>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch data from the table: "event_availability_kind" */
  eventAvailabilityKind: Array<EventAvailabilityKind>;
  /** fetch data from the table: "event_availability_kind" using primary key columns */
  eventAvailabilityKindByPk?: Maybe<EventAvailabilityKind>;
  /** fetch data from the table: "event" using primary key columns */
  eventByPk?: Maybe<Event>;
  /** fetch data from the table: "event_live" */
  eventLive: Array<EventLive>;
  /** fetch data from the table: "event_live" using primary key columns */
  eventLiveByPk?: Maybe<EventLive>;
  /** fetch data from the table: "event_recurrence" */
  eventRecurrence: Array<EventRecurrence>;
  /** fetch data from the table: "event_recurrence" using primary key columns */
  eventRecurrenceByPk?: Maybe<EventRecurrence>;
  /** fetch data from the table: "event_ticket_option" */
  eventTicketOption: Array<EventTicketOption>;
  /** fetch data from the table: "event_ticket_option" using primary key columns */
  eventTicketOptionByPk?: Maybe<EventTicketOption>;
  /** fetch data from the table: "game_raffle" */
  gameRaffle: Array<GameRaffle>;
  /** fetch data from the table: "game_raffle" using primary key columns */
  gameRaffleByPk?: Maybe<GameRaffle>;
  /** fetch data from the table: "game_raffle_prize" */
  gameRafflePrize: Array<GameRafflePrize>;
  /** fetch aggregated fields from the table: "game_raffle_prize" */
  gameRafflePrizeAggregate: GameRafflePrizeAggregate;
  /** fetch data from the table: "game_raffle_prize" using primary key columns */
  gameRafflePrizeByPk?: Maybe<GameRafflePrize>;
  /** fetch data from the table: "game_raffle_ticket_option" */
  gameRaffleTicketOption: Array<GameRaffleTicketOption>;
  /** fetch aggregated fields from the table: "game_raffle_ticket_option" */
  gameRaffleTicketOptionAggregate: GameRaffleTicketOptionAggregate;
  /** fetch data from the table: "game_raffle_ticket_option" using primary key columns */
  gameRaffleTicketOptionByPk?: Maybe<GameRaffleTicketOption>;
  /** fetch data from the table: "geo_location" */
  geoLocation: Array<GeoLocation>;
  /** fetch data from the table: "geo_location" using primary key columns */
  geoLocationByPk?: Maybe<GeoLocation>;
  /** fetch data from the table: "media_item" */
  mediaItem: Array<MediaItem>;
  /** fetch data from the table: "media_item" using primary key columns */
  mediaItemByPk?: Maybe<MediaItem>;
  /** fetch data from the table: "media_item_tag" */
  mediaItemTag: Array<MediaItemTag>;
  /** fetch data from the table: "media_item_tag" using primary key columns */
  mediaItemTagByPk?: Maybe<MediaItemTag>;
  /** fetch data from the table: "media_kind" */
  mediaKind: Array<MediaKind>;
  /** fetch data from the table: "media_kind" using primary key columns */
  mediaKindByPk?: Maybe<MediaKind>;
  /** fetch data from the table: "post_reaction_kind" */
  postReactionKind: Array<PostReactionKind>;
  /** fetch data from the table: "post_reaction_kind" using primary key columns */
  postReactionKindByPk?: Maybe<PostReactionKind>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile_attribute" */
  profileAttribute: Array<ProfileAttribute>;
  /** fetch data from the table: "profile" using primary key columns */
  profileByPk?: Maybe<Profile>;
  profileCheckUsername?: Maybe<ProfileCheckUsernameOutput>;
  /** fetch data from the table: "profile_follower" */
  profileFollower: Array<ProfileFollower>;
  /** fetch aggregated fields from the table: "profile_follower" */
  profileFollowerAggregate: ProfileFollowerAggregate;
  /** fetch data from the table: "profile_follower" using primary key columns */
  profileFollowerByPk?: Maybe<ProfileFollower>;
  /** fetch data from the table: "question_kind" */
  questionKind: Array<QuestionKind>;
  /** fetch data from the table: "question_kind" using primary key columns */
  questionKindByPk?: Maybe<QuestionKind>;
  /** fetch data from the table: "shop_product" */
  shopProduct: Array<ShopProduct>;
  /** fetch data from the table: "shop_product" using primary key columns */
  shopProductByPk?: Maybe<ShopProduct>;
  /** fetch data from the table: "shop_product_kind" */
  shopProductKind: Array<ShopProductKind>;
  /** fetch data from the table: "shop_product_kind" using primary key columns */
  shopProductKindByPk?: Maybe<ShopProductKind>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenantByPk?: Maybe<Tenant>;
  /** fetch data from the table: "value_kind" */
  valueKind: Array<ValueKind>;
  /** fetch data from the table: "value_kind" using primary key columns */
  valueKindByPk?: Maybe<ValueKind>;
  /** fetch data from the table: "visibility_kind" */
  visibilityKind: Array<VisibilityKind>;
  /** fetch data from the table: "visibility_kind" using primary key columns */
  visibilityKindByPk?: Maybe<VisibilityKind>;
};


export type Query_RootAuthRoleKindArgs = {
  distinctOn?: InputMaybe<Array<AuthRoleKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRoleKindOrderBy>>;
  where?: InputMaybe<AuthRoleKindBoolExp>;
};


export type Query_RootAuthRoleKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDocumentArgs = {
  distinctOn?: InputMaybe<Array<DocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
  where?: InputMaybe<DocumentBoolExp>;
};


export type Query_RootDocumentBlockArgs = {
  distinctOn?: InputMaybe<Array<DocumentBlockSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentBlockOrderBy>>;
  where?: InputMaybe<DocumentBlockBoolExp>;
};


export type Query_RootDocumentBlockByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDocumentBlockKindArgs = {
  distinctOn?: InputMaybe<Array<DocumentBlockKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentBlockKindOrderBy>>;
  where?: InputMaybe<DocumentBlockKindBoolExp>;
};


export type Query_RootDocumentBlockKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDocumentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDocumentKindArgs = {
  distinctOn?: InputMaybe<Array<DocumentKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentKindOrderBy>>;
  where?: InputMaybe<DocumentKindBoolExp>;
};


export type Query_RootDocumentKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Query_RootEventAvailabilityKindArgs = {
  distinctOn?: InputMaybe<Array<EventAvailabilityKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventAvailabilityKindOrderBy>>;
  where?: InputMaybe<EventAvailabilityKindBoolExp>;
};


export type Query_RootEventAvailabilityKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootEventByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEventLiveArgs = {
  distinctOn?: InputMaybe<Array<EventLiveSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventLiveOrderBy>>;
  where?: InputMaybe<EventLiveBoolExp>;
};


export type Query_RootEventLiveByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootEventRecurrenceArgs = {
  distinctOn?: InputMaybe<Array<EventRecurrenceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventRecurrenceOrderBy>>;
  where?: InputMaybe<EventRecurrenceBoolExp>;
};


export type Query_RootEventRecurrenceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEventTicketOptionArgs = {
  distinctOn?: InputMaybe<Array<EventTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventTicketOptionOrderBy>>;
  where?: InputMaybe<EventTicketOptionBoolExp>;
};


export type Query_RootEventTicketOptionByPkArgs = {
  eventId: Scalars['uuid']['input'];
  productId: Scalars['uuid']['input'];
  tenantId: Scalars['String']['input'];
};


export type Query_RootGameRaffleArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleOrderBy>>;
  where?: InputMaybe<GameRaffleBoolExp>;
};


export type Query_RootGameRaffleByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGameRafflePrizeArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


export type Query_RootGameRafflePrizeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


export type Query_RootGameRafflePrizeByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGameRaffleTicketOptionArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


export type Query_RootGameRaffleTicketOptionAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


export type Query_RootGameRaffleTicketOptionByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGeoLocationArgs = {
  distinctOn?: InputMaybe<Array<GeoLocationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeoLocationOrderBy>>;
  where?: InputMaybe<GeoLocationBoolExp>;
};


export type Query_RootGeoLocationByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMediaItemArgs = {
  distinctOn?: InputMaybe<Array<MediaItemSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaItemOrderBy>>;
  where?: InputMaybe<MediaItemBoolExp>;
};


export type Query_RootMediaItemByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootMediaItemTagArgs = {
  distinctOn?: InputMaybe<Array<MediaItemTagSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaItemTagOrderBy>>;
  where?: InputMaybe<MediaItemTagBoolExp>;
};


export type Query_RootMediaItemTagByPkArgs = {
  mediaItemId: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type Query_RootMediaKindArgs = {
  distinctOn?: InputMaybe<Array<MediaKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaKindOrderBy>>;
  where?: InputMaybe<MediaKindBoolExp>;
};


export type Query_RootMediaKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPostReactionKindArgs = {
  distinctOn?: InputMaybe<Array<PostReactionKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionKindOrderBy>>;
  where?: InputMaybe<PostReactionKindBoolExp>;
};


export type Query_RootPostReactionKindByPkArgs = {
  id: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};


export type Query_RootProfileArgs = {
  distinctOn?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type Query_RootProfileAttributeArgs = {
  distinctOn?: InputMaybe<Array<ProfileAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileAttributeOrderBy>>;
  where?: InputMaybe<ProfileAttributeBoolExp>;
};


export type Query_RootProfileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProfileCheckUsernameArgs = {
  args: ProfileCheckUsernameInput;
};


export type Query_RootProfileFollowerArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


export type Query_RootProfileFollowerAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


export type Query_RootProfileFollowerByPkArgs = {
  followedProfileId: Scalars['uuid']['input'];
  followerId: Scalars['uuid']['input'];
};


export type Query_RootQuestionKindArgs = {
  distinctOn?: InputMaybe<Array<QuestionKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QuestionKindOrderBy>>;
  where?: InputMaybe<QuestionKindBoolExp>;
};


export type Query_RootQuestionKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootShopProductArgs = {
  distinctOn?: InputMaybe<Array<ShopProductSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopProductOrderBy>>;
  where?: InputMaybe<ShopProductBoolExp>;
};


export type Query_RootShopProductByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootShopProductKindArgs = {
  distinctOn?: InputMaybe<Array<ShopProductKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopProductKindOrderBy>>;
  where?: InputMaybe<ShopProductKindBoolExp>;
};


export type Query_RootShopProductKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTenantArgs = {
  distinctOn?: InputMaybe<Array<TenantSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TenantOrderBy>>;
  where?: InputMaybe<TenantBoolExp>;
};


export type Query_RootTenantByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootValueKindArgs = {
  distinctOn?: InputMaybe<Array<ValueKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValueKindOrderBy>>;
  where?: InputMaybe<ValueKindBoolExp>;
};


export type Query_RootValueKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootVisibilityKindArgs = {
  distinctOn?: InputMaybe<Array<VisibilityKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VisibilityKindOrderBy>>;
  where?: InputMaybe<VisibilityKindBoolExp>;
};


export type Query_RootVisibilityKindByPkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth_role_kind" */
  authRoleKind: Array<AuthRoleKind>;
  /** fetch data from the table: "auth_role_kind" using primary key columns */
  authRoleKindByPk?: Maybe<AuthRoleKind>;
  /** fetch data from the table in a streaming manner: "auth_role_kind" */
  authRoleKindStream: Array<AuthRoleKind>;
  /** fetch data from the table: "document" */
  document: Array<Document>;
  /** fetch data from the table: "document_block" */
  documentBlock: Array<DocumentBlock>;
  /** fetch data from the table: "document_block" using primary key columns */
  documentBlockByPk?: Maybe<DocumentBlock>;
  /** fetch data from the table: "document_block_kind" */
  documentBlockKind: Array<DocumentBlockKind>;
  /** fetch data from the table: "document_block_kind" using primary key columns */
  documentBlockKindByPk?: Maybe<DocumentBlockKind>;
  /** fetch data from the table in a streaming manner: "document_block_kind" */
  documentBlockKindStream: Array<DocumentBlockKind>;
  /** fetch data from the table in a streaming manner: "document_block" */
  documentBlockStream: Array<DocumentBlock>;
  /** fetch data from the table: "document" using primary key columns */
  documentByPk?: Maybe<Document>;
  /** fetch data from the table: "document_kind" */
  documentKind: Array<DocumentKind>;
  /** fetch data from the table: "document_kind" using primary key columns */
  documentKindByPk?: Maybe<DocumentKind>;
  /** fetch data from the table in a streaming manner: "document_kind" */
  documentKindStream: Array<DocumentKind>;
  /** fetch data from the table in a streaming manner: "document" */
  documentStream: Array<Document>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch data from the table: "event_availability_kind" */
  eventAvailabilityKind: Array<EventAvailabilityKind>;
  /** fetch data from the table: "event_availability_kind" using primary key columns */
  eventAvailabilityKindByPk?: Maybe<EventAvailabilityKind>;
  /** fetch data from the table in a streaming manner: "event_availability_kind" */
  eventAvailabilityKindStream: Array<EventAvailabilityKind>;
  /** fetch data from the table: "event" using primary key columns */
  eventByPk?: Maybe<Event>;
  /** fetch data from the table: "event_live" */
  eventLive: Array<EventLive>;
  /** fetch data from the table: "event_live" using primary key columns */
  eventLiveByPk?: Maybe<EventLive>;
  /** fetch data from the table in a streaming manner: "event_live" */
  eventLiveStream: Array<EventLive>;
  /** fetch data from the table: "event_recurrence" */
  eventRecurrence: Array<EventRecurrence>;
  /** fetch data from the table: "event_recurrence" using primary key columns */
  eventRecurrenceByPk?: Maybe<EventRecurrence>;
  /** fetch data from the table in a streaming manner: "event_recurrence" */
  eventRecurrenceStream: Array<EventRecurrence>;
  /** fetch data from the table in a streaming manner: "event" */
  eventStream: Array<Event>;
  /** fetch data from the table: "event_ticket_option" */
  eventTicketOption: Array<EventTicketOption>;
  /** fetch data from the table: "event_ticket_option" using primary key columns */
  eventTicketOptionByPk?: Maybe<EventTicketOption>;
  /** fetch data from the table in a streaming manner: "event_ticket_option" */
  eventTicketOptionStream: Array<EventTicketOption>;
  /** fetch data from the table: "game_raffle" */
  gameRaffle: Array<GameRaffle>;
  /** fetch data from the table: "game_raffle" using primary key columns */
  gameRaffleByPk?: Maybe<GameRaffle>;
  /** fetch data from the table: "game_raffle_prize" */
  gameRafflePrize: Array<GameRafflePrize>;
  /** fetch aggregated fields from the table: "game_raffle_prize" */
  gameRafflePrizeAggregate: GameRafflePrizeAggregate;
  /** fetch data from the table: "game_raffle_prize" using primary key columns */
  gameRafflePrizeByPk?: Maybe<GameRafflePrize>;
  /** fetch data from the table in a streaming manner: "game_raffle_prize" */
  gameRafflePrizeStream: Array<GameRafflePrize>;
  /** fetch data from the table in a streaming manner: "game_raffle" */
  gameRaffleStream: Array<GameRaffle>;
  /** fetch data from the table: "game_raffle_ticket_option" */
  gameRaffleTicketOption: Array<GameRaffleTicketOption>;
  /** fetch aggregated fields from the table: "game_raffle_ticket_option" */
  gameRaffleTicketOptionAggregate: GameRaffleTicketOptionAggregate;
  /** fetch data from the table: "game_raffle_ticket_option" using primary key columns */
  gameRaffleTicketOptionByPk?: Maybe<GameRaffleTicketOption>;
  /** fetch data from the table in a streaming manner: "game_raffle_ticket_option" */
  gameRaffleTicketOptionStream: Array<GameRaffleTicketOption>;
  /** fetch data from the table: "geo_location" */
  geoLocation: Array<GeoLocation>;
  /** fetch data from the table: "geo_location" using primary key columns */
  geoLocationByPk?: Maybe<GeoLocation>;
  /** fetch data from the table in a streaming manner: "geo_location" */
  geoLocationStream: Array<GeoLocation>;
  /** fetch data from the table: "media_item" */
  mediaItem: Array<MediaItem>;
  /** fetch data from the table: "media_item" using primary key columns */
  mediaItemByPk?: Maybe<MediaItem>;
  /** fetch data from the table in a streaming manner: "media_item" */
  mediaItemStream: Array<MediaItem>;
  /** fetch data from the table: "media_item_tag" */
  mediaItemTag: Array<MediaItemTag>;
  /** fetch data from the table: "media_item_tag" using primary key columns */
  mediaItemTagByPk?: Maybe<MediaItemTag>;
  /** fetch data from the table in a streaming manner: "media_item_tag" */
  mediaItemTagStream: Array<MediaItemTag>;
  /** fetch data from the table: "media_kind" */
  mediaKind: Array<MediaKind>;
  /** fetch data from the table: "media_kind" using primary key columns */
  mediaKindByPk?: Maybe<MediaKind>;
  /** fetch data from the table in a streaming manner: "media_kind" */
  mediaKindStream: Array<MediaKind>;
  /** fetch data from the table: "post_reaction_kind" */
  postReactionKind: Array<PostReactionKind>;
  /** fetch data from the table: "post_reaction_kind" using primary key columns */
  postReactionKindByPk?: Maybe<PostReactionKind>;
  /** fetch data from the table in a streaming manner: "post_reaction_kind" */
  postReactionKindStream: Array<PostReactionKind>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile_attribute" */
  profileAttribute: Array<ProfileAttribute>;
  /** fetch data from the table in a streaming manner: "profile_attribute" */
  profileAttributeStream: Array<ProfileAttribute>;
  /** fetch data from the table: "profile" using primary key columns */
  profileByPk?: Maybe<Profile>;
  /** fetch data from the table: "profile_follower" */
  profileFollower: Array<ProfileFollower>;
  /** fetch aggregated fields from the table: "profile_follower" */
  profileFollowerAggregate: ProfileFollowerAggregate;
  /** fetch data from the table: "profile_follower" using primary key columns */
  profileFollowerByPk?: Maybe<ProfileFollower>;
  /** fetch data from the table in a streaming manner: "profile_follower" */
  profileFollowerStream: Array<ProfileFollower>;
  /** fetch data from the table in a streaming manner: "profile" */
  profileStream: Array<Profile>;
  /** fetch data from the table: "question_kind" */
  questionKind: Array<QuestionKind>;
  /** fetch data from the table: "question_kind" using primary key columns */
  questionKindByPk?: Maybe<QuestionKind>;
  /** fetch data from the table in a streaming manner: "question_kind" */
  questionKindStream: Array<QuestionKind>;
  /** fetch data from the table: "shop_product" */
  shopProduct: Array<ShopProduct>;
  /** fetch data from the table: "shop_product" using primary key columns */
  shopProductByPk?: Maybe<ShopProduct>;
  /** fetch data from the table: "shop_product_kind" */
  shopProductKind: Array<ShopProductKind>;
  /** fetch data from the table: "shop_product_kind" using primary key columns */
  shopProductKindByPk?: Maybe<ShopProductKind>;
  /** fetch data from the table in a streaming manner: "shop_product_kind" */
  shopProductKindStream: Array<ShopProductKind>;
  /** fetch data from the table in a streaming manner: "shop_product" */
  shopProductStream: Array<ShopProduct>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenantByPk?: Maybe<Tenant>;
  /** fetch data from the table in a streaming manner: "tenant" */
  tenantStream: Array<Tenant>;
  /** fetch data from the table: "value_kind" */
  valueKind: Array<ValueKind>;
  /** fetch data from the table: "value_kind" using primary key columns */
  valueKindByPk?: Maybe<ValueKind>;
  /** fetch data from the table in a streaming manner: "value_kind" */
  valueKindStream: Array<ValueKind>;
  /** fetch data from the table: "visibility_kind" */
  visibilityKind: Array<VisibilityKind>;
  /** fetch data from the table: "visibility_kind" using primary key columns */
  visibilityKindByPk?: Maybe<VisibilityKind>;
  /** fetch data from the table in a streaming manner: "visibility_kind" */
  visibilityKindStream: Array<VisibilityKind>;
};


export type Subscription_RootAuthRoleKindArgs = {
  distinctOn?: InputMaybe<Array<AuthRoleKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRoleKindOrderBy>>;
  where?: InputMaybe<AuthRoleKindBoolExp>;
};


export type Subscription_RootAuthRoleKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthRoleKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoleKindStreamCursorInput>>;
  where?: InputMaybe<AuthRoleKindBoolExp>;
};


export type Subscription_RootDocumentArgs = {
  distinctOn?: InputMaybe<Array<DocumentSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
  where?: InputMaybe<DocumentBoolExp>;
};


export type Subscription_RootDocumentBlockArgs = {
  distinctOn?: InputMaybe<Array<DocumentBlockSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentBlockOrderBy>>;
  where?: InputMaybe<DocumentBlockBoolExp>;
};


export type Subscription_RootDocumentBlockByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDocumentBlockKindArgs = {
  distinctOn?: InputMaybe<Array<DocumentBlockKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentBlockKindOrderBy>>;
  where?: InputMaybe<DocumentBlockKindBoolExp>;
};


export type Subscription_RootDocumentBlockKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDocumentBlockKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DocumentBlockKindStreamCursorInput>>;
  where?: InputMaybe<DocumentBlockKindBoolExp>;
};


export type Subscription_RootDocumentBlockStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DocumentBlockStreamCursorInput>>;
  where?: InputMaybe<DocumentBlockBoolExp>;
};


export type Subscription_RootDocumentByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDocumentKindArgs = {
  distinctOn?: InputMaybe<Array<DocumentKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentKindOrderBy>>;
  where?: InputMaybe<DocumentKindBoolExp>;
};


export type Subscription_RootDocumentKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDocumentKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DocumentKindStreamCursorInput>>;
  where?: InputMaybe<DocumentKindBoolExp>;
};


export type Subscription_RootDocumentStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DocumentStreamCursorInput>>;
  where?: InputMaybe<DocumentBoolExp>;
};


export type Subscription_RootEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Subscription_RootEventAvailabilityKindArgs = {
  distinctOn?: InputMaybe<Array<EventAvailabilityKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventAvailabilityKindOrderBy>>;
  where?: InputMaybe<EventAvailabilityKindBoolExp>;
};


export type Subscription_RootEventAvailabilityKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootEventAvailabilityKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventAvailabilityKindStreamCursorInput>>;
  where?: InputMaybe<EventAvailabilityKindBoolExp>;
};


export type Subscription_RootEventByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEventLiveArgs = {
  distinctOn?: InputMaybe<Array<EventLiveSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventLiveOrderBy>>;
  where?: InputMaybe<EventLiveBoolExp>;
};


export type Subscription_RootEventLiveByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootEventLiveStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventLiveStreamCursorInput>>;
  where?: InputMaybe<EventLiveBoolExp>;
};


export type Subscription_RootEventRecurrenceArgs = {
  distinctOn?: InputMaybe<Array<EventRecurrenceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventRecurrenceOrderBy>>;
  where?: InputMaybe<EventRecurrenceBoolExp>;
};


export type Subscription_RootEventRecurrenceByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEventRecurrenceStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventRecurrenceStreamCursorInput>>;
  where?: InputMaybe<EventRecurrenceBoolExp>;
};


export type Subscription_RootEventStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventStreamCursorInput>>;
  where?: InputMaybe<EventBoolExp>;
};


export type Subscription_RootEventTicketOptionArgs = {
  distinctOn?: InputMaybe<Array<EventTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventTicketOptionOrderBy>>;
  where?: InputMaybe<EventTicketOptionBoolExp>;
};


export type Subscription_RootEventTicketOptionByPkArgs = {
  eventId: Scalars['uuid']['input'];
  productId: Scalars['uuid']['input'];
  tenantId: Scalars['String']['input'];
};


export type Subscription_RootEventTicketOptionStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventTicketOptionStreamCursorInput>>;
  where?: InputMaybe<EventTicketOptionBoolExp>;
};


export type Subscription_RootGameRaffleArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleOrderBy>>;
  where?: InputMaybe<GameRaffleBoolExp>;
};


export type Subscription_RootGameRaffleByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGameRafflePrizeArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


export type Subscription_RootGameRafflePrizeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRafflePrizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRafflePrizeOrderBy>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


export type Subscription_RootGameRafflePrizeByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGameRafflePrizeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GameRafflePrizeStreamCursorInput>>;
  where?: InputMaybe<GameRafflePrizeBoolExp>;
};


export type Subscription_RootGameRaffleStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GameRaffleStreamCursorInput>>;
  where?: InputMaybe<GameRaffleBoolExp>;
};


export type Subscription_RootGameRaffleTicketOptionArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


export type Subscription_RootGameRaffleTicketOptionAggregateArgs = {
  distinctOn?: InputMaybe<Array<GameRaffleTicketOptionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GameRaffleTicketOptionOrderBy>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


export type Subscription_RootGameRaffleTicketOptionByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGameRaffleTicketOptionStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GameRaffleTicketOptionStreamCursorInput>>;
  where?: InputMaybe<GameRaffleTicketOptionBoolExp>;
};


export type Subscription_RootGeoLocationArgs = {
  distinctOn?: InputMaybe<Array<GeoLocationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GeoLocationOrderBy>>;
  where?: InputMaybe<GeoLocationBoolExp>;
};


export type Subscription_RootGeoLocationByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGeoLocationStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<GeoLocationStreamCursorInput>>;
  where?: InputMaybe<GeoLocationBoolExp>;
};


export type Subscription_RootMediaItemArgs = {
  distinctOn?: InputMaybe<Array<MediaItemSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaItemOrderBy>>;
  where?: InputMaybe<MediaItemBoolExp>;
};


export type Subscription_RootMediaItemByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootMediaItemStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MediaItemStreamCursorInput>>;
  where?: InputMaybe<MediaItemBoolExp>;
};


export type Subscription_RootMediaItemTagArgs = {
  distinctOn?: InputMaybe<Array<MediaItemTagSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaItemTagOrderBy>>;
  where?: InputMaybe<MediaItemTagBoolExp>;
};


export type Subscription_RootMediaItemTagByPkArgs = {
  mediaItemId: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};


export type Subscription_RootMediaItemTagStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MediaItemTagStreamCursorInput>>;
  where?: InputMaybe<MediaItemTagBoolExp>;
};


export type Subscription_RootMediaKindArgs = {
  distinctOn?: InputMaybe<Array<MediaKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MediaKindOrderBy>>;
  where?: InputMaybe<MediaKindBoolExp>;
};


export type Subscription_RootMediaKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootMediaKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MediaKindStreamCursorInput>>;
  where?: InputMaybe<MediaKindBoolExp>;
};


export type Subscription_RootPostReactionKindArgs = {
  distinctOn?: InputMaybe<Array<PostReactionKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionKindOrderBy>>;
  where?: InputMaybe<PostReactionKindBoolExp>;
};


export type Subscription_RootPostReactionKindByPkArgs = {
  id: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};


export type Subscription_RootPostReactionKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PostReactionKindStreamCursorInput>>;
  where?: InputMaybe<PostReactionKindBoolExp>;
};


export type Subscription_RootProfileArgs = {
  distinctOn?: InputMaybe<Array<ProfileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type Subscription_RootProfileAttributeArgs = {
  distinctOn?: InputMaybe<Array<ProfileAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileAttributeOrderBy>>;
  where?: InputMaybe<ProfileAttributeBoolExp>;
};


export type Subscription_RootProfileAttributeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProfileAttributeStreamCursorInput>>;
  where?: InputMaybe<ProfileAttributeBoolExp>;
};


export type Subscription_RootProfileByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProfileFollowerArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


export type Subscription_RootProfileFollowerAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProfileFollowerSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileFollowerOrderBy>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


export type Subscription_RootProfileFollowerByPkArgs = {
  followedProfileId: Scalars['uuid']['input'];
  followerId: Scalars['uuid']['input'];
};


export type Subscription_RootProfileFollowerStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProfileFollowerStreamCursorInput>>;
  where?: InputMaybe<ProfileFollowerBoolExp>;
};


export type Subscription_RootProfileStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProfileStreamCursorInput>>;
  where?: InputMaybe<ProfileBoolExp>;
};


export type Subscription_RootQuestionKindArgs = {
  distinctOn?: InputMaybe<Array<QuestionKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QuestionKindOrderBy>>;
  where?: InputMaybe<QuestionKindBoolExp>;
};


export type Subscription_RootQuestionKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootQuestionKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<QuestionKindStreamCursorInput>>;
  where?: InputMaybe<QuestionKindBoolExp>;
};


export type Subscription_RootShopProductArgs = {
  distinctOn?: InputMaybe<Array<ShopProductSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopProductOrderBy>>;
  where?: InputMaybe<ShopProductBoolExp>;
};


export type Subscription_RootShopProductByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootShopProductKindArgs = {
  distinctOn?: InputMaybe<Array<ShopProductKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ShopProductKindOrderBy>>;
  where?: InputMaybe<ShopProductKindBoolExp>;
};


export type Subscription_RootShopProductKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootShopProductKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ShopProductKindStreamCursorInput>>;
  where?: InputMaybe<ShopProductKindBoolExp>;
};


export type Subscription_RootShopProductStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ShopProductStreamCursorInput>>;
  where?: InputMaybe<ShopProductBoolExp>;
};


export type Subscription_RootTenantArgs = {
  distinctOn?: InputMaybe<Array<TenantSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TenantOrderBy>>;
  where?: InputMaybe<TenantBoolExp>;
};


export type Subscription_RootTenantByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootTenantStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TenantStreamCursorInput>>;
  where?: InputMaybe<TenantBoolExp>;
};


export type Subscription_RootValueKindArgs = {
  distinctOn?: InputMaybe<Array<ValueKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValueKindOrderBy>>;
  where?: InputMaybe<ValueKindBoolExp>;
};


export type Subscription_RootValueKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootValueKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ValueKindStreamCursorInput>>;
  where?: InputMaybe<ValueKindBoolExp>;
};


export type Subscription_RootVisibilityKindArgs = {
  distinctOn?: InputMaybe<Array<VisibilityKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VisibilityKindOrderBy>>;
  where?: InputMaybe<VisibilityKindBoolExp>;
};


export type Subscription_RootVisibilityKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootVisibilityKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VisibilityKindStreamCursorInput>>;
  where?: InputMaybe<VisibilityKindBoolExp>;
};

export type PublicProfileFragment = { __typename?: 'Profile', createdAt: string, displayName?: string | null, id: string, kind: string, locationId?: string | null, tenantId: string, username: string };

export type PublicLocationFragment = { __typename?: 'GeoLocation', city?: string | null, country: string, countryCode: string, createdAt: string, formatted?: string | null, id: string, latitude: number, longitude: number, metadata?: Record<string, any> | null, name?: string | null, postalCode?: string | null, state?: string | null, stateCode?: string | null, street1?: string | null, street2?: string | null, tenantId: string, timezone?: string | null, updatedAt: string };

export type PublicEventFragment = { __typename?: 'Event', createdAt: string, endDate: string, endTimestamp?: string | null, id: string, kind: string, label?: string | null, locationId?: string | null, metadata: Record<string, any>, name: string, profileId: string, startDate: string, startTimestamp?: string | null, tenantId: string, updatedAt: string };

export type EventsQueryVariables = Exact<{
  distinctOn?: InputMaybe<Array<EventSelectColumn> | EventSelectColumn>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy> | EventOrderBy>;
  where?: InputMaybe<EventBoolExp>;
}>;


export type EventsQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'Event', createdAt: string, endDate: string, endTimestamp?: string | null, id: string, kind: string, label?: string | null, locationId?: string | null, metadata: Record<string, any>, name: string, profileId: string, startDate: string, startTimestamp?: string | null, tenantId: string, updatedAt: string, location?: { __typename?: 'GeoLocation', city?: string | null, country: string, countryCode: string, createdAt: string, formatted?: string | null, id: string, latitude: number, longitude: number, metadata?: Record<string, any> | null, name?: string | null, postalCode?: string | null, state?: string | null, stateCode?: string | null, street1?: string | null, street2?: string | null, tenantId: string, timezone?: string | null, updatedAt: string } | null, profile: { __typename?: 'Profile', createdAt: string, displayName?: string | null, id: string, kind: string, locationId?: string | null, tenantId: string, username: string } }> };

export const PublicProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<PublicProfileFragment, unknown>;
export const PublicLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeoLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formatted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"street1"}},{"kind":"Field","name":{"kind":"Name","value":"street2"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PublicLocationFragment, unknown>;
export const PublicEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PublicEventFragment, unknown>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventSelectColumn"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventBoolExp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"events"},"name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinctOn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicEvent"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicLocation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicProfile"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeoLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formatted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"street1"}},{"kind":"Field","name":{"kind":"Name","value":"street2"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;