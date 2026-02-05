import { EventsQuery } from "@/graphql";
import { TheaterInfo } from "@/lib/data";
import EventCalendarClient, { MonthHighlight } from "./event-calendar-client";
import { getEvents } from "./events-api";

export interface EventCalendarProps {
  showName?: string;
  year?: number;
  city?: string;
  monthHighlights?: MonthHighlight[];
  backgroundColorClasses?: string[];
  theater: TheaterInfo;
  legendSortOrder?: "latest-first" | "earliest-first";
}

export default async function EventCalendar({
  showName,
  year,
  city,
  backgroundColorClasses,
  theater,
  monthHighlights,
  legendSortOrder,
}: EventCalendarProps) {
  let events: EventsQuery["events"] = [];
  try {
    events = await getEvents({
      showName,
      year,
      city,
    });
  } catch (error) {
    console.error(error);
    return <div className="text-center p-4">Error loading events.</div>;
  }

  return (
    <EventCalendarClient
      events={events}
      theater={theater}
      backgroundColorClasses={backgroundColorClasses}
      monthHighlights={monthHighlights}
      legendSortOrder={legendSortOrder}
    />
  );
}
