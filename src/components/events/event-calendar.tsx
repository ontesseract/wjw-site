import { format } from "date-fns";
import { getEvents } from "./events-graphql";
import { EventsQuery } from "@/graphql";
import {
  createCalendarDays,
  createEventDays,
  getUniqueLegendKeys,
  getUniqueMonths,
} from "./event-helpers";
import EventCalendarDay from "./event-calendar-day";

export interface EventCalendarProps {
  showName?: string;
  year?: number;
  city?: string;
  backgroundColorClasses?: string[];
}

const defaultBackgroundColorClasses = [
  "bg-sky-400",
  "bg-red-400",
  "bg-indigo-600",
];

export default async function EventCalendar({
  showName,
  year,
  city,
  backgroundColorClasses = defaultBackgroundColorClasses,
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
    <div className="max-w-7xl mx-auto px-4">
      {/* Legend */}
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        {legendKeys.map((legendKey) => (
          <div className="flex items-center gap-2" key={legendKey}>
            <div
              className={`w-4 h-4 rounded ${getBackgroundColorClassNameForLegendKey(
                legendKey
              )}`}
            />
            <span>{legendKey}</span>
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {months.map((month) => (
          <div
            key={month.toString()}
            className="border border-gray-800 rounded-lg p-4"
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
  );
}
