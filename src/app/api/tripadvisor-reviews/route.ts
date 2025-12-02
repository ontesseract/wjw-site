import { NextResponse } from "next/server";

interface TripAdvisorReview {
  rating: number;
  text: string;
  author: string;
  date: string;
}

// Real reviews from the TripAdvisor page (manually curated)
const REAL_REVIEWS: TripAdvisorReview[] = [
  {
    rating: 5,
    text: "It was so neat to see the actual pictures of the places where Jesus actually walked! It made the Bible come to life and brought tears to my eyes! It is a must see for sure!! Don’t miss out on the experience!!!",
    author: "Erica M.",
    date: "2025",
  },
  {
    rating: 5,
    text: "This place was a surprise, I did not expect a 360 view of the life of Jesus. It is not expensive and a must see if you are in Branson. After watching it I told my wife that I wanted to go and see every temple that was in she show.",
    author: "Ronnie S.",
    date: "2024",
  },
  {
    rating: 5,
    text: "'Where Jesus Walked' was Amazing! The photography was beautiful and the video made you really feel like you were there, the narrator did an amazing job of detailing everything. What a cool experience to see 'Where Jesus Walked'!! Also the staff at the Dutton theater were so kind & welcoming!",
    author: "Amanda M.",
    date: "2025",
  },
];

export async function GET() {
  return NextResponse.json({
    reviews: REAL_REVIEWS,
    success: true,
    source: "manual_curation",
  });
}
