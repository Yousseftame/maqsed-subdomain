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

export const metadata: Metadata = {
  title: "مقصد | MAQSED",
  description: "منصة مقصد: خيارك الأمثل للتطوير العقاري! مع مقصد.. ننمو معاً",
  keywords: ["مقصد", "تطوير عقاري", "MAQSED", "Real Estate Development", "عقارات"],
  openGraph: {
    title: "مقصد | MAQSED",
    description: "منصة مقصد: خيارك الأمثل للتطوير العقاري! مع مقصد.. ننمو معاً",
    type: "website",
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
