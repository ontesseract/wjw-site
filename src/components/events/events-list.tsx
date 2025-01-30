import { getStart, getTimeKey } from "./event-helpers";
import { getEvents } from "./events-graphql";

export interface EventsListProps {
  showName?: string;
  year?: number;
  city?: string;
}

export default async function EventsList({
  showName,
  year,
  city,
}: EventsListProps) {
  try {
    const events = await getEvents({
      showName,
      year,
      city,
    });

    if (!events.length) {
      return <div className="text-center p-4">No upcoming events found.</div>;
    }

    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <div className="text-sm text-muted-foreground mb-4">
                <p>
                  {event.startTimestamp &&
                    new Date(event.startTimestamp).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) +
                      " at " +
                      getTimeKey(getStart(event))}
                </p>
                <p>{event.location?.formatted}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{event.label}</span>
                {event.kind && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {event.kind}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return (
      <div className="text-center text-danger p-4">
        Error loading events. Please try again later.
      </div>
    );
  }
}
