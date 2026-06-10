import { useEffect, useRef } from "react";
import { animate, useInView, motion } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(v) + suffix;
          }
        },
      });
    }
  }, [isInView, value, suffix]);

  return <span ref={ref} className="stat-num text-[clamp(2.5rem,8vw,3rem)] font-display tracking-[0.02em] text-text-dark leading-[1.1]">0</span>;
}

export function Sobre() {
  return (
    <section id="sobre" className="section-light py-[120px] bg-bg-light border-y border-black/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] gap-[60px] md:gap-[80px] lg:gap-[120px] items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-tag">A Empresa</div>
            <h2 className="section-h2 text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] mb-6">
              Precisão.<br/>Durabilidade.<br/><span className="text-accent">Aço Inox.</span>
            </h2>
            <p className="section-desc text-[clamp(1rem,3vw,1.1rem)]">
              A <strong>SERRALHARIA RINOS</strong> é uma empresa jovem e dinâmica sedeada na região de Guimarães-Braga, especializada em serralharias de <strong>AÇO INOX de elevada qualidade</strong>, direcionadas tanto a clientes particulares como a empresas.
            </p>
            <p className="mt-4 text-text-dark-sec text-[clamp(0.8rem,2vw,0.88rem)] leading-[1.8] max-w-[520px]">
              Produzimos variados tipos de trabalhos de serralharia artística e de construção civil, com um foco no <strong>fabrico peça-a-peça</strong> de estruturas em inox, ferro e vidro.
              Fazemos a interpretação e execução de produtos em série, polimento, pantógrafo, fresadora e maquinação de peças de alumínio.
              De forma autónoma, ou integrada em outras artes da construção civil, intervimos em remodelações e restauros de estruturas metálicas existentes, bem como na criação de novas soluções para moradias, armazéns e obras industriais.
            </p>
            <a href="#contacto" className="btn btn-ghost-dark mt-10">
              Fale connosco hoje
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-10 -right-4 md:-left-10 w-[140px] h-[140px] border border-accent/20 rounded-full flex flex-col items-center justify-center text-center bg-bg-light/90 backdrop-blur-md z-30 shadow-xl">
              <span className="text-accent font-display text-[2.5rem] leading-none mb-1">+9</span>
              <span className="text-[0.6rem] tracking-[0.1em] text-text-dark uppercase font-bold leading-[1.3]">Anos<br/>Experiência</span>
            </div>
            
            <div className="relative z-10 rounded-[2px] overflow-hidden border border-black/5">
              <img 
                src="/images/1e2084ddc03398174fd039ad87934209_fit.jpg" 
                alt="Serralharia Rinos" 
                className="w-full h-auto aspect-[4/5] object-cover filter brightness-90 grayscale-[15%]"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-12 -left-4 md:-left-16 w-3/5 md:w-2/3 bg-white p-2 md:p-3 shadow-2xl z-20 border border-black/10 rounded-[2px]"
            >
              <img 
                src="/images/23e710ebc18b2db42414f0c4805a3217_493x277_0x1_493x278_cropb059.jpg" 
                alt="Carrinha de Serviço Serralharia Rinos" 
                className="w-full h-auto object-cover rounded-[1px]"
              />
            </motion.div>
            
            <div className="absolute -bottom-8 -right-8 w-[200px] h-[200px] border-b-2 border-r-2 border-accent/50 hidden md:block"></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-black/[0.06] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
        >
          <div className="flex flex-col gap-2">
            <AnimatedCounter value={1200} suffix="+" />
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-text-dark-sec font-bold">Obras Concluídas</div>
          </div>
          <div className="flex flex-col gap-2">
            <AnimatedCounter value={100} suffix="%" />
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-text-dark-sec font-bold">Fabrico Próprio</div>
          </div>
          <div className="flex flex-col gap-2">
            <AnimatedCounter value={15} suffix="+" />
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-text-dark-sec font-bold">Parceiros Hoteleiros</div>
          </div>
          <div className="flex flex-col gap-2">
            <AnimatedCounter value={9} suffix=" Anos" />
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-text-dark-sec font-bold">Experiência no Ramo</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
