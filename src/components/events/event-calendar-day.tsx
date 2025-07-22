"use client";

import { format, isPast, isSameMonth, isToday } from "date-fns";
import { EventDay } from "./event-utils";
import { useMemo, useState } from "react";
import EventDayModal from "./event-day-modal";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TheaterInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface EventCalendarDayProps {
  date: Date;
  month: Date;
  day?: EventDay;
  backgroundColorClassName: string;
  theater: TheaterInfo;
}

export default function EventCalendarDay({
  date,
  month,
  day,
  backgroundColorClassName,
  theater,
}: EventCalendarDayProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTodayDate = useMemo(() => isToday(date), [date]);
  const isPastDate = useMemo(
    () => isPast(date) && !isTodayDate,
    [date, isTodayDate]
  );

  const handleClick = () => {
    if (day?.events.length && !isPastDate) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Tooltip disableHoverableContent={isMobile}>
        <TooltipTrigger>
          <div
            className={cn(
              "relative aspect-square flex items-center justify-center",
              !isSameMonth(date, month) ? "invisible" : "",
              day?.events.length && !isPastDate
                ? "cursor-pointer hover:opacity-80 active:scale-95 transition-transform"
                : "",
              isPastDate && "opacity-50",
              isMobile && day?.events.length && !isPastDate && "min-h-[44px] min-w-[44px]"
            )}
            onClick={handleClick}
          >
            <div
              className={cn(
                "w-full h-full absolute rounded-sm",
                backgroundColorClassName,
                isTodayDate && "p-2 border-2 border-black dark:border-white"
              )}
            />
            <span
              className={`relative z-10 text-sm ${
                backgroundColorClassName === "bg-transparent"
                  ? "text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              {format(date, "d")}
            </span>
          </div>
          {!!day?.legendKey && (
            <TooltipContent className="bg-secondary text-secondary-foreground flex flex-col gap-2 items-center justify-center">
              {day?.legendKey.split(" & ").map((key) => (
                <span key={day.legendKey + key}>{key}</span>
              ))}
            </TooltipContent>
          )}
        </TooltipTrigger>
      </Tooltip>
      <EventDayModal
        date={date}
        day={day}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theater={theater}
      />
    </>
  );
}