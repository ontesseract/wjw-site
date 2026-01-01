"use client";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { EventsQuery } from "@/graphql";
import {
  createCalendarDays,
  createEventDays,
  getUniqueLegendKeys,
  getUniqueMonths,
  SpecialDateConfig,
} from "./event-utils";
import EventCalendarDay from "./event-calendar-day";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TheaterInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode, useEffect, useRef } from "react";

export interface MonthHighlight {
  monthNumber: number;
  label: string;
}

export interface EventCalendarClientProps {
  events: EventsQuery["events"];
  backgroundColorClasses?: string[];
  theater: TheaterInfo;
  monthHighlights?: MonthHighlight[];
  specialDates?: SpecialDateConfig[];
  legendMessage?: ReactNode;
  legendSortOrder?: "latest-first" | "earliest-first";
}

const defaultBackgroundColorClasses = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
  "bg-chart-6",
  "bg-chart-7",
  "bg-chart-8",
  "bg-chart-9",
  "bg-chart-10",
  "bg-chart-11",
  "bg-chart-12",
];

/**
 * Parses a time string in "h:mm a" format and returns minutes since midnight
 * Returns null if parsing fails
 */
function parseTimeToMinutes(timeStr: string): number | null {
  try {
    // Remove asterisk if present for parsing
    const cleanTime = timeStr.trim().replace(/\*$/, "");
    // Try uppercase AM/PM format first (required by dayjs customParseFormat)
    let time = dayjs(cleanTime, "h:mm A", true); // strict mode
    if (!time.isValid()) {
      // Fallback to lowercase
      time = dayjs(cleanTime, "h:mm a", true); // strict mode
    }
    if (!time.isValid()) {
      return null;
    }
    return time.hour() * 60 + time.minute();
  } catch {
    return null;
  }
}

/**
 * Extracts all time strings from a legend key
 * Handles formats like "7:00 PM", "7:00 PM & 9:00 PM", "7:00 PM, 9:00 PM, 11:00 PM"
 * Uses regex to extract time patterns in "h:mm a" format
 */
function extractTimes(legendKey: string): string[] {
  // Match time patterns like "7:00 PM" or "12:30 AM"
  const timePattern = /\d{1,2}:\d{2}\s*(AM|PM)/gi;
  const matches = legendKey.match(timePattern);
  return matches || [];
}

/**
 * Sorts legend keys:
 * 1. Special dates first (already handled separately)
 * 2. Single times, sorted by time
 * 3. Multiple times, sorted by latest/earliest time depending on sortOrder
 */
function sortLegendKeys(
  keys: string[],
  sortOrder: "latest-first" | "earliest-first" = "latest-first"
): string[] {
  // Create a copy to avoid mutating the original array
  const sorted = [...keys].sort((a, b) => {
    const timesA = extractTimes(a);
    const timesB = extractTimes(b);

    const isSingleA = timesA.length === 1;
    const isSingleB = timesB.length === 1;

    // Single times come before multiple times
    if (isSingleA && !isSingleB) return -1;
    if (!isSingleA && isSingleB) return 1;

    // Both single times - sort by time
    if (isSingleA && isSingleB) {
      const minutesA = parseTimeToMinutes(timesA[0]);
      const minutesB = parseTimeToMinutes(timesB[0]);
      if (minutesA === null && minutesB === null) return 0;
      if (minutesA === null) return 1;
      if (minutesB === null) return -1;
      // latest-first: larger minutes come first (11 PM before 7 PM)
      // earliest-first: smaller minutes come first (7 PM before 11 PM)
      return sortOrder === "latest-first"
        ? minutesB - minutesA
        : minutesA - minutesB;
    }

    // Both multiple times - sort by latest/earliest time
    const latestA = timesA
      .map((t) => parseTimeToMinutes(t))
      .filter((m): m is number => m !== null)
      .sort((x, y) => (sortOrder === "latest-first" ? y - x : x - y))[0];
    const latestB = timesB
      .map((t) => parseTimeToMinutes(t))
      .filter((m): m is number => m !== null)
      .sort((x, y) => (sortOrder === "latest-first" ? y - x : x - y))[0];

    if (latestA === undefined && latestB === undefined) return 0;
    if (latestA === undefined) return 1;
    if (latestB === undefined) return -1;
    // latest-first: larger minutes come first
    // earliest-first: smaller minutes come first
    return sortOrder === "latest-first" ? latestB - latestA : latestA - latestB;
  });
  return sorted;
}

export default function EventCalendarClient({
  events,
  backgroundColorClasses = defaultBackgroundColorClasses,
  theater,
  monthHighlights = [],
  specialDates = [],
  legendMessage,
  legendSortOrder = "latest-first",
}: EventCalendarClientProps) {
  const isMobile = useIsMobile();
  const currentMonthRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  // Create a lookup map for special date colors
  const specialDateColorMap = new Map(
    specialDates.map((sd) => [sd.legendKey, sd.colorClass])
  );

  const months = getUniqueMonths(events);
  const days = createEventDays(events, specialDates);

  // Get legend keys and sort so special dates appear first, then by time
  const allLegendKeys = getUniqueLegendKeys(days);
  const specialLegendKeys = specialDates.map((sd) => sd.legendKey);
  const specialKeys = allLegendKeys.filter((key) =>
    specialLegendKeys.includes(key)
  );
  const nonSpecialKeys = allLegendKeys.filter(
    (key) => !specialLegendKeys.includes(key)
  );
  const sortedNonSpecialKeys = sortLegendKeys(nonSpecialKeys, legendSortOrder);
  const legendKeys = [...specialKeys, ...sortedNonSpecialKeys];

  // Auto-snap to current month on mobile
  useEffect(() => {
    if (isMobile && currentMonthRef.current && events.length > 0) {
      // Add a small delay to ensure the sticky legend is rendered
      const timer = setTimeout(() => {
        if (currentMonthRef.current) {
          const headerHeight = 64; // Main header height
          const legendHeight = legendRef.current?.offsetHeight || 0;
          const totalOffset = headerHeight + legendHeight + 20; // Extra padding

          const elementTop = currentMonthRef.current.offsetTop;
          const scrollTop = elementTop - totalOffset;

          window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isMobile, events.length]);

  if (!events.length) {
    return <div className="text-center p-4">No upcoming events found.</div>;
  }

  const getDayForDate = (date: Date) => {
    const dayKey = dayjs(date).format("YYYY-MM-DD");
    return days[dayKey];
  };

  const getBackgroundColorClassNameForLegendKey = (legendKey?: string) => {
    if (!legendKey) {
      return "bg-transparent";
    }
    // Check if this legend key has a special color
    const specialColor = specialDateColorMap.get(legendKey);
    if (specialColor) {
      return specialColor;
    }
    // For non-special keys, use index from only the non-special keys to preserve original colors
    const nonSpecialKeys = legendKeys.filter(
      (key) => !specialDateColorMap.has(key)
    );
    const index = nonSpecialKeys.indexOf(legendKey);
    if (index === -1) {
      return "bg-transparent";
    }
    if (index >= backgroundColorClasses.length) {
      return backgroundColorClasses[0];
    }
    return backgroundColorClasses[index];
  };

  const isCurrentMonth = (month: Date) => {
    const now = dayjs();
    return dayjs(month).format("YYYY-MM") === now.format("YYYY-MM");
  };

  const monthHighlight = (month: Date) => {
    return monthHighlights.find(
      (highlight) => highlight.monthNumber === month.getMonth() + 1 // 1-indexed
    );
  };

  return (
    <TooltipProvider delayDuration={100}>
      <div
        className={cn(
          "max-w-7xl mx-auto p-4",
          isMobile && "pb-20" // Add extra padding at bottom for mobile to account for sticky header
        )}
      >
        {/* Legend - Sticky on mobile */}
        <div
          ref={legendRef}
          className={cn(
            "flex justify-center gap-8 mb-8 flex-wrap",
            isMobile &&
              "sticky top-16 z-40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border pb-4 pt-2 shadow-sm"
          )}
        >
          {legendKeys.map((legendKey) => {
            const isSpecial = specialDateColorMap.has(legendKey);
            const hasAsterisk = legendKey.endsWith("*");
            const displayText = hasAsterisk
              ? legendKey.slice(0, -1)
              : legendKey;

            return (
              <div className="flex items-center gap-2" key={legendKey}>
                <div
                  className={`w-4 h-4 rounded ${getBackgroundColorClassNameForLegendKey(
                    legendKey
                  )}`}
                />
                <span className="text-sm">
                  {displayText}
                  {hasAsterisk && isSpecial && (
                    <span className="text-opening-night">*</span>
                  )}
                  {hasAsterisk && !isSpecial && "*"}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend Message */}
        {legendMessage && (
          <div className="max-w-3xl mx-auto text-center mb-8 px-4">
            {legendMessage}
          </div>
        )}

        {/* Calendar Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-6",
            months.length > 2 ? "md:grid-cols-3" : "",
            months.length > 3 ? "lg:grid-cols-4" : ""
          )}
        >
          {months.map((month) => (
            <div
              key={month.toString()}
              ref={isCurrentMonth(month) ? currentMonthRef : null}
              className={cn(
                "border rounded-lg p-4 relative",
                isCurrentMonth(month) && isMobile && "ring-2 ring-primary/20",
                monthHighlight(month)
                  ? "border-primary border-2 shadow-lg"
                  : "border-border"
              )}
            >
              {!!monthHighlight(month) && (
                <div
                  className={
                    "absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap bg-primary text-primary-foreground"
                  }
                >
                  {monthHighlight(month)?.label}
                </div>
              )}
              <h3 className={"text-center font-bold mb-4 text-primary"}>
                {dayjs(month).format("MMMM YYYY").toUpperCase()}
              </h3>
              <div className="grid grid-cols-7 gap-1">
                {/* Week days */}
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div
                    key={index}
                    className="text-center text-sm font-medium p-2"
                  >
                    {day}
                  </div>
                ))}

                {/* Calendar days with empty cells */}
                {createCalendarDays(month).map((date, index) =>
                  date ? (
                    <EventCalendarDay
                      key={date.toISOString()}
                      date={date}
                      month={month}
                      day={getDayForDate(date)}
                      backgroundColorClassName={getBackgroundColorClassNameForLegendKey(
                        getDayForDate(date)?.legendKey
                      )}
                      theater={theater}
                    />
                  ) : (
                    <div key={`empty-${index}`} className="aspect-square" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
