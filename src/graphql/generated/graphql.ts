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
  tenantId: Scalars['String']['input'];
};

export type AuthEmailInput = {
  email: Scalars['citext']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['String']['input'];
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthEmailPasswordInput = {
  email: Scalars['citext']['input'];
  password: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};

export type AuthEmailPasswordSignUpInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['citext']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['String']['input'];
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

export type AuthEmailSignupInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['citext']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['String']['input'];
  useVerificationCode?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
};

export type AuthEmailTicketInput = {
  email: Scalars['citext']['input'];
  tenantId: Scalars['String']['input'];
  ticket: Scalars['String']['input'];
};

export type AuthOutput = {
  __typename?: 'AuthOutput';
  profileId?: Maybe<Scalars['uuid']['output']>;
  sessionId?: Maybe<Scalars['String']['output']>;
  tenantId: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type AuthResetPasswordInput = {
  email: Scalars['citext']['input'];
  password: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
  ticket: Scalars['String']['input'];
};

export type AuthSmsCodeInput = {
  code: Scalars['String']['input'];
  mobile: Scalars['citext']['input'];
  tenantId: Scalars['String']['input'];
};

export type AuthSmsInput = {
  mobile: Scalars['citext']['input'];
  tenantId: Scalars['String']['input'];
};

export type AuthSmsSignUpInput = {
  displayNameOverride?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['citext']['input'];
  tenantId: Scalars['String']['input'];
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

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['timestamptz']['output'];
  endDate: Scalars['date']['output'];
  endTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  eventLive?: Maybe<EventLive>;
  id: Scalars['uuid']['output'];
  isPublic: Scalars['Boolean']['output'];
  kind: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  location?: Maybe<GeoLocation>;
  locationId?: Maybe<Scalars['uuid']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['citext']['output'];
  /** An object relationship */
  profile: Profile;
  profileId: Scalars['uuid']['output'];
  raffleId?: Maybe<Scalars['uuid']['output']>;
  startDate: Scalars['date']['output'];
  startTimestamp?: Maybe<Scalars['timestamptz']['output']>;
  templateId?: Maybe<Scalars['uuid']['output']>;
  tenantId: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "event" */
export type EventMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  endDate?: InputMaybe<DateComparisonExp>;
  endTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  eventLive?: InputMaybe<EventLiveBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isPublic?: InputMaybe<BooleanComparisonExp>;
  kind?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<GeoLocationBoolExp>;
  locationId?: InputMaybe<UuidComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  name?: InputMaybe<CitextComparisonExp>;
  profile?: InputMaybe<ProfileBoolExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  raffleId?: InputMaybe<UuidComparisonExp>;
  startDate?: InputMaybe<DateComparisonExp>;
  startTimestamp?: InputMaybe<TimestamptzComparisonExp>;
  templateId?: InputMaybe<UuidComparisonExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
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
  createdAt?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  endTimestamp?: InputMaybe<OrderBy>;
  eventLive?: InputMaybe<EventLiveOrderBy>;
  id?: InputMaybe<OrderBy>;
  isPublic?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  location?: InputMaybe<GeoLocationOrderBy>;
  locationId?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profile?: InputMaybe<ProfileOrderBy>;
  profileId?: InputMaybe<OrderBy>;
  raffleId?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  startTimestamp?: InputMaybe<OrderBy>;
  templateId?: InputMaybe<OrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "event" */
export enum EventSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  EndTimestamp = 'endTimestamp',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Kind = 'kind',
  /** column name */
  Label = 'label',
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
  StartDate = 'startDate',
  /** column name */
  StartTimestamp = 'startTimestamp',
  /** column name */
  TemplateId = 'templateId',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  UpdatedAt = 'updatedAt'
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  endDate?: InputMaybe<Scalars['date']['input']>;
  endTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['citext']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  raffleId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['date']['input']>;
  startTimestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  templateId?: InputMaybe<Scalars['uuid']['input']>;
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

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'Profile';
  /** An array relationship */
  attributes: Array<ProfileAttribute>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "display_name" */
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  kind: Scalars['String']['output'];
  /** An object relationship */
  location?: Maybe<GeoLocation>;
  locationId?: Maybe<Scalars['uuid']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
  username: Scalars['citext']['output'];
};


/** columns and relationships of "profile" */
export type ProfileAttributesArgs = {
  distinctOn?: InputMaybe<Array<ProfileAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileAttributeOrderBy>>;
  where?: InputMaybe<ProfileAttributeBoolExp>;
};

/** columns and relationships of "profile_attribute" */
export type ProfileAttribute = {
  __typename?: 'ProfileAttribute';
  kind: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
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
  kind?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "profile_attribute" */
export type ProfileAttributeMaxOrderBy = {
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "profile_attribute" */
export type ProfileAttributeMinOrderBy = {
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "profile_attribute". */
export type ProfileAttributeOrderBy = {
  kind?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** select columns of table "profile_attribute" */
export enum ProfileAttributeSelectColumn {
  /** column name */
  Kind = 'kind',
  /** column name */
  Order = 'order',
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
  kind?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
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
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  kind?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<GeoLocationBoolExp>;
  locationId?: InputMaybe<UuidComparisonExp>;
  photoUrl?: InputMaybe<StringComparisonExp>;
  tenant?: InputMaybe<TenantBoolExp>;
  tenantId?: InputMaybe<StringComparisonExp>;
  username?: InputMaybe<CitextComparisonExp>;
};

/** Ordering options when selecting data from "profile". */
export type ProfileOrderBy = {
  attributesAggregate?: InputMaybe<ProfileAttributeAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kind?: InputMaybe<OrderBy>;
  location?: InputMaybe<GeoLocationOrderBy>;
  locationId?: InputMaybe<OrderBy>;
  photoUrl?: InputMaybe<OrderBy>;
  tenant?: InputMaybe<TenantOrderBy>;
  tenantId?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** select columns of table "profile" */
export enum ProfileSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  LocationId = 'locationId',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  TenantId = 'tenantId',
  /** column name */
  Username = 'username'
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['uuid']['input']>;
  photoUrl?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['citext']['input']>;
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
  createdAt: Scalars['timestamptz']['output'];
  domain: Scalars['citext']['output'];
  /** url friendly version of name */
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileId?: Maybe<Scalars['uuid']['output']>;
  transactionalFromEmail: Scalars['citext']['output'];
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type TenantBoolExp = {
  _and?: InputMaybe<Array<TenantBoolExp>>;
  _not?: InputMaybe<TenantBoolExp>;
  _or?: InputMaybe<Array<TenantBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  domain?: InputMaybe<CitextComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  profileId?: InputMaybe<UuidComparisonExp>;
  transactionalFromEmail?: InputMaybe<CitextComparisonExp>;
};

/** Ordering options when selecting data from "tenant". */
export type TenantOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  domain?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileId?: InputMaybe<OrderBy>;
  transactionalFromEmail?: InputMaybe<OrderBy>;
};

/** select columns of table "tenant" */
export enum TenantSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  TransactionalFromEmail = 'transactionalFromEmail'
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  domain?: InputMaybe<Scalars['citext']['input']>;
  /** url friendly version of name */
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['uuid']['input']>;
  transactionalFromEmail?: InputMaybe<Scalars['citext']['input']>;
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

/** columns and relationships of "user_role_kind" */
export type UserRoleKind = {
  __typename?: 'UserRoleKind';
  id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "user_role_kind". All fields are combined with a logical 'AND'. */
export type UserRoleKindBoolExp = {
  _and?: InputMaybe<Array<UserRoleKindBoolExp>>;
  _not?: InputMaybe<UserRoleKindBoolExp>;
  _or?: InputMaybe<Array<UserRoleKindBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "user_role_kind". */
export type UserRoleKindOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "user_role_kind" */
export enum UserRoleKindSelectColumn {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "user_role_kind" */
export type UserRoleKindStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserRoleKindStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserRoleKindStreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
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

export type Query_Root = {
  __typename?: 'query_root';
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
  /** fetch data from the table: "geo_location" */
  geoLocation: Array<GeoLocation>;
  /** fetch data from the table: "geo_location" using primary key columns */
  geoLocationByPk?: Maybe<GeoLocation>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile_attribute" */
  profileAttribute: Array<ProfileAttribute>;
  /** fetch data from the table: "profile" using primary key columns */
  profileByPk?: Maybe<Profile>;
  /** fetch data from the table: "question_kind" */
  questionKind: Array<QuestionKind>;
  /** fetch data from the table: "question_kind" using primary key columns */
  questionKindByPk?: Maybe<QuestionKind>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenantByPk?: Maybe<Tenant>;
  /** fetch data from the table: "user_role_kind" */
  userRoleKind: Array<UserRoleKind>;
  /** fetch data from the table: "user_role_kind" using primary key columns */
  userRoleKindByPk?: Maybe<UserRoleKind>;
  /** fetch data from the table: "value_kind" */
  valueKind: Array<ValueKind>;
  /** fetch data from the table: "value_kind" using primary key columns */
  valueKindByPk?: Maybe<ValueKind>;
  /** fetch data from the table: "visibility_kind" */
  visibilityKind: Array<VisibilityKind>;
  /** fetch data from the table: "visibility_kind" using primary key columns */
  visibilityKindByPk?: Maybe<VisibilityKind>;
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


export type Query_RootUserRoleKindArgs = {
  distinctOn?: InputMaybe<Array<UserRoleKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserRoleKindOrderBy>>;
  where?: InputMaybe<UserRoleKindBoolExp>;
};


export type Query_RootUserRoleKindByPkArgs = {
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
  /** fetch data from the table in a streaming manner: "event" */
  eventStream: Array<Event>;
  /** fetch data from the table: "geo_location" */
  geoLocation: Array<GeoLocation>;
  /** fetch data from the table: "geo_location" using primary key columns */
  geoLocationByPk?: Maybe<GeoLocation>;
  /** fetch data from the table in a streaming manner: "geo_location" */
  geoLocationStream: Array<GeoLocation>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch data from the table: "profile_attribute" */
  profileAttribute: Array<ProfileAttribute>;
  /** fetch data from the table in a streaming manner: "profile_attribute" */
  profileAttributeStream: Array<ProfileAttribute>;
  /** fetch data from the table: "profile" using primary key columns */
  profileByPk?: Maybe<Profile>;
  /** fetch data from the table in a streaming manner: "profile" */
  profileStream: Array<Profile>;
  /** fetch data from the table: "question_kind" */
  questionKind: Array<QuestionKind>;
  /** fetch data from the table: "question_kind" using primary key columns */
  questionKindByPk?: Maybe<QuestionKind>;
  /** fetch data from the table in a streaming manner: "question_kind" */
  questionKindStream: Array<QuestionKind>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenantByPk?: Maybe<Tenant>;
  /** fetch data from the table in a streaming manner: "tenant" */
  tenantStream: Array<Tenant>;
  /** fetch data from the table: "user_role_kind" */
  userRoleKind: Array<UserRoleKind>;
  /** fetch data from the table: "user_role_kind" using primary key columns */
  userRoleKindByPk?: Maybe<UserRoleKind>;
  /** fetch data from the table in a streaming manner: "user_role_kind" */
  userRoleKindStream: Array<UserRoleKind>;
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


export type Subscription_RootEventStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventStreamCursorInput>>;
  where?: InputMaybe<EventBoolExp>;
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


export type Subscription_RootUserRoleKindArgs = {
  distinctOn?: InputMaybe<Array<UserRoleKindSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserRoleKindOrderBy>>;
  where?: InputMaybe<UserRoleKindBoolExp>;
};


export type Subscription_RootUserRoleKindByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUserRoleKindStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserRoleKindStreamCursorInput>>;
  where?: InputMaybe<UserRoleKindBoolExp>;
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

export type PublicProfileFragment = { __typename?: 'Profile', createdAt?: string | null, displayName?: string | null, id: string, kind: string, locationId?: string | null, photoUrl?: string | null, tenantId: string, username: string };

export type PublicLocationFragment = { __typename?: 'GeoLocation', city?: string | null, country: string, countryCode: string, createdAt: string, formatted?: string | null, id: string, latitude: number, longitude: number, metadata?: Record<string, any> | null, name?: string | null, postalCode?: string | null, state?: string | null, stateCode?: string | null, street1?: string | null, street2?: string | null, tenantId: string, timezone?: string | null, updatedAt: string };

export type PublicEventFragment = { __typename?: 'Event', createdAt: string, endDate: string, endTimestamp?: string | null, id: string, isPublic: boolean, kind: string, label?: string | null, locationId?: string | null, metadata?: Record<string, any> | null, name: string, profileId: string, raffleId?: string | null, startDate: string, startTimestamp?: string | null, templateId?: string | null, tenantId: string, updatedAt: string };

export type EventsQueryVariables = Exact<{
  distinctOn?: InputMaybe<Array<EventSelectColumn> | EventSelectColumn>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy> | EventOrderBy>;
  where?: InputMaybe<EventBoolExp>;
}>;


export type EventsQuery = { __typename?: 'query_root', events: Array<{ __typename?: 'Event', createdAt: string, endDate: string, endTimestamp?: string | null, id: string, isPublic: boolean, kind: string, label?: string | null, locationId?: string | null, metadata?: Record<string, any> | null, name: string, profileId: string, raffleId?: string | null, startDate: string, startTimestamp?: string | null, templateId?: string | null, tenantId: string, updatedAt: string, location?: { __typename?: 'GeoLocation', city?: string | null, country: string, countryCode: string, createdAt: string, formatted?: string | null, id: string, latitude: number, longitude: number, metadata?: Record<string, any> | null, name?: string | null, postalCode?: string | null, state?: string | null, stateCode?: string | null, street1?: string | null, street2?: string | null, tenantId: string, timezone?: string | null, updatedAt: string } | null, profile: { __typename?: 'Profile', createdAt?: string | null, displayName?: string | null, id: string, kind: string, locationId?: string | null, photoUrl?: string | null, tenantId: string, username: string } }> };

export const PublicProfileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<PublicProfileFragment, unknown>;
export const PublicLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeoLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formatted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"street1"}},{"kind":"Field","name":{"kind":"Name","value":"street2"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PublicLocationFragment, unknown>;
export const PublicEventFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"raffleId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PublicEventFragment, unknown>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventSelectColumn"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventOrderBy"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventBoolExp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"events"},"name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinctOn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"distinctOn"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicEvent"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicLocation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicProfile"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicEvent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"raffleId"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"startTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeoLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"formatted"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}},{"kind":"Field","name":{"kind":"Name","value":"street1"}},{"kind":"Field","name":{"kind":"Name","value":"street2"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"photoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"tenantId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;