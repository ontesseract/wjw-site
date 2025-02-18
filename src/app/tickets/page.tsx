import EventCalendar from "@/components/events/event-calendar";

export default function TicketsPage() {
  return (
    <div>
      <EventCalendar showName="Where Jesus Walked" year={2025} city="branson" />
    </div>
  );
}
