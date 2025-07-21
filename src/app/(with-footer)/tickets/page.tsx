import EventCalendar from "@/components/events/event-calendar";
import { bransonTheater } from "@/lib/data";

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
