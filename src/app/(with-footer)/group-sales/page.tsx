"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GroupSalesPage() {
  const [groupSize, setGroupSize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Group Sales</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Experience &quot;Where Jesus Walked&quot; Together
                </h2>
                <p className="mb-4">
                  Bring your church group, school class, or organization to
                  witness the life of Jesus in our immersive 360° theater
                  experience. Group bookings offer a unique opportunity for
                  shared spiritual growth and discussion.
                </p>
                <h3 className="text-xl font-semibold mb-2">Group Benefits:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Discounted rates for groups of 10 or more
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Priority booking for popular showtimes
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Optional guided discussion after the experience
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    Customizable packages for large groups
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Group+Experience"
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
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Group Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your group name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-person"
                    className="block mb-1 font-medium"
                  >
                    Contact Person
                  </label>
                  <Input
                    type="text"
                    id="contact-person"
                    placeholder="Enter contact person's name"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="group-size" className="block mb-1 font-medium">
                  Estimated Group Size
                </label>
                <Select value={groupSize} onValueChange={setGroupSize}>
                  <SelectTrigger id="group-size">
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-20">10-20 people</SelectItem>
                    <SelectItem value="21-50">21-50 people</SelectItem>
                    <SelectItem value="51-100">51-100 people</SelectItem>
                    <SelectItem value="100+">100+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="preferred-date"
                  className="block mb-1 font-medium"
                >
                  Preferred Date
                </label>
                <Input type="date" id="preferred-date" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Additional Information
                </label>
                <Textarea
                  id="message"
                  placeholder="Any special requests or questions?"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Group Inquiry
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
