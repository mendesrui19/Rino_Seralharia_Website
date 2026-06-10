import { useState, useEffect } from "react";
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

// Number of cards visible in the stack at once
const VISIBLE_CARDS = 3;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
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

        {/* 3D Card Stack */}
        <div 
          className="relative max-w-[800px] mx-auto min-h-[420px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {services.map((service, index) => {
              // Calculate distance from active index
              let offset = (index - activeIndex + services.length) % services.length;
              
              // Only render the visible cards to save performance
              if (offset > VISIBLE_CARDS && offset !== services.length - 1) return null;
              
              // If it's the last card animating out, it might temporarily have offset like services.length - 1
              // We treat it as offset -1 for animation purposes if needed, but framer-motion AnimatePresence handles exits
              
              const isFront = offset === 0;

              return (
                <motion.div
                  key={service.num}
                  layout
                  initial={{ 
                    opacity: 0, 
                    y: 100, 
                    scale: 0.9 
                  }}
                  animate={{ 
                    opacity: offset >= VISIBLE_CARDS ? 0 : 1 - (offset * 0.25),
                    y: offset * 25, // push down slightly
                    scale: 1 - (offset * 0.05), // shrink slightly
                    zIndex: services.length - offset,
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -100, // float away upwards
                    scale: 1.1,
                    filter: "blur(10px)",
                    transition: { duration: 0.4 }
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.32, 0.72, 0, 1] 
                  }}
                  className={`absolute w-full bg-bg-sec border ${isFront ? 'border-accent/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' : 'border-white/[0.06] shadow-xl'} rounded-xl p-10 md:p-16 overflow-hidden`}
                >
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                    
                    {/* Left side: Big Number */}
                    <div className="flex-shrink-0">
                      <span className={`font-display text-[8rem] md:text-[12rem] leading-none font-bold tracking-tighter select-none transition-colors duration-500 ${isFront ? 'text-accent/10' : 'text-white/5'}`}>
                        {service.num}
                      </span>
                    </div>

                    {/* Right side: Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`h-[2px] w-12 ${isFront ? 'bg-accent' : 'bg-white/20'}`}></div>
                        <span className={`${isFront ? 'text-accent' : 'text-white/40'} text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-500`}>
                          Serviço {service.num}
                        </span>
                      </div>
                      
                      <h3 className={`font-display text-3xl md:text-5xl tracking-[0.02em] mb-6 leading-[1.1] transition-colors duration-500 ${isFront ? 'text-white' : 'text-white/60'}`}>
                        {service.name}
                      </h3>
                      
                      <p className={`text-[1.1rem] md:text-[1.2rem] leading-[1.8] max-w-[400px] transition-colors duration-500 ${isFront ? 'text-dim' : 'text-white/30'}`}>
                        {service.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center mt-12 relative z-20">
          
          <div className="flex items-center gap-8 mb-6">
            <button 
              onClick={prevService}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              aria-label="Serviço Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${idx === activeIndex ? "bg-accent scale-150" : "bg-white/20 hover:bg-white/50"}`}
                  aria-label={`Ir para serviço ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextService}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              aria-label="Próximo Serviço"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-white/20">
            {isHovered ? "Pausado para leitura" : "Passagem Automática"}
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
