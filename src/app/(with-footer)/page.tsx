"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { TripAdvisorReviews } from "@/components/tripadvisor-reviews";
import { faqs } from "@/lib/data";

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroSection />

        <section
          id="about"
          className="py-16 bg-secondary text-secondary-foreground"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/wjw-background-2.jpg"
                  alt="Beautiful sunset scene from Where Jesus Walked"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Experience the Life of Jesus Like Never Before
                </h2>
                <p className="text-lg mb-4">
                  Immerse yourself among the crowd as Jesus raises Lazarus from the tomb. Feel the spray of the sea as He commands the waves to be still. 
                  Walk beside Him through the streets of Jerusalem as He carries the cross. Watch the storm clouds break as He walks across the water.
                </p>
                <p className="text-lg">
                  At Where Jesus Walked, these powerful moments will surround you on 360º screens with breathtaking visuals and awe-inspiring sound. 
                  In this 70-minute biblical production, you&apos;ll encounter the teachings, miracles, and sacrifice of Christ in a way no other Missouri attraction can offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why &ldquo;Where Jesus Walked&rdquo; is Branson&apos;s Must-See Christian Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 border border-border rounded-lg bg-background">
                <h3 className="text-xl font-semibold">Immersion Like No Other</h3>
                  <p>Surrounded by 360° visuals and sound, you don&apos;t just watch the Gospel story... you step inside it.</p>
              </div>
              <div className="space-y-4 p-6 border border-border rounded-lg bg-background">
                <h3 className="text-xl font-semibold">Faith at the Center</h3>
                  <p>Every moment of this 70-minute biblical production is rooted in scripture, making it Branson&apos;s most meaningful faith-based attraction.</p>
              </div>
              <div className="space-y-4 p-6 border border-border rounded-lg bg-background">
                <h3 className="text-xl font-semibold">Accessible to All</h3>
                  <p>Designed for families, tour groups, and believers of all ages. A highlight of any Branson itinerary.</p>
              </div>
              <div className="space-y-4 p-6 border border-border rounded-lg bg-background">
                <h3 className="text-xl font-semibold">Life-Changing Storytelling</h3>
                  <p>More than a show - it&apos;s an encounter with Christ&apos;s miracles, sacrifice, and redemption.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Your Journey Begins Here</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span>70 Minutes of Immersion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span>Tickets Made Easy &mdash; online booking in minutes.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span>Perfect for Families &amp; Groups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span>Central Branson Venue &mdash; 76 Country Blvd.</span>
                  </li>
                </ul>
                <Link href="/tickets">
                  <Button size="lg" className="text-lg cursor-pointer">
                    Book Tickets Today
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/wjw-background-1.jpg"
                  alt="Scenic view from Where Jesus Walked experience"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Visitors Are Saying
            </h2>
            <TripAdvisorReviews />
          </div>
        </section>

        <section className="py-16 bg-muted text-muted-foreground">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Plan the Perfect Branson Trip
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/wjw-sunset.jpg"
                    alt="Sunset over hills"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Family-Friendly Shows</h3>
                  <p className="text-lg">Explore Branson&apos;s best family shows, perfect for kids, parents, and grandparents alike.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/wjw-jerusalem-gates.jpg"
                    alt="Jerusalem Old City"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Faith-Based Attractions</h3>
                  <p className="text-lg">From biblical theater to live gospel music, Branson offers something for every believer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.slice(0, 6).map((faq, index) => (
                <div key={index} className="bg-background rounded-lg border border-border">
                  <button
                    className="flex justify-between items-center w-full text-left p-6 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg"
                    onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    {openFAQIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="mb-6 text-lg">Still have questions? View our complete FAQ or contact us!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
