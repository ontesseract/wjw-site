"use client";

import { EventDay } from "./event-helpers";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EventDayModalProps {
  date: Date;
  day?: EventDay;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDayModal({
  date,
  day,
  isOpen,
  onClose,
}: EventDayModalProps) {
  if (!isOpen || !day?.events.length) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="max-w-lg w-full relative bg-black">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {format(date, "EEEE, MMMM d, yyyy")}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {day.events.map((event) => (
            <div key={event.id}>
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
