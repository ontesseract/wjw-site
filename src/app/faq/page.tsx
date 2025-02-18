"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is 'Where Jesus Walked'?",
    answer:
      "'Where Jesus Walked' is a 360° immersive theater experience that brings the life of Jesus Christ to vivid reality. Using state-of-the-art technology and masterful storytelling, we transport you back in time to witness key moments in Jesus' life.",
  },
  {
    question: "How long is the experience?",
    answer:
      "The entire experience lasts approximately 90 minutes, including a brief introduction and conclusion.",
  },
  {
    question: "Is there an age restriction?",
    answer:
      "While the experience is suitable for most ages, we recommend it for children 10 and above due to the immersive nature and some intense moments. Parental discretion is advised.",
  },
  {
    question: "Are there any special effects that might be concerning?",
    answer:
      "The experience includes various special effects such as lighting changes, sound effects, and some mist. If you have specific concerns, please contact us for more detailed information.",
  },
  {
    question: "Is the venue wheelchair accessible?",
    answer:
      "Yes, our venue is fully wheelchair accessible. Please let us know in advance if you require any special accommodations.",
  },
  {
    question: "Can I take photos or videos during the experience?",
    answer:
      "To maintain the immersive atmosphere and respect copyright laws, photography and video recording are not permitted during the experience. We offer professional photos for purchase after the show.",
  },
  {
    question: "What should I wear?",
    answer:
      "Comfortable clothing and shoes are recommended. You may be standing or moving around during parts of the experience.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "There is no strict dress code, but we ask that guests dress respectfully given the religious nature of the content.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-background rounded-lg shadow"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-muted rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="mb-4">Still have questions? Feel free to contact us!</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
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
