import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { num: "01", name: "Estruturas Metálicas", desc: "Construção de estruturas em ferro, asnas, pilares, pilaretes e vigas estruturais." },
  { num: "02", name: "Guardas & Corrimãos", desc: "Guardas em aço inox e vidro, corrimãos e varandins de alta resistência." },
  { num: "03", name: "Escadarias", desc: "Escadas de acesso interiores ou exteriores, suspensas ou em caracol, em ferro ou inox." },
  { num: "04", name: "Portões & Portas", desc: "Portões de garagem, de correr, batente, portadas amovíveis e portas corta-fogo." },
  { num: "05", name: "Grades & Vedações", desc: "Gradeamentos fixos e móveis, com equilíbrio entre elegância e resistência." },
  { num: "06", name: "Fachadas & Caleiras", desc: "Fachadas chapeadas em aço inox, grelhas, suspensões, caleiras e tubagens." },
  { num: "07", name: "Objetos Decorativos", desc: "Fabrico de objetos decorativos em inox, com estética, proteção e durabilidade." },
  { num: "08", name: "Fabrico & Reparação", desc: "Preparação, montagem e reparação de todos os tipos de estruturas metálicas." },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextService = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // The Slash animation variants
  const slashVariants = {
    initial: (dir: number) => ({
      clipPath: dir > 0 
        ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" // start from right closed
        : "polygon(0 0, 0 0, 0 100%, 0 100%)", // start from left closed
      opacity: 0,
      scale: 0.95,
      filter: "brightness(2) contrast(1.5)"
    }),
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // fully open
      opacity: 1,
      scale: 1,
      filter: "brightness(1) contrast(1)",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] as any,
      }
    },
    exit: (dir: number) => ({
      clipPath: dir > 0
        ? "polygon(0 0, 0 0, -20% 100%, -20% 100%)" // slash left
        : "polygon(120% 0, 120% 0, 100% 100%, 100% 100%)", // slash right
      opacity: 0,
      scale: 1.05,
      filter: "brightness(0.5)",
      transition: { 
        duration: 0.6, 
        ease: [0.76, 0, 0.24, 1] as any 
      }
    })
  };

  return (
    <section id="servicos" className="py-[120px] bg-bg-base overflow-hidden relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-[70px]"
        >
          <div className="section-tag mx-auto justify-center">Os Nossos Serviços</div>
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[1] tracking-[0.02em]">
            Os Nossos <span className="text-accent italic">Serviços</span>
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6 mb-6"></div>
          <p className="text-[#e8e6e1]/50 text-[0.92rem] leading-[1.8] max-w-[600px] mx-auto">
            Oferecemos uma vasta gama de serviços em serralharia e trabalhamos com materiais de alta qualidade, garantindo durabilidade, segurança e design moderno em todas as nossas peças.
          </p>
        </motion.div>

        {/* Book / Interactive Panel */}
        <div className="relative max-w-[800px] mx-auto min-h-[400px]">
          
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slashVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full bg-bg-sec border border-white/[0.06] rounded-xl p-10 md:p-16 relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              {/* Slash overlay effect that flashes quickly during transition */}
              <motion.div 
                initial={{ opacity: 1, x: direction > 0 ? "100%" : "-100%", skewX: -20 }}
                animate={{ opacity: 0, x: direction > 0 ? "-100%" : "100%", skewX: -20 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none z-0"
              />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                
                {/* Left side: Big Number */}
                <div className="flex-shrink-0">
                  <span className="font-display text-[8rem] md:text-[12rem] leading-none text-white/5 font-bold tracking-tighter select-none">
                    {services[activeIndex].num}
                  </span>
                </div>

                {/* Right side: Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-accent"></div>
                    <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold">Serviço {services[activeIndex].num}</span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-5xl tracking-[0.02em] mb-6 text-white leading-[1.1]">
                    {services[activeIndex].name}
                  </h3>
                  
                  <p className="text-[1.1rem] md:text-[1.2rem] text-dim leading-[1.8] max-w-[400px]">
                    {services[activeIndex].desc}
                  </p>
                </div>

              </div>
              
              {/* Progress Bar inside card */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-accent"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 relative z-20">
            <button 
              onClick={prevService}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
              aria-label="Serviço Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/50"}`}
                  aria-label={`Ir para serviço ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextService}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm"
              aria-label="Próximo Serviço"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <ShimmerButton
            href="#contacto"
            background="#c8a96e"
            shimmerColor="#ffffff"
            className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm px-10 py-4 shadow-[0_0_40px_rgba(200,169,110,0.5)] hover:-translate-y-1 flex items-center gap-2"
          >
            Pedir Orçamento
            <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
