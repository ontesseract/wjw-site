"use client";

import { useState } from "react";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock data for seats
const seats = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  row: Math.floor(i / 10) + 1,
  number: (i % 10) + 1,
  status: Math.random() > 0.2 ? "available" : "taken",
}));

export default function SeatingPage() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const toggleSeat = (seatId: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Choose Your Seats
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Seating Chart</h2>
            <div className="bg-secondary p-4 rounded-lg">
              <div className="w-full aspect-video bg-muted relative rounded overflow-hidden">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded">
                  Stage
                </div>
                <div className="absolute inset-8 grid grid-cols-10 gap-1">
                  {seats.map((seat) => (
                    <button
                      key={seat.id}
                      className={`rounded-sm transition-colors ${
                        seat.status === "taken"
                          ? "bg-muted-foreground cursor-not-allowed"
                          : selectedSeats.includes(seat.id)
                          ? "bg-primary"
                          : "bg-accent hover:bg-primary/50"
                      }`}
                      onClick={() =>
                        seat.status === "available" && toggleSeat(seat.id)
                      }
                      disabled={seat.status === "taken"}
                      aria-label={`Seat ${seat.row}-${seat.number}, ${seat.status}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent mr-2" /> Available
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary mr-2" /> Selected
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-muted-foreground mr-2" /> Taken
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Selected Seats</h2>
            {selectedSeats.length > 0 ? (
              <ul className="mb-4 space-y-2">
                {selectedSeats.map((seatId) => {
                  const seat = seats.find((s) => s.id === seatId)!;
                  return (
                    <li
                      key={seatId}
                      className="flex justify-between items-center bg-background p-2 rounded"
                    >
                      <span>
                        Row {seat.row}, Seat {seat.number}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSeat(seatId)}
                      >
                        Remove
                      </Button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mb-4">
                No seats selected. Please choose your seats from the seating
                chart.
              </p>
            )}

            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={selectedSeats.length === 0}
              >
                Reserve Seats ({selectedSeats.length})
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Where Jesus Walked. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
