import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '../ui/shimmer-button';

export function Obras() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const featuredImages = [
    { src: "/images/12719a8da1442e59f47f50312a47a651_fit.jpg", alt: "Portão inox vertical", label: "Portão Inox" },
    { src: "/images/1e2084ddc03398174fd039ad87934209_fit.jpg", alt: "Varanda inox com vidro", label: "Varanda Inox + Vidro" },
    { src: "/images/672d222da7d47f4bbb3b6e474ada624c_920x518_fit23e4.jpg", alt: "Portão correr inox", label: "Portão Deslizante Inox" },
    { src: "/images/94d1dbbef4c372ae14503f4559a4c15e_920x518_fit23e4.jpg", alt: "Guarda piscina inox + vidro", label: "Guarda Piscina Inox" },
    { src: "/images/1f7bccac3073a67cc65a8192dd648f95_920x518_fitb059.jpg", alt: "Portão inox com painéis", label: "Portão Inox + Painel" },
  ];

  const allImages = [
    ...featuredImages,
    { src: "/images/89bce939c27296f3f5c9af907cde2998_fit.jpg", alt: "Corrimão", label: "Corrimão Inox" },
    { src: "/images/96b85fc5149c692df658b14e8e3590bf_fit.jpg", alt: "Escadaria", label: "Estruturas" },
    { src: "/images/23e710ebc18b2db42414f0c4805a3217_493x277_0x1_493x278_cropb059.jpg", alt: "Trabalho Inox", label: "Trabalho em Inox" },
    { src: "/images/754a7209afa677072b963f9fa385f301_fit.jpg", alt: "Detalhe", label: "Detalhe Inox" },
    { src: "/images/85dc00a86ed4a46df517c3ae0e2b94fd_590x234_0x0_590x237_cropb059.jpg", alt: "Obra", label: "Projeto Concluído" },
    { src: "/images/96e228a03a061457d15673e6198d0afa_493x277_0x1_493x278_cropb059.jpg", alt: "Obra", label: "Projeto Concluído" },
    { src: "/images/f78f8c3e67b7ddb43f6e3547bb632c21_493x277_0x1_493x278_cropb059.jpg", alt: "Obra", label: "Projeto Concluído" }
  ];

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isGalleryOpen]);

  return (
    <section id="obras" className="py-[120px] bg-bg-base border-t border-white/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-[60px] gap-6"
        >
          <div className="flex flex-col items-start gap-6">
            <div>
              <div className="section-tag">Portfólio</div>
              <h2 className="section-h2">As Nossas<br/><span className="text-accent">Obras</span></h2>
            </div>
            <ShimmerButton 
              onClick={() => setIsGalleryOpen(true)}
              background="#c8a96e"
              shimmerColor="#ffffff"
              className="text-bg-base font-bold tracking-[0.16em] uppercase text-[0.65rem] px-6 py-3 shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-1"
            >
              VER PORTEFÓLIO COMPLETO
            </ShimmerButton>
          </div>
          <p className="text-[0.82rem] text-dim text-right max-w-[260px]">
            Todas as fotos correspondem a trabalhos reais realizados pela nossa empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[300px_300px] gap-[15px] mb-12">
          {featuredImages.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden group bg-bg-ter rounded-[2px] ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img 
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-display tracking-[0.06em] text-white text-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <ShimmerButton 
            onClick={() => setIsGalleryOpen(true)}
            background="#c8a96e"
            shimmerColor="#ffffff"
            className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm px-10 py-4 shadow-[0_0_40px_rgba(200,169,110,0.5)] hover:-translate-y-1"
          >
            VER O PORTEFÓLIO COMPLETO
          </ShimmerButton>
        </div>
      </div>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-[#050505] overflow-y-auto"
          >
            <div className="sticky top-0 bg-[#050505]/90 backdrop-blur-md z-10 p-6 flex justify-between items-center border-b border-white/5">
              <div className="font-display text-2xl">Catálogo Completo</div>
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent hover:text-bg-base transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="container max-w-[1200px] mx-auto px-6 py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {allImages.map((img, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="relative overflow-hidden group bg-bg-ter rounded-[2px] aspect-square"
                  >
                    <img 
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="font-display tracking-[0.06em] text-white text-md">
                        {img.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
