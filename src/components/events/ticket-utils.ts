import { Seat } from "@/components/events/event-seat-map";

export interface CompleteTicketingSeat {
  ROW: string;
  START: number;
  END: number;
  COLSTART: number;
  ROWTOP: number;
  FIELDNAME: string;
  SECTION: string;
  FIELDPOS: number;
  SEAT: number;
  TTTEXT: string;
}

function convertSeat(seat: CompleteTicketingSeat): Seat {
  return {
    id: seat.SEAT,
    section: seat.SECTION,
    row: seat.ROW,
    seatNumber: seat.START,
    available: true,
    x: seat.COLSTART,
    y: seat.ROWTOP,
    width: 1,
    height: 1,
  };
}

export function convertSeats(
  seats: CompleteTicketingSeat[],
  multiplier: number = 1
): Seat[] {
  const seatSpacingFactor = 0.2;

  const convertedSeats = seats.map((seat) => convertSeat(seat));
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;

  let seatWidth = 0;
  let seatHeight = 0;

  let currentRow = "";
  let currentSection = "";
  let lastSeatX = 0;
  let lastSeatY = 0;

  convertedSeats.forEach((s) => {
    if (s.row !== currentRow) {
      lastSeatX = s.x;
      currentRow = s.row;
    }
    if (s.section !== currentSection) {
      lastSeatY = s.y;
      currentSection = s.section;
    }

    if (
      s.row === currentRow &&
      s.section === currentSection &&
      s.x !== lastSeatX &&
      !seatWidth
    ) {
      seatWidth = Math.abs(s.x - lastSeatX);
      seatWidth = seatWidth - seatWidth * seatSpacingFactor;
    }

    if (s.section === currentSection && s.y !== lastSeatY && !seatHeight) {
      seatHeight = Math.abs(s.y - lastSeatY);
      seatHeight = seatHeight - seatHeight * seatSpacingFactor;
    }

    if (s.x < minX) minX = s.x;
    if (s.y < minY) minY = s.y;
  });

  const offsetX = -minX;
  const offsetY = -minY;
  return convertedSeats.map((seat) => ({
    ...seat,
    width: seatWidth * multiplier,
    height: seatHeight * multiplier,
    x: (seat.x + offsetX) * multiplier,
    y: (seat.y + offsetY) * multiplier,
  }));
}

export function getSelectedSeats(
  seats: Seat[],
  selectedSeats: Set<number>
): Seat[] {
  return seats.filter((seat) => selectedSeats.has(seat.id));
}

export function groupSeatsBySection(
  seats: Seat[],
  xSort: "left-to-right" | "right-to-left" = "left-to-right"
): {
  section: string;
  seats: Seat[];
}[] {
  // Create a map of sections to seats
  const sectionMap = new Map<string, Seat[]>();

  // Group seats by section
  seats.forEach((seat) => {
    if (!sectionMap.has(seat.section)) {
      sectionMap.set(seat.section, []);
    }
    sectionMap.get(seat.section)?.push(seat);
  });

  // Sort seats within each section by row and seat number
  sectionMap.forEach((sectionSeats) => {
    sectionSeats.sort((a, b) => {
      // First sort by row
      if (a.row !== b.row) {
        return a.row.localeCompare(b.row);
      }
      // Then by seat number
      return a.seatNumber - b.seatNumber;
    });
  });

  // Convert map to array of arrays, maintaining section order
  const sections = Array.from(sectionMap.values());

  // Sort sections based on the x-coordinate of their first seat
  sections.sort((a, b) => {
    if (xSort === "left-to-right") {
      const aFirstSeat = a[0];
      const bFirstSeat = b[0];
      return aFirstSeat.x - bFirstSeat.x;
    } else {
      const aLastSeat = a[a.length - 1];
      const bLastSeat = b[b.length - 1];
      return bLastSeat.x - aLastSeat.x;
    }
  });

  return sections.map((section) => ({
    section: section[0].section,
    seats: section,
  }));
}
