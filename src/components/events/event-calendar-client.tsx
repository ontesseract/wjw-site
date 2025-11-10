"use client";

import { format } from "date-fns";
import { EventsQuery } from "@/graphql";
import {
  createCalendarDays,
  createEventDays,
  getUniqueLegendKeys,
  getUniqueMonths,
} from "./event-utils";
import EventCalendarDay from "./event-calendar-day";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TheaterInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef } from "react";

export interface MonthHighlight {
  monthNumber: number;
  borderClassName: string;
  colorClassName: string;
  textClassName: string;
  label: string;
}

export interface EventCalendarClientProps {
  events: EventsQuery["events"];
  backgroundColorClasses?: string[];
  theater: TheaterInfo;
  monthHighlights?: MonthHighlight[];
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

export default function EventCalendarClient({
  events,
  backgroundColorClasses = defaultBackgroundColorClasses,
  theater,
  monthHighlights = [],
}: EventCalendarClientProps) {
  const isMobile = useIsMobile();
  const currentMonthRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  const months = getUniqueMonths(events);
  const days = createEventDays(events);
  const legendKeys = getUniqueLegendKeys(days);

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
    const dayKey = format(date, "yyyy-MM-dd");
    return days[dayKey];
  };

  const getBackgroundColorClassNameForLegendKey = (legendKey?: string) => {
    if (!legendKey) {
      return "bg-transparent";
    }
    const index = legendKeys.indexOf(legendKey);
    if (index === -1) {
      return "bg-transparent";
    }
    if (index > backgroundColorClasses.length) {
      return backgroundColorClasses[0];
    }
    return backgroundColorClasses[index];
  };

  const isCurrentMonth = (month: Date) => {
    const now = new Date();
    return format(month, "yyyy-MM") === format(now, "yyyy-MM");
  };

  const monthHighlight = (month: Date) => {
    return monthHighlights.find(
      (highlight) => highlight.monthNumber === month.getMonth()
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
              "sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border pb-4 pt-2 shadow-sm"
          )}
        >
          {legendKeys.map((legendKey) => (
            <div className="flex items-center gap-2" key={legendKey}>
              <div
                className={`w-4 h-4 rounded ${getBackgroundColorClassNameForLegendKey(
                  legendKey
                )}`}
              />
              <span className="text-sm">{legendKey}</span>
            </div>
          ))}
        </div>

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
                monthHighlight(month)?.borderClassName || "border-border"
              )}
            >
              {!!monthHighlight(month) && (
                <div
                  className={cn(
                    "absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap",
                    monthHighlight(month)?.colorClassName
                  )}
                >
                  {monthHighlight(month)?.label}
                </div>
              )}
              <h3
                className={cn(
                  "text-center font-bold mb-4",
                  monthHighlight(month)?.textClassName
                )}
              >
                {format(month, "MMMM yyyy").toUpperCase()}
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
