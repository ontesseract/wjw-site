import { GeoLocation } from "@/graphql";
import { ReactNode } from "react";
export const showLengthMinutes = 70;

interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface TheaterInfo {
  name: string;
  phone: string;
  location: GeoLocation;
  groupLink: string;
  googleMapsUrl: string;
}

export const bransonTheater: TheaterInfo = {
  name: "The Dutton Family Theater",
  phone: "417-332-2772",
  groupLink: "/group-sales",
  googleMapsUrl:
    "https://www.google.com/maps/place/The+Dutton+Family+Theater/@36.642347,-93.285776,16z/data=!4m6!3m5!1s0x87cf1c9a52a12afb:0xb88614f9b27ecb91!8m2!3d36.642347!4d-93.2857756!16s%2Fg%2F1tgnb469?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
  location: {
    city: "Branson",
    country: "United States",
    countryCode: "US",
    createdAt: "2024-10-31T15:19:35.494992+00:00",
    formatted:
      "3454 West 76 Country Boulevard, Branson, MO 65616, United States of America",
    id: "4c1a089d-18a5-4fec-8c80-6ecfc710200e",
    latitude: 36.64151801872854,
    longitude: -93.28521859113341,
    name: "The Dutton Family Theater",
    postalCode: "65616",
    state: "Missouri",
    stateCode: "MO",
    street1: "3454 West 76 Country Boulevard",
    street2: null,
    tenantId: "pgshow",
    timezone: "America/Chicago",
    updatedAt: "2024-10-31T15:19:35.494992+00:00",
  },
};

export const faqs: FAQItem[] = [
  {
    question: "How long should I plan for the show?",
    answer:
      "The performance runs 70 minutes, making it easy to pair with dinner, sightseeing, or another Branson attraction.",
  },
  {
    question: "Can kids attend?",
    answer:
      "Absolutely. Where Jesus Walked is a family-friendly Branson show that's meaningful for children, parents, and grandparents alike.",
  },
  {
    question: "Where exactly are you located?",
    answer:
      "At the Dutton Family Theater, 3454 W. 76 Country Boulevard, Branson, Missouri.",
  },
  {
    question: "Why should I choose Where Jesus Walked?",
    answer:
      "Because it's unlike anything else in Branson — a biblical theater with 360° screens and surround sound that places you in the middle of Christ's story.",
  },
  {
    question: "What is the number one show in Branson?",
    answer:
      "Many visitors say Where Jesus Walked is the number one Christian show in Branson because of its powerful message and unique immersive format.",
  },
  {
    question: "What is Missouri best known for?",
    answer:
      "Missouri is known for live music, the Ozarks, and Branson's legendary shows. Where Jesus Walked captures the very heart of what makes Missouri special — faith, family, and unforgettable entertainment.",
  },
  {
    question: "What other things can families do in Branson?",
    answer:
      "Branson is packed with family attractions beyond theater shows — from Silver Dollar City theme park to the Branson Ferris Wheel and scenic boat tours on Table Rock Lake.",
  },
  {
    question: "Are there faith-based attractions in Branson besides this show?",
    answer:
      "Yes. Branson has a strong tradition of Christian entertainment, including gospel music shows and faith-based concerts. Where Jesus Walked is unique as the only 360° immersive Christian experience.",
  },
  {
    question: "When is the best time of year to visit Branson?",
    answer:
      "Spring and fall are the most popular, thanks to mild weather and seasonal festivals. Christmas season is also magical in Branson, with lights and special holiday performances.",
  },
  {
    question: "Do you offer discounts for groups or churches?",
    answer:
      "Yes. We welcome church groups, ministries, and tour buses with flexible seating and group rates. Contact us directly for group sales information.",
  },
];
