import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Group Sales & Bookings",
  description: "Bring your church group, tour group, or organization to Where Jesus Walked. Enjoy discounted rates, priority booking, and customizable packages for groups of 20 or more at Branson's premier Christian theater.",
  path: "/group-sales",
  keywords: [
    "group sales",
    "church groups", 
    "tour groups",
    "group discounts",
    "Branson group bookings",
    "Christian theater groups",
    "group rates",
    "educational groups"
  ],
});

export default function GroupSalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
