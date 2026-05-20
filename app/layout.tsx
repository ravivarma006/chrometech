import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001d39",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chrome-tech.com"),
  title: {
    default:
      "Chrome Tech LLC | Infrastructure, Deployment & Enterprise Technology Support",
    template: "%s | Chrome Tech LLC",
  },
  description:
    "Chrome Tech LLC provides data center support, smart hands services, network infrastructure deployment, structured cabling, workforce support, and enterprise technology services across Texas and beyond.",
  keywords: [
    "data center support",
    "smart hands services",
    "network infrastructure deployment",
    "structured cabling",
    "IT field services",
    "enterprise technology support",
    "Texas IT services",
    "rack and stack",
    "IMAC services",
    "fiber installation",
  ],
  authors: [{ name: "Chrome Tech LLC", url: "https://chrome-tech.com" }],
  creator: "Chrome Tech LLC",
  publisher: "Chrome Tech LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chrome-tech.com",
    siteName: "Chrome Tech LLC",
    title:
      "Chrome Tech LLC | Infrastructure, Deployment & Enterprise Technology Support",
    description:
      "Responsive data center support, smart hands services, network infrastructure deployment, structured cabling, and enterprise field operations across Texas and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chrome Tech LLC — Infrastructure & Enterprise Technology Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chrome Tech LLC | Infrastructure, Deployment & Enterprise Technology Support",
    description:
      "Responsive data center support, smart hands services, network infrastructure, structured cabling, and enterprise field operations across Texas.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chrome-tech.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://chrome-tech.com/#business",
      name: "Chrome Tech LLC",
      description:
        "Chrome Tech LLC provides data center support, smart hands services, network infrastructure deployment, structured cabling, workforce support, and enterprise technology services across Texas and beyond.",
      url: "https://chrome-tech.com",
      telephone: "+15127370592",
      email: "info@chrome-tech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "601 Quail Valley Drive",
        addressLocality: "Georgetown",
        addressRegion: "TX",
        postalCode: "78626",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/chrometechllc",
        "https://www.instagram.com/chrometechllc",
        "https://x.com/ChromeTechllc",
        "https://www.linkedin.com/company/109216078",
        "https://www.youtube.com/channel/UCPcWz-3G7Omx1hvjNbGdm5A",
      ],
      areaServed: [
        { "@type": "State", name: "Texas" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "Data Center Infrastructure Support",
        "Network Infrastructure Deployment",
        "Structured Cabling & Fiber Support",
        "Smart Hands & Field Services",
        "Workforce & Deployment Support",
        "Technology & Managed Services",
      ],
      logo: {
        "@type": "ImageObject",
        url: "https://chrome-tech.com/wp-content/uploads/2025/12/cropped-20251216_185708.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://chrome-tech.com/#website",
      url: "https://chrome-tech.com",
      name: "Chrome Tech LLC",
      publisher: { "@id": "https://chrome-tech.com/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Preconnect to image CDNs for faster LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://chrome-tech.com" />
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
