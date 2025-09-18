import { bransonTheater } from "@/lib/data";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { location, phone } = bransonTheater;
  return (
    <div className="flex flex-col">
      {children}
      <footer className="bg-background text-foreground py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4 text-lg">Where Jesus Walked</h3>
              <p>
                &copy; {new Date().getFullYear()} Where Jesus Walked. All rights
                reserved.
              </p>
              <p>
                {location.name} - {`${location.city}, ${location.stateCode}`} -{" "}
                {phone}{" "}
              </p>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${
                  location.name + " " + location.formatted
                }`}
                target="_blank"
                className="text-primary"
              >
                View in Google Maps
              </Link>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <nav className="space-y-2">
                <Link href="/tickets" className="block text-primary hover:text-primary/80 transition-colors">
                  Tickets
                </Link>
                <Link href="/faq" className="block text-primary hover:text-primary/80 transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-primary hover:text-primary/80 transition-colors">
                  Contact
                </Link>
                <Link href="/group-sales" className="block text-primary hover:text-primary/80 transition-colors">
                  Group Sales
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
