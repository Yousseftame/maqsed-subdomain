"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DirectContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DirectContactModal({ open, onClose }: DirectContactModalProps) {
  const [isCopied, setIsCopied] = useState(false);
  const phoneNumber = "0556427066";
  const displayPhone = "055 642 7066";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-[#0a0f1d]/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative z-10 flex w-full max-w-[360px] flex-col overflow-hidden rounded-t-[2rem] border border-gray-200 bg-white shadow-2xl sm:rounded-[2rem]"
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div className="flex flex-col items-center p-6 text-center pt-8">
              <button
                type="button"
                onClick={onClose}
                className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-[#8c8c8c] transition-colors hover:bg-[#F4F4F4] hover:text-[#0a0f1d]"
                aria-label="إغلاق"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#17C3B3]/10 text-[#17C3B3]">
                <svg viewBox="0 0 512 512" width="40" height="40" fill="currentColor">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
              </div>
              
              <h3 id="contact-modal-title" className="text-xl font-bold tracking-tight text-[#6A2B92] mb-1">
                الاتصال المباشر
              </h3>
              <p className="text-sm font-medium leading-snug text-[#8c8c8c] mb-6">
                تواصل مع فريقنا لخدمتك في أي وقت
              </p>

              <div className="w-full flex flex-col gap-3 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17C3B3] px-6 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#13a89a] hover:shadow-lg hover:shadow-[#17C3B3]/25 active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  اتصل الآن: <span dir="ltr">{displayPhone}</span>
                </a>

                <button
                  onClick={handleCopy}
                  className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 px-6 text-[15px] font-bold transition-all duration-300 active:scale-[0.98] ${
                    isCopied 
                      ? "border-[#17C3B3] bg-[#17C3B3]/5 text-[#17C3B3]" 
                      : "border-gray-200 bg-white text-[#0a0f1d] hover:border-[#17C3B3] hover:text-[#17C3B3]"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      تم النسخ!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      نسخ الرقم
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
