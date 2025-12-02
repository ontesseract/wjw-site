import {
  EventBoolExp,
  EventsQuery,
  publicClient,
  // VisibilityKindEnum, // Commented out until visibility field is available in schema
} from "@/graphql";
import { graphql } from "@/graphql/generated";

export const publicProfileFragment = graphql(`
  fragment PublicProfile on Profile {
    createdAt
    displayName
    id
    kind
    locationId
    tenantId
    username
  }
`);

export const publicLocationFragment = graphql(`
  fragment PublicLocation on GeoLocation {
    city
    country
    countryCode
    createdAt
    formatted
    id
    latitude
    longitude
    metadata
    name
    postalCode
    state
    stateCode
    street1
    street2
    tenantId
    timezone
    updatedAt
  }
`);

export const publicEventFragment = graphql(`
  fragment PublicEvent on Event {
    createdAt
    endDate
    endTimestamp
    id
    kind
    label
    locationId
    metadata
    name
    profileId
    startDate
    startTimestamp
    tenantId
    updatedAt
    # visibility
  }
`);

export const eventsQuery = graphql(`
  query events(
    $distinctOn: [EventSelectColumn!]
    $limit: Int
    $offset: Int
    $orderBy: [EventOrderBy!]
    $where: EventBoolExp
  ) {
    events: event(
      distinctOn: $distinctOn
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    ) {
      ...PublicEvent
      location {
        ...PublicLocation
      }
      profile {
        ...PublicProfile
      }
    }
  }
`);

export async function getEvents({
  showName,
  year,
  city,
}: {
  showName?: string;
  year?: number;
  city?: string;
}): Promise<EventsQuery["events"]> {
  const where: EventBoolExp = {
    // visibility: { _eq: VisibilityKindEnum.Public }, // Commented out until visibility field is available in schema
  };

  if (showName) {
    where.name = { _ilike: `%${showName}%` };
  }

  if (year) {
    where.startTimestamp = {
      _gte: new Date(year ?? new Date().getFullYear(), 0, 1).toISOString(),
    };
    where.endTimestamp = {
      _lte: new Date(year ?? new Date().getFullYear(), 12, 31).toISOString(),
    };
  }

  if (city) {
    where.location = {
      city: { _ilike: `%${city}%` },
    };
  }

  try {
    const data = await publicClient({ cache: "force-cache" })
      .gql(eventsQuery)
      .send({ where });
    return data?.events ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function toTimeString(
  date: Date | string,
  timezone: string | undefined | null
): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (!timezone) {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    timeZone: timezone,
  });
}
