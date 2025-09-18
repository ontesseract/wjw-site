import EventCalendar from "@/components/events/event-calendar";
import { bransonTheater } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Book Tickets - Where Jesus Walked",
  description: "Book your tickets for Where Jesus Walked, Branson's premier 360° immersive Christian theater experience. See available showtimes and reserve your seats for this unforgettable biblical journey.",
  path: "/tickets",
  keywords: [
    "book tickets",
    "Branson theater tickets",
    "Where Jesus Walked tickets",
    "Christian show tickets",
    "Branson show reservations",
    "biblical theater booking"
  ],
});

export default function TicketsPage() {
  return (
    <div className="bg-background text-foreground py-16">
      <EventCalendar
        showName="Where Jesus Walked"
        year={2025}
        city="branson"
        theater={bransonTheater}
      />
    </div>
  );
}
