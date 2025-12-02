import { EventsQuery } from "@/graphql";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parseISO,
  startOfMonth,
} from "date-fns";
import { tz } from "@date-fns/tz";

export type Event = EventsQuery["events"][number];

export interface EventDay {
  dateKey: string;
  events: Event[];
  legendKey: string;
}

export function getDateKey(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function getTimeKey(date: Date): string {
  return format(date, "h:mm a");
}

export function getStart(event: Event): Date {
  if (event.startTimestamp && event.location?.timezone) {
    return parseISO(event.startTimestamp, { in: tz(event.location?.timezone) });
  }
  return parseISO(event.startDate);
}

export function getEventStartTime(event: Event): string {
  return getTimeKey(getStart(event));
}

export function getUniqueMonths(events: EventsQuery["events"]): Date[] {
  const uniqueMonths = new Set<string>();

  events.forEach((event) => {
    if (event.startTimestamp) {
      const date = getStart(event);
      const monthKey = format(date, "yyyy-MM"); // Format as "2024-03" for proper sorting
      uniqueMonths.add(monthKey);
    }
  });

  return Array.from(uniqueMonths)
    .sort()
    .map((monthKey) => parseISO(`${monthKey}-01`));
}

export function getUniqueLegendKeys(days: Record<string, EventDay>): string[] {
  const uniqueLegendKeys = new Set<string>();

  Object.values(days).forEach((day) => {
    uniqueLegendKeys.add(day.legendKey);
  });

  return Array.from(uniqueLegendKeys);
}

export function createCalendarDays(month: Date) {
  const start = startOfMonth(month);
  const end = endOfMonth(month);
  const days = eachDayOfInterval({ start, end });

  // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = getDay(start);

  // Create empty cells for days before the first day of the month
  const emptyCells = Array(firstDayOfWeek).fill(null);

  return [...emptyCells, ...days];
}

export function createEventDays(events: Event[]): Record<string, EventDay> {
  const days: Record<string, EventDay> = {};

  // Deduplicate events by date + time + name (not just ID, as API may return multiple events for same show)
  const uniqueEvents = Array.from(
    new Map(
      events.map((event) => {
        const date = getStart(event);
        const compositeKey = `${format(date, "yyyy-MM-dd HH:mm")}-${
          event.name
        }`;
        return [compositeKey, event];
      })
    ).values()
  );

  uniqueEvents.forEach((event) => {
    const date = getStart(event);
    const dayKey = format(date, "yyyy-MM-dd");
    if (!days[dayKey]) {
      days[dayKey] = {
        dateKey: dayKey,
        events: [event],
        legendKey: getTimeKey(date),
      };
      return;
    }
    const day = days[dayKey];
    day.events.push(event);

    // Get unique times for the legend
    const uniqueTimes = Array.from(
      new Set(day.events.map((e) => getTimeKey(getStart(e))))
    ).sort();

    if (uniqueTimes.length === 1) {
      day.legendKey = uniqueTimes[0];
    } else if (uniqueTimes.length === 2) {
      day.legendKey = uniqueTimes.join(" & ");
    } else {
      day.legendKey = uniqueTimes.join(", ");
    }
  });

  return days;
}
