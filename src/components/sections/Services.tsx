import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { CardStack, type CardStackItem } from "../ui/card-stack";

const services: CardStackItem[] = [
  { id: "01", num: "01", title: "Estruturas Metálicas", description: "Construção de estruturas em ferro, asnas, pilares, pilaretes e vigas estruturais." },
  { id: "02", num: "02", title: "Guardas & Corrimãos", description: "Guardas em aço inox e vidro, corrimãos e varandins de alta resistência." },
  { id: "03", num: "03", title: "Escadarias", description: "Escadas de acesso interiores ou exteriores, suspensas ou em caracol, em ferro ou inox." },
  { id: "04", num: "04", title: "Portões & Portas", description: "Portões de garagem, de correr, batente, portadas amovíveis e portas corta-fogo." },
  { id: "05", num: "05", title: "Grades & Vedações", description: "Gradeamentos fixos e móveis, com equilíbrio entre elegância e resistência." },
  { id: "06", num: "06", title: "Fachadas & Caleiras", description: "Fachadas chapeadas em aço inox, grelhas, suspensões, caleiras e tubagens." },
  { id: "07", num: "07", title: "Objetos Decorativos", description: "Fabrico de objetos decorativos em inox, com estética, proteção e durabilidade." },
  { id: "08", num: "08", title: "Fabrico & Reparação", description: "Preparação, montagem e reparação de todos os tipos de estruturas metálicas." },
];

export function Services() {
  return (
    <section id="servicos" className="py-[120px] bg-bg-base overflow-hidden relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
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

        {/* 3D Fan Card Stack */}
        <div className="relative max-w-[900px] mx-auto min-h-[460px] flex items-center justify-center">
          <CardStack
            items={services}
            initialIndex={0}
            autoAdvance={true}
            pauseOnHover={false}
            showDots={true}
            cardWidth={320}
            cardHeight={320}
            overlap={0.6}
            spreadDeg={35}
            maxVisible={5}
            perspectivePx={1000}
            tiltXDeg={10}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
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
