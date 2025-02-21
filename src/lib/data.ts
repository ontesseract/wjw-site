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
}

export const theDuttonFamilyTheaterBranson: TheaterInfo = {
  name: "The Dutton Family Theater",
  phone: "417-332-2772",
  groupLink: "/group-sales",
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
    question: "What is Where Jesus Walked?",
    answer:
      "Where Jesus Walked is a 360° immersive theater experience that brings the life of Jesus Christ to vivid reality. Using state-of-the-art technology and masterful storytelling, we transport you back in time to witness key moments in Jesus' life.",
  },
  {
    question: "What is a 360° immersive theater experience?",
    answer:
      "360° immersive means there are theater screens in every direction, in front of you, to the sides, and even behind you. Some immersive experiences are designed for attendees to walk around a large room with screens on every wall. Where Jesus Walked is presented in a theater with seats and is designed for the audience to face the front screens. The side and back screens extend the viewing area to more fully immerse audiences in the experience.",
  },
  {
    question: "Where is the best place to sit?",
    answer:
      "We recommend sitting in the center of the theater or further back for the best viewing experience. This allows you to easily see the front and side screens. Like at a movie theater, you may not want to sit in the front row. ",
  },
  {
    question: "How long is the experience?",
    answer: `The entire experience lasts approximately ${showLengthMinutes} minutes. There is not an intermission.`,
  },
  {
    question: "Is there an age restriction?",
    answer:
      "No. While the experience is suitable for most ages, we recommend it for children 10 and above due to the immersive nature and some thematically intense moments relating to the life of Christ. Parental discretion is advised.",
  },
  {
    question:
      "Are there any special effects that might be concerning for those with visual sensitivities or epilepsy?",
    answer:
      "The experience includes various special effects such as lighting changes and sound effects. If you have specific concerns, please contact us for more detailed information.",
  },
  {
    question: "Is the venue wheelchair accessible?",
    answer:
      "Yes, our venue is fully wheelchair accessible. Please let us know in advance if you require wheelchair specific seating.",
  },
  {
    question: "Can I take photos or videos during the experience?",
    answer:
      "To maintain the immersive atmosphere and respect copyright laws, photography and video recording are not permitted during the experience. We offer professional photos for purchase after the show.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "There is no strict dress code, but we ask that guests dress respectfully given the sacred nature of the content.",
  },
];
