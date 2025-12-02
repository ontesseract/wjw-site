import { cn } from "@/lib/utils";
import { Seat } from "./event-seat-map";
import { useMemo, useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Point {
  x: number;
  y: number;
}

interface SeatMapSvgProps {
  seats: Seat[];
  selectedSeats: Set<number>;
  rotation: number;
  onSeatClick: (seat: Seat) => void;
  seatStyle?: "circle" | "rect";
}

export function SeatMapSvg({
  seats,
  selectedSeats,
  rotation,
  onSeatClick,
  seatStyle = "rect",
}: SeatMapSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<Point>({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const startPoint = useRef<Point | null>(null);
  const lastDistance = useRef<number | null>(null);
  const didDrag = useRef(false);

  const dimensions = useMemo(() => {
    let minX = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    let seatWidth = 0;
    let seatHeight = 0;

    seats.forEach((s) => {
      if (s.x < minX) minX = s.x;
      if (s.x > maxX) maxX = s.x;
      if (s.y < minY) minY = s.y;
      if (s.y > maxY) maxY = s.y;
      if (s.width > seatWidth) seatWidth = s.width;
      if (s.height > seatHeight) seatHeight = s.height;
    });
    return {
      minX,
      maxX,
      minY,
      maxY,
      width: maxX - minX + seatWidth,
      height: maxY - minY + seatHeight,
    };
  }, [seats]);

  const stageHeight = dimensions.height * 0.09;
  const sectionLabelHeight = dimensions.height * 0.06;
  const leftOffset = dimensions.width * 0.03;

  const labelOffsetLeft = dimensions.width * 0.005;
  const viewBoxWidth = dimensions.width + leftOffset * 2;
  const viewBoxHeight = dimensions.height + sectionLabelHeight + stageHeight;
  const aspectRatio = viewBoxWidth / viewBoxHeight;

  const updatePan = (deltaX: number, deltaY: number, zoom: number) => {
    if (!containerRef.current) return;

    // Calculate bounds
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const containerAspectRatio = containerWidth / containerHeight;
    let svgWidth = containerWidth * zoom;
    let svgHeight = containerHeight * zoom;

    if (aspectRatio < containerAspectRatio) {
      // container is wider than the svg
      svgWidth = svgHeight * aspectRatio;
    } else {
      // container is taller than the svg
      svgHeight = svgWidth / aspectRatio;
    }

    // Calculate maximum pan distances
    const maxPanX = Math.abs((svgWidth - containerWidth) / 2) / zoom;
    const maxPanY = Math.abs((svgHeight - containerHeight) / 2) / zoom;

    setPan((prev) => {
      if (zoom === 1) {
        return { x: 0, y: 0 };
      }

      let nextX = prev.x + deltaX;
      let nextY = prev.y + deltaY;

      if (containerWidth > svgWidth) {
        nextX = 0;
      }

      if (containerHeight > svgHeight) {
        nextY = 0;
      }

      if (nextX > maxPanX) {
        nextX = maxPanX;
      }

      if (nextX < -maxPanX) {
        nextX = -maxPanX;
      }

      if (nextY > maxPanY) {
        nextY = maxPanY;
      }

      if (nextY < -maxPanY) {
        nextY = -maxPanY;
      }

      return { x: nextX, y: nextY };
    });
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev * 1.2, prev * 2));
  const handleZoomOut = () => {
    const newZoom = Math.max(zoom / 1.2, 1);
    setZoom(newZoom);

    updatePan(0, 0, newZoom);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastPoint.current = { x: e.clientX, y: e.clientY };
    startPoint.current = { x: e.clientX, y: e.clientY };
    const container = containerRef.current;
    if (container) {
      container.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (
      !isDragging.current ||
      !lastPoint.current ||
      !containerRef.current ||
      !svgRef.current
    ) {
      return;
    }

    const deltaX = (e.clientX - lastPoint.current.x) / zoom;
    const deltaY = (e.clientY - lastPoint.current.y) / zoom;
    updatePan(deltaX, deltaY, zoom);

    if (startPoint.current && !didDrag.current) {
      const deltaXFromStart = e.clientX - startPoint.current.x;
      const deltaYFromStart = e.clientY - startPoint.current.y;
      const distance = Math.sqrt(
        deltaXFromStart * deltaXFromStart + deltaYFromStart * deltaYFromStart
      );
      didDrag.current = distance > 5;
    }

    lastPoint.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    lastPoint.current = null;
    startPoint.current = null;

    setTimeout(() => {
      didDrag.current = false;
    }, 100);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch to zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      lastDistance.current = distance;
      isDragging.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastDistance.current) {
      // Pinch to zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );

      const delta = distance / lastDistance.current;
      const newZoom = zoom * delta;

      setZoom(Math.max(1, newZoom));
      lastDistance.current = distance;
    }
  };

  const handleTouchEnd = () => {
    lastDistance.current = null;
  };

  // Get unique sections and their rows
  const sectionData = seats.reduce((acc, seat) => {
    const section = acc.find((s) => s.section === seat.section);
    if (!section) {
      acc.push({
        section: seat.section,
        rows: new Set([seat.row]),
      });
    } else {
      section.rows.add(seat.row);
    }
    return acc;
  }, [] as { section: string; rows: Set<string> }[]);

  // Find the leftmost x position for each section's row labels
  const sectionRowLabelX = seats.reduce((acc, seat) => {
    const currentMin = acc.get(seat.section) ?? Number.MAX_SAFE_INTEGER;
    acc.set(seat.section, Math.min(currentMin, Math.max(seat.x, 0)));
    return acc;
  }, new Map<string, number>());

  return (
    <div className="relative w-full h-full">
      {/* Zoom Controls */}
      <div className="absolute right-1 top-1 flex gap-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          className="bg-background/80 backdrop-blur-sm"
          disabled={zoom === 1}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          className="bg-background/80 backdrop-blur-sm"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="w-full h-full touch-none overflow-hidden select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
            transformOrigin: "center center",
            width: "100%",
            height: "100%",
          }}
          className="select-none"
        >
          <svg
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            className="w-full h-full select-none"
            preserveAspectRatio="xMidYMid meet"
            ref={svgRef}
          >
            <defs>
              <clipPath id="container-clip">
                <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} />
              </clipPath>
            </defs>

            <g clipPath="url(#container-clip)">
              {/* Stage */}
              <g
                transform={`translate(${dimensions.width / 2}, ${
                  dimensions.height + stageHeight
                })`}
              >
                <rect
                  x={(-viewBoxWidth / 2) * 0.7}
                  y={0}
                  width={viewBoxWidth * 0.7}
                  height={6}
                  className="fill-muted-foreground"
                  rx={2}
                />
                <text
                  y={stageHeight / 2}
                  textAnchor="middle"
                  className="text-[32px] fill-current font-bold"
                >
                  Stage
                </text>
              </g>

              {/* Section Labels */}
              <g>
                {sectionData.map(({ section }) => {
                  const sectionSeats = seats.filter(
                    (s) => s.section === section
                  );
                  const centerX =
                    sectionSeats.reduce(
                      (sum, s) => sum + s.x + s.width / 2,
                      0
                    ) / sectionSeats.length;

                  return (
                    <text
                      key={`section-${section}`}
                      x={centerX}
                      y={sectionLabelHeight / 2}
                      textAnchor="middle"
                      className="text-[24px] font-bold fill-current"
                    >
                      {section}
                    </text>
                  );
                })}
              </g>

              {/* Row Labels */}
              {sectionData.map(({ section, rows }) =>
                Array.from(rows)
                  .sort()
                  .map((row) => {
                    const rowSeats = seats.filter(
                      (s) => s.section === section && s.row === row
                    );
                    const centerY = rowSeats[0].y + rowSeats[0].height / 2;
                    const labelX =
                      leftOffset +
                      (sectionRowLabelX.get(section) ?? 0) -
                      labelOffsetLeft;

                    return (
                      <text
                        key={`${section}-${row}`}
                        x={labelX}
                        y={centerY + sectionLabelHeight}
                        textAnchor="end"
                        dominantBaseline="middle"
                        className="text-[14px] font-bold fill-current"
                      >
                        {row}
                      </text>
                    );
                  })
              )}

              {/* Seats */}
              {seats.map((seat) => {
                const { id, available, x, y } = seat;

                return (
                  <g
                    key={id}
                    data-seat-id={id}
                    onClick={() => {
                      if (!didDrag.current) {
                        onSeatClick(seat);
                      }
                    }}
                  >
                    <g
                      transform={`rotate(${rotation} ${x + seat.width / 2} ${
                        y + seat.height / 2
                      })`}
                    >
                      {seatStyle === "rect" ? (
                        <rect
                          x={x + leftOffset}
                          y={y + sectionLabelHeight}
                          width={seat.width}
                          height={seat.height}
                          rx={4}
                          className={cn(
                            "transition-colors cursor-pointer",
                            !available && "fill-secondary cursor-not-allowed",
                            available && "fill-muted-foreground",
                            selectedSeats.has(id) && "fill-primary"
                          )}
                        />
                      ) : (
                        <circle
                          cx={x + leftOffset + seat.width}
                          cy={y + sectionLabelHeight + seat.height / 2}
                          r={seat.width / 2}
                          className={cn(
                            "transition-colors cursor-pointer",
                            !available && "fill-secondary cursor-not-allowed",
                            available && "fill-muted-foreground",
                            selectedSeats.has(id) && "fill-primary"
                          )}
                        />
                      )}
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
