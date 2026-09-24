"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { interestRequestsService } from "@/lib/firebase/interest-requests.service";

type InterestListModalProps = {
  open: boolean;
  onClose: () => void;
};

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

const inputClass =
  "w-full rounded-[16px] bg-[#F4F4F4] px-4 text-sm font-medium text-[#0a0f1d] outline-none transition-colors placeholder:text-[#8c8c8c] focus:bg-[#EAEAEA]";

const fieldInputClass = `${inputClass} h-11`;
const textareaClass = `${inputClass} min-h-[72px] resize-none py-2.5 leading-relaxed sm:min-h-[80px]`;

export function InterestListModal({ open, onClose }: InterestListModalProps) {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setForm(initialForm);
    setIsSubmitting(false);
    setIsSuccess(false);
    setError("");
  }, [open]);

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

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (error) setError("");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const fullName = form.fullName.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!fullName || !phone) {
      setError("يرجى تعبئة الاسم ورقم الجوال");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await interestRequestsService.addInterestRequest({
        fullName,
        phone,
        email,
        message,
      });
      setIsSuccess(true);
      setForm(initialForm);
      toast.success("تم تسجيل اهتمامك بنجاح");
    } catch (err) {
      console.error("Error submitting interest request:", err);
      setError("حدث خطأ، حاول مرة أخرى");
      toast.error("تعذر إرسال الطلب، حاول مرة أخرى");
    } finally {
      setIsSubmitting(false);
    }
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
            className="relative z-10 flex w-full max-w-[420px] flex-col overflow-hidden rounded-t-[2rem] border border-gray-200 bg-white shadow-2xl sm:rounded-[2rem]"
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="interest-list-title"
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-100 px-5 pb-3 pt-5 sm:px-6">
              <div className="min-w-0 flex-1 text-right">
                <p className="mb-0.5 text-xs font-semibold text-[#17C3B3]">
                  انضم إلينا
                </p>
                <h3
                  id="interest-list-title"
                  className="text-lg font-bold tracking-tight text-[#6A2B92] sm:text-xl"
                >
                  قائمة الاهتمام
                </h3>
                <p className="mt-1 text-sm font-medium leading-snug text-[#8c8c8c]">
                  سجّل بياناتك وسنتواصل معك بأقرب وقت
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#8c8c8c] transition-colors hover:bg-[#F4F4F4] hover:text-[#0a0f1d]"
                aria-label="إغلاق"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="px-5 py-4 sm:px-6 sm:pb-5">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#17C3B3]/10 text-[#17C3B3]">
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#0a0f1d]">
                    تم التسجيل بنجاح
                  </h4>
                  <p className="mt-2 max-w-[260px] text-sm font-medium leading-relaxed text-[#8c8c8c]">
                    شكراً لاهتمامك. فريق مقصد سيتواصل معك قريباً.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#17C3B3] px-6 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:text-[#17C3B3] hover:ring-1 hover:ring-[#17C3B3]/15 active:scale-[0.98]"
                  >
                    حسناً
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-3 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
                  <label className="block text-right">
                    <span className="mb-1.5 block text-sm font-bold text-[#0a0f1d]">
                      الاسم الكامل
                    </span>
                    <input
                      required
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={fieldInputClass}
                      placeholder="أدخل اسمك الكامل"
                      disabled={isSubmitting}
                    />
                  </label>

                  <label className="block text-right">
                    <span className="mb-1.5 block text-sm font-bold text-[#0a0f1d]">
                      رقم الجوال
                    </span>
                    <input
                      required
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) =>
                        update("phone", e.target.value.replace(/[^\d+]/g, ""))
                      }
                      className={`${fieldInputClass} text-left`}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                      disabled={isSubmitting}
                    />
                  </label>

                  <label className="block text-right">
                    <span className="mb-1.5 block text-sm font-bold text-[#0a0f1d]">
                      البريد الإلكتروني
                      <span className="ms-1 font-medium text-[#8c8c8c]">
                        (اختياري)
                      </span>
                    </span>
                    <input
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={`${fieldInputClass} text-left`}
                      placeholder="name@example.com"
                      dir="ltr"
                      disabled={isSubmitting}
                    />
                  </label>

                  <label className="block text-right">
                    <span className="mb-1.5 block text-sm font-bold text-[#0a0f1d]">
                      الرسالة
                      <span className="ms-1 font-medium text-[#8c8c8c]">
                        (اختياري)
                      </span>
                    </span>
                    <textarea
                      rows={2}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={textareaClass}
                      placeholder="أخبرنا بما تبحث عنه أو أي ملاحظات..."
                      disabled={isSubmitting}
                    />
                  </label>

                  {error ? (
                    <p className="text-sm font-semibold text-red-500">{error}</p>
                  ) : null}

                  <p className="text-xs font-medium leading-relaxed text-[#8c8c8c]">
                    بإرسال البيانات، توافق على تواصل فريق مقصد معك بخصوص الفرص
                    والعروض المناسبة.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-0.5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#17C3B3] px-6 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:text-[#17C3B3] hover:ring-1 hover:ring-[#17C3B3]/15 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      "سجّل اهتمامك"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
