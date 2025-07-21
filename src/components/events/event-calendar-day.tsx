"use client";

import { format, isSameMonth, isBefore, startOfDay } from "date-fns";
import { EventDay } from "./event-utils";
import { useState } from "react";
import EventDayModal from "./event-day-modal";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TheaterInfo } from "@/lib/data";

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

  // Check if the date is in the past (before today)
  const isPastDate = isBefore(startOfDay(date), startOfDay(new Date()));
  
  // Check if the day has events and is not in the past
  const isClickable = day?.events.length && !isPastDate;

  const handleClick = () => {
    if (isClickable) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`
            relative aspect-square flex items-center justify-center
          ${!isSameMonth(date, month) ? "invisible" : ""}
          ${isClickable ? "cursor-pointer hover:opacity-80" : ""}
          ${isPastDate && day?.events.length ? "opacity-50 cursor-not-allowed" : ""}
        `}
            onClick={handleClick}
          >
            <div
              className={`
            w-full h-full absolute rounded-sm
            ${backgroundColorClassName}
          `}
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
            <TooltipContent className="bg-secondary text-secondary-foreground  flex flex-col gap-2 items-center justify-center">
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
