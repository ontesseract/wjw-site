import { theDuttonFamilyTheaterBranson } from "@/lib/data";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { location, phone } = theDuttonFamilyTheaterBranson;
  return (
    <div className="flex flex-col">
      {children}
      <footer className="bg-background text-foreground py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
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
      </footer>
    </div>
  );
}
