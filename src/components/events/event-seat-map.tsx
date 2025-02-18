"use client";

import { useState } from "react";
import {
  getSelectedSeats,
  groupSeatsBySection,
} from "@/components/events/ticket-utils";
import { SeatMapSvg } from "./event-seat-map-svg";

export interface Seat {
  id: number;
  section: string;
  row: string;
  seatNumber: number;
  available: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface SeatMapProps {
  seats: Seat[];
  rotation?: number;
}

export default function SeatMap({ seats, rotation = 0 }: SeatMapProps) {
  const [selectedSeats, setSelectedSeats] = useState<Set<number>>(new Set());

  const handleSeatClick = (seat: Seat) => {
    if (!seat.available) return;

    setSelectedSeats((prev) => {
      const next = new Set(prev);
      if (next.has(seat.id)) {
        next.delete(seat.id);
      } else {
        next.add(seat.id);
      }
      return next;
    });
  };

  return (
    <div className="container mx-auto py-8 flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6 text-center flex-none">
        Select Your Seat
      </h1>

      {/* Container */}
      <div className="relative flex-1 w-full max-w-5xl mx-auto min-h-0 bg-muted rounded-lg p-4">
        <SeatMapSvg
          seats={seats}
          selectedSeats={selectedSeats}
          rotation={rotation}
          onSeatClick={handleSeatClick}
          seatStyle="circle"
        />
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-3 sm:gap-6 mt-8 text-xs sm:text-base">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-muted-foreground" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-secondary" />
          <span>Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span>Selected</span>
        </div>
      </div>

      {/* Selection info - now floating */}
      {selectedSeats.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <p className="text-lg mb-1">Selected Seats:</p>
                <p className="font-bold">
                  {groupSeatsBySection(getSelectedSeats(seats, selectedSeats))
                    .map(({ section, seats }) => {
                      return `${section}: ${seats
                        .map((seat) => `${seat.row}${seat.seatNumber}`)
                        .join(", ")}`;
                    })
                    .join(" | ")}
                </p>
              </div>
              <div className="flex justify-end items-center">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 cursor-pointer">
                  Continue to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
