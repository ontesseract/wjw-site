import SeatMap from "@/components/events/event-seat-map";
import { convertSeats } from "@/components/events/ticket-utils";
import duttonSeats from "@/lib/dutton-seat-map.json";

export default function SeatingPage() {
  const seats = convertSeats(duttonSeats, 3);
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] px-4">
      <SeatMap seats={seats} rotation={0} />
    </div>
  );
}
