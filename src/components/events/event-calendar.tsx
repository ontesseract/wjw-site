"use client";

import { format } from "date-fns";
import { getEvents } from "./events-graphql";
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
import { useEffect, useRef, useState } from "react";
export interface EventCalendarProps {
  showName?: string;
  year?: number;
  city?: string;
  backgroundColorClasses?: string[];
  theater: TheaterInfo;
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

export default function EventCalendar({
  showName,
  year,
  city,
  backgroundColorClasses = defaultBackgroundColorClasses,
  theater,
}: EventCalendarProps) {
  const [events, setEvents] = useState<EventsQuery["events"]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const currentMonthRef = useRef<HTMLDivElement>(null);
  const legendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await getEvents({
          showName,
          year,
          city,
        });
        setEvents(eventsData);
      } catch (err) {
        console.error(err);
        setError("Error loading events.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [showName, year, city]);

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

  if (loading) {
    return <div className="text-center p-4">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center p-4">{error}</div>;
  }

  if (!events.length) {
    return <div className="text-center p-4">No upcoming events found.</div>;
  }

  const months = getUniqueMonths(events);
  const days = createEventDays(events);
  const legendKeys = getUniqueLegendKeys(days);

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
              "sticky top-22 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border pb-4 pt-2 shadow-sm"
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
          {months.map((month) => {
            const isCurrentMonth =
              format(month, "yyyy-MM") === format(new Date(), "yyyy-MM");
            return (
              <div
                key={month.toString()}
                ref={isCurrentMonth ? currentMonthRef : null}
                className={cn(
                  "border border-border rounded-lg p-4",
                  isCurrentMonth && isMobile && "ring-2 ring-primary/20"
                )}
              >
                <h3 className="text-center font-bold mb-4">
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
                        key={date.toString()}
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
            );
          })}
        </div>
      </div>
    </TooltipProvider>
  );
}
