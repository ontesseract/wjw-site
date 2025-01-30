"use client";

import { format, isSameMonth } from "date-fns";
import { EventDay } from "./event-helpers";
import { useState } from "react";
import EventDayModal from "./event-day-modal";

export default function EventCalendarDay({
  date,
  month,
  day,
  backgroundColorClassName,
}: {
  date: Date;
  month: Date;
  day?: EventDay;
  backgroundColorClassName: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (day?.events.length) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className={`
          relative aspect-square flex items-center justify-center
          ${!isSameMonth(date, month) ? "invisible" : ""}
          ${day?.events.length ? "cursor-pointer hover:opacity-80" : ""}
        `}
        onClick={handleClick}
      >
        <div
          className={`
            w-full h-full absolute rounded-sm
            ${backgroundColorClassName}
          `}
        />
        <span className="relative z-10 text-sm">{format(date, "d")}</span>
      </div>

      <EventDayModal
        date={date}
        day={day}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
