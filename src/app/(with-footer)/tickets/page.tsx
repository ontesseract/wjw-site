import EventCalendar from "@/components/events/event-calendar";
import { bransonTheater } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";
import dayjs from "dayjs";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Book Tickets - Where Jesus Walked",
  description:
    "Book your tickets for Where Jesus Walked, Branson's premier 360° immersive Christian experience. See available showtimes and reserve your seats for this unforgettable biblical journey.",
  path: "/tickets",
  keywords: [
    "book tickets",
    "Branson theater tickets",
    "Where Jesus Walked tickets",
    "Christian show tickets",
    "Branson show reservations",
    "biblical theater booking",
  ],
});
interface BransonTicketsPageProps {
  searchParams: Promise<{ year: string }>;
}

const defaultYear = dayjs().year().toString();

export default async function BransonTicketsPage({
  searchParams,
}: BransonTicketsPageProps) {
  const year = parseInt((await searchParams).year || defaultYear);
  return (
    <div className="bg-background text-foreground py-16">
      <EventCalendar
        showName="Where Jesus Walked"
        year={year}
        city="branson"
        theater={bransonTheater}
        legendSortOrder="earliest-first"
      />
    </div>
  );
}
