import {
  CheckCircle,
  Calendar,
  Users,
  Ticket,
  DollarSign,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Script from "next/script";
import { getEvent, toTimeString } from "@/components/events/events-api";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

interface TicketItem {
  label: string;
  quantity: number;
  amount: string;
}

interface ConfirmationPageProps {
  searchParams: Promise<{
    confnum: string;
    event_id: string;
    order_id: string;
    tickets: string;
    total: string;
  }>;
}

export default async function TicketConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const params = await searchParams;

  // If no confirmation number, redirect to homepage
  if (!params.confnum) {
    redirect("/");
  }

  const { confnum, event_id, tickets: ticketsString } = params;

  const event = await getEvent(event_id);
  const tickets: TicketItem[] = ticketsString ? JSON.parse(ticketsString) : [];

  const totalAmount = tickets.reduce(
    (acc, ticket) => acc + parseFloat(ticket.amount) * ticket.quantity,
    0
  );
  const ticketCount = tickets.reduce((acc, ticket) => acc + ticket.quantity, 0);
  const currency = "USD";

  // Format event date
  const showDate = event?.startTimestamp
    ? new Date(event.startTimestamp).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "TBD";

  // Format event time
  const showTime = event?.startTimestamp
    ? toTimeString(event.startTimestamp, event.location?.timezone)
    : null;

  // Build location string
  const location = event?.location;
  const venueName = location?.name;
  const addressParts = [
    location?.street1,
    location?.city,
    location?.stateCode || location?.state,
    location?.postalCode,
  ].filter(Boolean);
  const fullAddress = addressParts.join(", ");

  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-1067269686/O5fsCNv0r8QbELb89PwD',
            'value': ${totalAmount},
            'currency': '${currency}',
            'transaction_id': '${confnum}'
          });
        `}
      </Script>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Purchase Confirmed!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your ticket purchase
            </p>
          </div>

          {/* Confirmation Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">
                Confirmation #{confnum}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <Ticket className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Event</p>
                    <p className="font-semibold">
                      {event?.name || event?.label || "The Duttons"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold">{showDate}</p>
                    </div>
                  </div>

                  {showTime && (
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{showTime}</p>
                      </div>
                    </div>
                  )}
                </div>

                {(venueName || fullAddress) && (
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      {venueName && (
                        <p className="font-semibold">{venueName}</p>
                      )}
                      {fullAddress && (
                        <p className="text-sm text-muted-foreground">
                          {fullAddress}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Tickets Breakdown */}
              {tickets.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Tickets</h3>
                  </div>
                  <div className="space-y-2">
                    {tickets.map((ticket, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 px-3 bg-muted/50 rounded"
                      >
                        <div>
                          <span className="font-medium">{ticket.label}:</span>
                          <span className="text-muted-foreground ml-2">
                            {formatPrice(parseFloat(ticket.amount))} ×{" "}
                            {ticket.quantity}
                          </span>
                        </div>
                        <span className="font-medium">
                          {formatPrice(
                            parseFloat(ticket.amount) * ticket.quantity
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Total Paid</span>
                  </div>
                  <span className="text-xl font-bold">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {ticketCount} {ticketCount === 1 ? "ticket" : "tickets"} total
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="mb-8 bg-muted/50">
            <CardContent className="pt-6">
              <h2 className="font-semibold mb-3">What&apos;s Next?</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    You will receive an email confirmation with your ticket
                    details shortly
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Please arrive 15-30 minutes before showtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Bring your confirmation number or email to the box office
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Questions about your tickets? Contact us at{" "}
              <a
                href="tel:+14173343428"
                className="text-primary hover:underline"
              >
                (417) 334-3428
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
