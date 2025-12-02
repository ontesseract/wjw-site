"use client";

import { GeoLocation } from "@/graphql";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FormattedLocationProps {
  location: GeoLocation;
  googleMapsUrl: string;
  phone?: string;
  className?: string;
}

export function FormattedLocation({
  location,
  phone,
  className,
  googleMapsUrl,
}: FormattedLocationProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">
          {location.name}
          {!!phone && (
            <>
              {" - "}
              <Link href={`tel:${phone}`}>{phone}</Link>
            </>
          )}
        </h2>

        <div className="text-muted-foreground">
          <p>{location.street1}</p>
          {location.street2 && <p>{location.street2}</p>}
          <p>
            {location.city}, {location.state} {location.postalCode}
          </p>
          {location.country && <p>{location.country}</p>}
        </div>
        <Link
          href={googleMapsUrl}
          target="_blank"
          className="text-primary mt-2"
        >
          View in Google Maps
        </Link>
      </div>
    </div>
  );
}
