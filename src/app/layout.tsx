import type { Metadata } from "next";
import { Cairo, Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
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
      className={cn("h-full", "antialiased", cairo.variable, manrope.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-cairo bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
