import { ShimmerButton } from "../ui/shimmer-button";
import { BlurIn } from "../ui/blur-in";
import { motion } from "framer-motion";
import { homeSeo } from "../../lib/seo-data";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-bg-base">
      <motion.div
        initial={{ scale: 1.02, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.6)_0%,rgba(10,10,10,0.85)_50%,rgba(10,10,10,1)_100%)] z-10" />
        <video
          src="/videos/hero_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover animate-img-ken"
          aria-label="Oficina de serralharia em inox em Guimarães"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="max-w-[760px]"
        >
          <h1 className="m-0">
            <BlurIn
              word={homeSeo.h1Line1}
              as="span"
              className="font-display text-[clamp(2.2rem,6.5vw,5rem)] leading-[1.02] tracking-[0.01em] uppercase text-white m-0 text-left block"
            />
            <BlurIn
              word={homeSeo.h1Line2}
              as="span"
              className="font-display text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.05] tracking-[0.04em] uppercase text-accent m-0 text-left mt-3 block"
            />
          </h1>

          <p className="text-[0.65rem] tracking-[0.25em] text-accent font-bold uppercase mt-6 mb-4">
            Guimarães · Braga · Porto · Famalicão · Maia · Minho
          </p>
          <p className="mb-10 text-[0.95rem] text-[#e8e6e1]/70 leading-[1.8] max-w-[560px]">
            {homeSeo.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <ShimmerButton
              href="#contacto"
              shimmerSize="0.1em"
              shimmerColor="#ffffff"
              shimmerDuration="2.5s"
              background="#c8a96e"
              className="text-bg-base text-xs font-bold uppercase tracking-widest px-8 py-3.5 hover:-translate-y-0.5 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(200,169,110,0.5)]"
            >
              Pedir Orçamento Grátis
              <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ShimmerButton>

            <a href="#obras" className="btn btn-ghost py-3.5">
              Ver Portfólio
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
