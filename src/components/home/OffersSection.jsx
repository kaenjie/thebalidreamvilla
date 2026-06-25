import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { offersData } from "@/data/homeData";

export default function OffersSection() {
  const gridStyles = [
    "lg:col-span-7 h-[400px] lg:h-[480px]",
    "lg:col-span-5 h-[400px] lg:h-[480px]",
    "lg:col-span-4 h-[400px] lg:h-[550px]",
    "lg:col-span-8 h-[400px] lg:h-[550px]",
    "lg:col-span-6 h-[400px] lg:h-[450px]",
    "lg:col-span-6 h-[400px] lg:h-[450px]",
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-brand-gold/10 border-t border-stone-200/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-5 mb-10 md:mb-12">
          <span className="text-[10px] tracking-[0.4em] text-brand-gold uppercase font-bold block">
            Curated Privileges
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-stone-900 tracking-widest font-light uppercase">
            Special Offers
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {offersData.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className={`relative ${gridStyles[idx] || "lg:col-span-4"} group w-full overflow-hidden bg-stone-100 border border-stone-200/40 shadow-sm`}
            >
              {/* Gambar Latar */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-103 transition-transform duration-[1.2s] ease-out"
                sizes="(max-w-1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/20 opacity-85 group-hover:opacity-95 transition-opacity duration-500 z-10" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between items-start z-20 text-white">
                <span className="text-[9px] tracking-[0.2em] text-brand-gold font-bold uppercase bg-white/10 backdrop-blur-md py-1 px-3 border border-white/10">
                  {item.tag || "Exclusive Package"}
                </span>

                <div className="w-full space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-widest text-stone-300 uppercase block font-light">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl tracking-wide uppercase font-light text-white leading-tight max-w-xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out space-y-4 border-t border-white/10 pt-3">
                    <p className="text-stone-300 text-xs font-light leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                    <Link
                      href="/offers"
                      className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase hover:text-white transition-colors"
                    >
                      <span>View Experience</span>
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
