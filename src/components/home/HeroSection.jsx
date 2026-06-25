"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlidesData } from "@/data/homeData";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlidesData.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (idx) => {
    setCurrent(idx);
    resetTimer();
  };

  return (
    <section className="relative h-[60vh] md:h-screen w-full overflow-hidden bg-stone-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlidesData[current].image}
            alt="The Bali Dream Villa Resort"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-20 right-6 md:right-16 z-10 text-right max-w-xl space-y-3 text-white">
        <span className="text-[10px] md:text-xs tracking-[0.4em] text-brand-gold uppercase font-bold block animate-[fadeIn_1s_ease-out]">
          Welcome to Paradise
        </span>

        <h1 className="font-serif text-xl sm:text-2xl md:text-4xl tracking-widest leading-tight uppercase text-white animate-[fadeIn_1.2s_ease-out]">
          Luxury & Authentic Style <br />
          <span className="text-brand-gold italic font-normal tracking-normal capitalize block">
            Villas in Seminyak
          </span>
        </h1>

        <div className="w-12 h-[1px] bg-brand-gold ml-auto mt-2 animate-[fadeIn_1.4s_ease-out]" />
      </div>

      {/* Slider Indicator */}
      <div className="absolute bottom-10 left-6 md:left-16 z-20 flex items-center space-x-3">
        {heroSlidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className="py-3 cursor-pointer group focus:outline-none"
          >
            <div
              className={`h-[2px] transition-all duration-500 rounded-none group-hover:bg-brand-gold ${
                idx === current ? "w-8 bg-brand-gold" : "w-3 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
