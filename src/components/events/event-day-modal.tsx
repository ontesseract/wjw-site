import { EventDay, getEventStartTime } from "./event-utils";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TheaterInfo } from "@/lib/data";
import { FormattedLocation } from "../formatted-location";

interface EventDayModalProps {
  date: Date;
  day?: EventDay;
  isOpen: boolean;
  onClose: () => void;
  theater: TheaterInfo;
}

export default function EventDayModal({
  date,
  day,
  isOpen,
  onClose,
  theater,
}: EventDayModalProps) {
  if (!isOpen || !day?.events.length) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="max-w-xl w-full relative">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            {format(date, "EEEE, MMMM d, yyyy")}
          </CardTitle>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-4">
            {day.events.map((event) => (
              <Link
                key={event.id}
                href={event.metadata?.completeTicketing?.link ?? "#"}
                target="_blank"
                className="border border-border rounded-md p-3 block transition-colors hover:bg-muted/50"
              >
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-lg font-bold">{event.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {getEventStartTime(event)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex flex-row gap-1 text-primary">
                      <p>Buy Tickets</p>
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <p className="text-xs text-muted-foreground text-right">
                      Sold by completeticketing.co
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <Link
              href="/group-sales"
              className="border border-border rounded-md p-3 transition-colors hover:bg-muted/50 flex flex-row justify-between items-center gap-2"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <p className="text-lg font-bold">Group Sales</p>
                  <Users className="h-6 w-6" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Buying tickets for 20+? Click here!
                </p>
              </div>
              <div className="flex items-center text-primary">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
          <FormattedLocation
            location={theater.location}
            phone={theater.phone}
          />
        </CardContent>
      </Card>
    </div>
  );
}
