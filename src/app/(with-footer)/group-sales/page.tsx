"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import ContactGroupForm from "@/components/contact-form/contact-group-form";
import { theDuttonFamilyTheaterBranson } from "@/lib/data";
import Link from "next/link";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function GroupSalesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Group Sales</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Experience Where Jesus Walked Together
                </h2>
                <p className="mb-4">
                  Bring your church group, tour group, student group, family
                  reunion, military reunion, or organization to witness the life
                  of Jesus in our immersive 360° theater experience. Group
                  bookings offer a unique opportunity for shared spiritual
                  growth and discussion.
                </p>
                <h3 className="text-xl font-semibold mb-2">Group Benefits:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex flex-row">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    Discounted rates for groups of 20 or more
                  </li>
                  <li className="flex flex-row">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    Priority booking for popular showtimes
                  </li>
                  <li className="flex flex-row">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    Customizable packages for large groups
                  </li>
                  <li className="flex flex-row">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    Combo rates with The Dutton Inn and The Duttons&apos; show
                  </li>
                  <li className="flex flex-row">
                    <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    Complimentary admission, drinks, and concessions for group
                    leaders and bus drivers (one each per group)
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/group-inside-bus.jpg"
                  alt="Group experiencing Where Jesus Walked"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Request Group Booking
            </h2>
            <p className="text-center mb-8">
              Call our group department at{" "}
              <Link href={`tel:${theDuttonFamilyTheaterBranson.phone}`}>
                {theDuttonFamilyTheaterBranson.phone}
              </Link>{" "}
              or submit the form below.
            </p>
            <div className="max-w-2xl mx-auto">
              <ContactGroupForm
                tenantId="wjw"
                turnstileSiteKey={turnstileSiteKey}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
