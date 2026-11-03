"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThanksPage() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#F9FAFB] px-4 py-12 font-ibm-plex-sans-arabic text-center overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-[#17C3B3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#6A2B92]/10 blur-3xl" />

      {/* Main Thank You Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative z-10 flex w-full max-w-[440px] flex-col items-center rounded-[2rem] border border-gray-100 bg-white p-7 shadow-xl sm:p-10"
      >
        {/* Logo */}
        <Link
          href="/"
          className="mb-6 flex items-center justify-center rounded-[1.25rem] bg-white px-3 py-1 shadow-sm border border-gray-100 transition-transform hover:scale-105"
        >
          <img
            src="/lgoogg.jpeg"
            alt="مقصد"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Checkmark Icon Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.15 }}
          className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#17C3B3]/10 text-[#17C3B3] ring-8 ring-[#17C3B3]/5"
        >
          <svg
            viewBox="0 0 24 24"
            width="38"
            height="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>

        {/* Heading & Copy */}
        <span className="mb-1 text-xs font-bold uppercase tracking-wider text-[#17C3B3]">
          تم التسجيل بنجاح
        </span>
        <h1 className="mb-3 text-2xl font-black tracking-tight text-[#6A2B92] sm:text-3xl">
          شكراً لاهتمامك!
        </h1>
        <p className="mb-2 text-base font-bold text-[#0a0f1d]">
          تم استلام بياناتك بنجاح
        </p>
        <p className="mb-8 max-w-[320px] text-sm font-medium leading-relaxed text-[#8c8c8c]">
          سيتواصل معك فريق مقصد في أقرب وقت لإطلاعك على أحدث الفرص والعروض المناسبة.
        </p>

        {/* Action Buttons */}
        <div className="flex w-full flex-col gap-3">
          <Link
            href="/"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17C3B3] px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#14a89a] hover:shadow-md active:scale-[0.98]"
          >
            <span>العودة للصفحة الرئيسية</span>
          </Link>

          <a
            href="https://maqsed.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#6A2B92]"
          >
            <span>زيارة موقع مقصد الرئيسي</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rtl:rotate-180"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Footer copyright */}
      <p className="mt-8 text-xs font-medium text-[#8c8c8c]">
        جميع الحقوق محفوظة &copy;{" "}
        <span className="font-bold text-[#6A2B92]">منصة مقصد</span>{" "}
        {new Date().getFullYear()}
      </p>
    </main>
  );
}
