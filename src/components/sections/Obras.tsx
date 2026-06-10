import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShimmerButton } from '../ui/shimmer-button';

export function Obras() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredImages = [
    { src: "/images/12719a8da1442e59f47f50312a47a651_fit.jpg", alt: "Portão inox vertical", label: "Portão Inox" },
    { src: "/images/1e2084ddc03398174fd039ad87934209_fit.jpg", alt: "Varanda inox com vidro", label: "Varanda Inox + Vidro" },
    { src: "/images/672d222da7d47f4bbb3b6e474ada624c_920x518_fit23e4.jpg", alt: "Portão correr inox", label: "Portão Deslizante Inox" },
    { src: "/images/94d1dbbef4c372ae14503f4559a4c15e_920x518_fit23e4.jpg", alt: "Guarda piscina inox + vidro", label: "Guarda Piscina Inox" },
    { src: "/images/1f7bccac3073a67cc65a8192dd648f95_920x518_fitb059.jpg", alt: "Portão inox com painéis", label: "Portão Inox + Painel" },
  ];

  const allImages = [
    ...featuredImages,
    { src: "/images/96b85fc5149c692df658b14e8e3590bf_fit.jpg", alt: "Escadaria", label: "Estruturas" },
    { src: "/images/obra_nova_1.jpg", alt: "Projeto Inox", label: "Portão Inox + Madeira" },
    { src: "/images/obra_nova_2.jpg", alt: "Projeto Inox", label: "Portão com Parede Xisto" },
    { src: "/images/obra_nova_3.jpg", alt: "Projeto Inox", label: "Guarda em Vidro" },
    { src: "/images/obra_nova_4.jpg", alt: "Projeto Inox", label: "Guarda Varanda Interior" },
    { src: "/images/obra_nova_5.jpg", alt: "Projeto Inox", label: "Fonte / Espelho d'Água Inox" },
    { src: "/images/obra_nova_6.jpg", alt: "Escadaria Interior", label: "Escadaria Inox e Madeira" }
  ];

  useEffect(() => {
    if (isGalleryOpen || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isGalleryOpen, selectedImage]);

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
                    <div 
                      className="absolute inset-0 bg-[#2C2C2C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white bg-[#2C2C2C]/20 backdrop-blur-sm transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 flex justify-center">
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="flex items-center gap-2 px-8 py-4 border border-[#c8a96e] text-[#2C2C2C] hover:bg-[#c8a96e] hover:text-white transition-all duration-300 tracking-[0.2em] text-sm uppercase font-bold group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  VOLTAR AO SITE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-[#050505]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Obra em detalhe"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-[2px]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
