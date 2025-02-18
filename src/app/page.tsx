import { CalendarDays, Expand, Clock, Ticket } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroSection />

        <section id="about" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About the Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  &quot;Where Jesus Walked&quot; combines stunning sights and
                  immersive sounds to create a groundbreaking 360° theater
                  experience that brings the Holy Land to life.
                </p>
                <p className="text-lg">
                  Through spectacular visuals and masterful sound design, this
                  unique production surrounds you with the sights and sounds of
                  Jesus&apos; time, allowing you to witness His teachings,
                  miracles, and ultimate sacrifice like never before.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-lg shadow">
                  <Clock className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">60 Minutes</h3>
                  <p>Immersive experience</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow">
                  <Expand className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">360° Screens</h3>
                  <p>Surround viewing</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow">
                  <Ticket className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">Limited Seating</h3>
                  <p>Intimate atmosphere</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow">
                  <CalendarDays className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="font-semibold mb-2">Multiple Shows</h3>
                  <p>Flexible scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Gallery />
      </div>
    </div>
  );
}
