import type { Metadata } from "next";
import { Manrope, Geist, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://maqsedsub.web.app"
).replace(/\/$/, "");
const OG_IMAGE_URL = `${SITE_URL}/linksocial.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "مقصد | MAQSED",
  description:
    "نقرأ السوق، نفهم مقصد العميل، ونُبرز قيمة المشروع، للعملاء والمستثمرين والمطورين. مقصد للتسويق والاستشارات العقارية.",
  keywords: [
    "مقصد",
    "تطوير عقاري",
    "MAQSED",
    "Real Estate Development",
    "عقارات",
    "تسويق عقاري",
    "استشارات عقارية",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "مقصد | MAQSED",
    title: "مقصد | MAQSED",
    description:
      "نقرأ السوق، نفهم مقصد العميل، ونُبرز قيمة المشروع، للعملاء والمستثمرين والمطورين. مقصد للتسويق والاستشارات العقارية.",
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 818,
        height: 500,
        type: "image/jpeg",
        alt: "مقصد | MAQSED",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مقصد | MAQSED",
    description:
      "نقرأ السوق، نفهم مقصد العميل، ونُبرز قيمة المشروع، للعملاء والمستثمرين والمطورين. مقصد للتسويق والاستشارات العقارية.",
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cn("h-full", "antialiased", ibmPlexSansArabic.variable, manrope.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-ibm-plex-sans-arabic bg-background text-foreground" suppressHydrationWarning>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              fontFamily: "var(--font-ibm-plex-sans-arabic), Arial, sans-serif",
              borderRadius: "14px",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: 600,
            },
            success: {
              style: {
                background: "#ffffff",
                color: "#0a0f1d",
                border: "1px solid #e5e7eb",
              },
              iconTheme: {
                primary: "#17C3B3",
                secondary: "#ffffff",
              },
            },
            error: {
              style: {
                background: "#ffffff",
                color: "#0a0f1d",
                border: "1px solid #fecaca",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
