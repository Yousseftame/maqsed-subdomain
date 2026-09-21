"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Set to 0.5 for half speed. You can adjust between 0.1 and 1.0.
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0D2B36] via-[#111A2B] to-[#1E112A] font-cairo relative overflow-hidden items-center pt-10 text-center">
      
      {/* Logo Container */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-white rounded-[1.25rem] border-4 border-[#17C3B3] flex items-center justify-center relative z-10 px-3 py-1 overflow-hidden cursor-pointer"
      >
        <Image 
          src="/lgoogg.jpeg" 
          alt="مقصد" 
          width={200} 
          height={80} 
          className="object-cover w-auto h-20 md:h-24 scale-110"
        />
      </motion.div>

      {/* Title */}
      <h1 className="text-[46px] font-bold mt-8 mb-4 z-10 relative leading-none">
        <DiaTextReveal 
          text="منصة مقصد" 
          textColor="white" 
          colors={["#ffffff", "#ffffff", "#ffffff"]} 
        />
      </h1>
      
      {/* Subtitle */}
      <p className="text-purple-400 font-medium text-sm z-10 relative mb-8">
        خيارك الأمثل للتطوير العقاري.
      </p>

      {/* Image / Video Card */}
      <div 
        className="relative w-[94vw] max-w-[460px] aspect-[4/5.2] rounded-3xl border-[2px] border-[#17C3B3] shadow-[0_0_30px_rgba(23,195,179,0.2)] overflow-hidden z-10 group mb-10"
      >
        <video 
          ref={videoRef}
          src="/WhatsApp Video 2026-09-21 at 3.11.30 PM.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Buttons Section */}
      <div className="w-[94vw] max-w-[460px] flex flex-col gap-4 z-10 relative mb-6">
        {[
          {
            title: "الموقع الرسمي لمنصة مقصد",
            subtitle: "تصفح جميع خدماتنا وحلولنا",
            color: "#17C3B3",
            link: "https://maqsed.vercel.app/",
            icon: (
              <svg viewBox="0 0 512 512" width="28" height="28" fill="currentColor">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64h185.4c2.2 20.4 3.3 41.8 3.3 64zm28.8-64h123.1c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
              </svg>
            )
          },
          {
            title: "تحميل بروفايل الشركة",
            subtitle: "اعرف وجهتك... قبل أن تختار عقارك",
            color: "#17C3B3",
            link: "/بروفايل مقصد V2.pdf",
            isDownload: true,
            icon: (
              <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456a24 24 0 1 1 0-48 24 24 0 1 1 0 48z"/>
              </svg>
            )
          },
          {
            title: "الاتصال المباشر",
            subtitle: "تواصل مع فريقنا لخدمتك",
            color: "#17C3B3",
            link: "#",
            icon: (
              <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
            )
          },
          {
            title: "مشاركة الصفحة",
            subtitle: "شارك هذه الصفحة مع أصدقائك",
            color: "#17C3B3",
            link: "#",
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              setIsShareModalOpen(true);
            },
            icon: (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
              </svg>
            )
          },
          {
            title: "تواصل معنا عبر واتساب",
            subtitle: "دعم مباشر واستفسارات فورية",
            color: "#25D366",
            link: "#",
            icon: (
              <svg viewBox="0 0 448 512" width="30" height="30" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.7c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.6-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            )
          }
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.link !== "#" ? "_blank" : undefined}
            rel={item.link !== "#" ? "noopener noreferrer" : undefined}
            download={item.isDownload ? true : undefined}
            onClick={item.onClick}
            initial={{ opacity: 0, y: 20 }}
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
              rest: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { delay: 0.4 + (i * 0.1), type: "spring", stiffness: 300, damping: 20 }
              },
              hover: { 
                scale: 1.02, 
                transition: { type: "spring", stiffness: 400, damping: 25 }
              },
              tap: { scale: 0.98 }
            }}
            className="flex items-center justify-between w-full bg-white/5 border border-white/5 backdrop-blur-md rounded-2xl p-4 cursor-pointer relative overflow-hidden"
            dir="rtl"
          >
            {/* The Sweeping Background Fill */}
            <motion.div 
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              style={{ originX: 1, backgroundColor: item.color }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="absolute inset-0 z-0 rounded-2xl"
            />

            {/* Static Right Line */}
            <div className="absolute top-0 right-0 bottom-0 w-[4px] z-10" style={{ backgroundColor: item.color }}></div>

            {/* Right Side: Icon and Text */}
            <div className="flex items-center gap-4 z-10">
              {/* Premium Icon Container */}
              <motion.div 
                variants={{
                  rest: { 
                    backgroundColor: "rgba(0,0,0,0)", 
                    color: item.color, 
                    borderColor: "rgba(255,255,255,0.1)",
                    rotate: 0
                  },
                  hover: { 
                    backgroundColor: "#ffffff", 
                    color: item.color, // Inverts to teal icon on solid white block
                    borderColor: "rgba(255,255,255,0)",
                    rotate: -5
                  }
                }}
                className="w-[54px] h-[54px] flex shrink-0 items-center justify-center rounded-[1.1rem] border"
              >
                {item.icon}
              </motion.div>
              
              {/* Text */}
              <div className="text-right">
                <motion.h3 
                  variants={{
                    rest: { color: "#ffffff", x: 0 },
                    hover: { color: "#ffffff", x: -2 }
                  }}
                  className="font-bold text-[17px] mb-0.5"
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  variants={{
                    rest: { color: "rgba(255,255,255,0.6)", x: 0 },
                    hover: { color: "rgba(255,255,255,0.9)", x: -2 }
                  }}
                  className="text-[13px]"
                >
                  {item.subtitle}
                </motion.p>
              </div>
            </div>

            {/* Left Side: Chevron */}
            <motion.div 
              variants={{
                rest: { x: 0, color: "#17C3B3" },
                hover: { x: -8, color: "#ffffff" }
              }}
              className="mr-auto z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 rtl:rotate-0"><path d="m15 18-6-6 6-6"/></svg>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Social Media Bubbles */}
      <div className="flex justify-center items-center gap-5 z-10 relative">
        {[
          {
            name: "Snapchat",
            link: "#",
            icon: (
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                <path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"/>
              </svg>
            )
          },
          {
            name: "X",
            link: "#",
            icon: (
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
              </svg>
            )
          },
          {
            name: "Instagram",
            link: "#",
            icon: (
              <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            )
          }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
              rest: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                backgroundColor: "rgba(255,255,255,0.03)", 
                borderColor: "rgba(23,195,179,0.3)", // Subtle Teal border
                color: "#ffffff",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              },
              hover: { 
                scale: 1.1, 
                backgroundColor: "#17C3B3", // Solid Teal fill
                borderColor: "#17C3B3",
                color: "#ffffff", // Changed to white text/icon
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              },
              tap: { scale: 0.9 }
            }}
            className="w-[58px] h-[58px] rounded-full flex items-center justify-center border backdrop-blur-md shadow-lg"
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 mb-6 text-sm text-white/60 relative z-10 font-medium">
        جميع الحقوق محفوظة &copy; <span className="text-purple-400 font-bold">منصة مقصد</span> 2026
      </div>

      <AnimatePresence>
        {isShareModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#111A2B] border border-white/10 p-6 rounded-[2rem] w-full max-w-[320px] shadow-2xl flex flex-col gap-6 relative z-10"
              dir="rtl"
            >
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xl font-bold text-white">مشاركة</h3>
                <button 
                  onClick={() => setIsShareModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                  }}
                  className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-4 text-white"
                >
                  <span className={`font-bold text-[17px] ${isCopied ? "text-[#17C3B3]" : ""}`}>
                    {isCopied ? "تم النسخ!" : "نسخ الرابط"}
                  </span>
                  {isCopied ? (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#17C3B3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>

                <button 
                  onClick={() => {
                    const shareText = `منصة مقصد للتطوير العقاري\n${window.location.href}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
                    setIsShareModalOpen(false);
                  }}
                  className="flex items-center justify-between w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-colors rounded-2xl p-4 text-white"
                >
                  <span className="font-bold text-[17px] text-[#25D366]">مشاركة عبر واتساب</span>
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="#25D366">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.7c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.6-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
