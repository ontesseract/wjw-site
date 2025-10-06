import type { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function generateMetadata({
  title,
  description,
  path = "/",
  image = "/wjw-social.jpg",
  keywords = [],
  type = "website",
}: PageMetadata): Metadata {
  const baseUrl = "https://wherejesuswalked.com";
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = title.includes("Where Jesus Walked")
    ? title
    : `${title} | Where Jesus Walked - 360° Immersive Christian Production`;

  const defaultKeywords = [
    "Branson Christian theater",
    "360 immersive show",
    "Where Jesus Walked",
    "biblical theater",
    "Christian attraction Branson",
    "faith-based entertainment",
    "Jesus experience",
    "Missouri Christian show",
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "Where Jesus Walked" }],
    creator: "Where Jesus Walked",
    publisher: "Where Jesus Walked",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: "Where Jesus Walked",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Where Jesus Walked Branson Christian Theater`,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@wherejesuswalked",
      site: "@wherejesuswalked",
    },
  };
}

// Hero section content for consistent messaging
export const heroContent = {
  title: "A 360° Immersive Christian Production in Branson, MO",
  description:
    "Imagine standing on the shores of Galilee as Jesus calms the storm, or walking through the crowded streets of Jerusalem as He teaches with compassion and devotion. At Where Jesus Walked - Branson's premier immersive Christian theater - you don't just hear these stories, you're surrounded by them.",
  shortDescription:
    "Experience the life of Jesus in Branson's premier 360° immersive Christian theater. You don't just hear these stories, you're surrounded by them.",
};

// Default metadata for the home page
export const homeMetadata = generateMetadata({
  title:
    "Where Jesus Walked - 360° Immersive Christian Production in Branson, MO",
  description: heroContent.description,
  keywords: [
    "Branson shows",
    "Christian theater Branson",
    "360 degree theater",
    "immersive experience",
    "biblical stories",
    "Jesus Christ",
    "Missouri attractions",
    "family entertainment",
  ],
});
