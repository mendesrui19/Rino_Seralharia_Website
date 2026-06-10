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
    { src: "/images/obra_nova_1.jpg", alt: "Projeto Inox", label: "Portão Inox + Madeira" },
    { src: "/images/obra_nova_2.jpg", alt: "Projeto Inox", label: "Portão com Parede Xisto" },
    { src: "/images/obra_nova_3.jpg", alt: "Projeto Inox", label: "Guarda em Vidro" },
    { src: "/images/obra_nova_4.jpg", alt: "Projeto Inox", label: "Guarda Varanda Interior" },
    { src: "/images/obra_nova_5.jpg", alt: "Projeto Inox", label: "Fonte / Espelho d'Água Inox" }
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
          <div>
            <div className="section-tag">Portfólio</div>
            <h2 className="section-h2">As Nossas<br/><span className="text-accent">Obras</span></h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <ShimmerButton 
              onClick={() => setIsGalleryOpen(true)}
              background="#c8a96e"
              shimmerColor="#ffffff"
              className="text-bg-base font-bold tracking-[0.16em] uppercase text-[0.65rem] px-6 py-3 shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:-translate-y-1"
            >
              VER PORTEFÓLIO COMPLETO
            </ShimmerButton>
            <p className="text-[0.82rem] text-dim text-right max-w-[260px]">
              Todas as fotos correspondem a trabalhos reais realizados pela nossa empresa.
            </p>
          </div>
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
            className="fixed inset-0 z-[500] bg-[#F5F2EB] overflow-y-auto text-[#2C2C2C]"
          >
            <div className="sticky top-0 bg-[#F5F2EB]/90 backdrop-blur-md z-10 px-8 py-6 flex justify-between items-center border-b border-[#2C2C2C]/5">
              <button 
                onClick={() => setIsGalleryOpen(false)}
                className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-[#8C8C8C] hover:text-[#2C2C2C] transition-colors font-semibold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                VOLTAR
              </button>
              <div className="font-display tracking-[0.2em] text-sm font-bold text-[#c8a96e]">
                SERRALHARIA <span className="text-[#2C2C2C]">RINOS</span>
              </div>
            </div>
            
            <div className="container max-w-[1000px] mx-auto px-6 pt-20 pb-16 text-center">
              <div className="text-[#c8a96e] text-[0.75rem] uppercase tracking-[0.3em] font-semibold mb-6">
                Galeria Completa
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-[#2C2C2C] mb-8">
                Os Nossos <span className="text-[#c8a96e] italic">Trabalhos</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#c8a96e] mx-auto mb-8"></div>
              <p className="text-[#666666] max-w-[500px] mx-auto text-[1.1rem] leading-relaxed">
                Uma coleção completa de projetos que representam o nosso ofício e dedicação.
              </p>
            </div>

            <div className="container max-w-[1400px] mx-auto px-6 pb-24">
              <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                {allImages.map((img, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={i} 
                    className="relative overflow-hidden group rounded-[2px] break-inside-avoid"
                  >
                    <img 
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
