import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { homeMetadata } from "@/lib/metadata";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...homeMetadata,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-P3MBCZRQ";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Where Jesus Walked" />
        <meta name="application-name" content="Where Jesus Walked" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TheaterEvent",
              name: "Where Jesus Walked",
              description:
                "A 360° Immersive Christian Production in Branson, MO. Experience the life of Jesus in a groundbreaking immersive theater production.",
              image: "https://wherejesuswalked.com/wjw-social.jpg",
              url: "https://wherejesuswalked.com",
              location: {
                "@type": "Place",
                name: "Where Jesus Walked Theater",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "76 Country Blvd",
                  addressLocality: "Branson",
                  addressRegion: "MO",
                  addressCountry: "US",
                },
              },
              offers: {
                "@type": "Offer",
                url: "https://wherejesuswalked.com/tickets",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              organizer: {
                "@type": "Organization",
                name: "Where Jesus Walked",
                url: "https://wherejesuswalked.com",
              },
            }),
          }}
        />
<<<<<<< HEAD
=======

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P3MBCZRQ');
            `,
          }}
        />
        {/* End Google Tag Manager */}
<<<<<<< HEAD
>>>>>>> 4e9d037e9d9fd4845bd9918cdfbda40f35ce73f1
=======

        {/* Google adwords tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17633229028"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17633229028');
            `,
          }}
        />
        {/* End Google tag */}
>>>>>>> bef060bfddcfddf17917f29029bda241759140d9
      </head>
      <body className={cn(inter.className)}>
        <GoogleTagManagerNoScript gtmId={gtmId} />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex flex-col flex-grow bg-background">
            {children}
          </main>
        </ThemeProvider>
        
        <GoogleTagManager gtmId={gtmId} />
      </body>
    </html>
  );
}
