import { motion } from "framer-motion";
import { RoadmapCard } from "../ui/roadmap-card";
import { MagicCard } from "../ui/magic-card";
import { ShimmerButton } from "../ui/shimmer-button";
import { MapPin } from "lucide-react";

const zones = ["Guimarães", "Braga", "Fafe", "Vizela", "Barcelos", "Famalicão", "Póvoa do Lanhoso", "Vieira do Minho", "Esposende", "Viana do Castelo", "Porto"];

export function PorqueNos() {
  return (
    <section id="porquenos" className="py-[120px] bg-bg-base relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto justify-center">A Nossa Promessa</div>
          <h2 className="section-h2">
            Porquê Escolher a<br/><span className="text-accent italic">Serralharia Rinos?</span>
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <RoadmapCard
            items={[
              {
                quarter: "PASSO 01",
                title: "100% Por Medida",
                description: "Nenhum produto standard. Cada peça é fabricada especificamente para o seu espaço.",
                status: "done",
              },
              {
                quarter: "PASSO 02",
                title: "Chave-na-mão",
                description: "Visita, orçamento, fabrico e montagem. Sem surpresas ou subcontratação.",
                status: "done",
              },
              {
                quarter: "PASSO 03",
                title: "Rigor nos Prazos",
                description: "Cumprimos o que prometemos. A sua obra não pára à espera.",
                status: "done",
              },
              {
                quarter: "PASSO 04",
                title: "Empresas & Retalho",
                description: "Da habitação ao hotel, do restaurante à unidade fabril. O mesmo nível de exigência.",
                status: "done",
              },
            ]}
          />
        </motion.div>

        {/* CTA and Zones Grid */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          
          {/* Orçamento Gratuito (CTA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full relative group"
          >
            <MagicCard 
              className="flex flex-col md:flex-row items-center justify-between p-8 md:p-10 bg-gradient-to-br from-accent/10 to-bg-ter border-accent/20 h-full overflow-hidden"
              gradientColor="rgba(200, 169, 110, 0.25)"
            >
              <div className="relative z-10 flex flex-col items-start text-left max-w-2xl">
                <div className="font-display text-[2.2rem] tracking-[0.02em] mb-2 text-white leading-[1.1]">
                  Procura um orçamento <span className="text-accent italic">rigoroso?</span>
                </div>
                <p className="text-[0.95rem] text-[#e8e6e1]/70 leading-[1.6] mb-8 md:mb-0">
                  Efetuamos visita técnica ao local para aconselhamento e orçamento sem custos. Resposta em menos de 24 horas.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <ShimmerButton
                  href="tel:+351913255102"
                  background="#c8a96e"
                  shimmerColor="#ffffff"
                  className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm w-full md:w-auto px-10 py-4 shadow-[0_0_40px_rgba(200,169,110,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13.5 10.5c-.5-.5-2-.5-2.5 0l-.8.8c-1-.5-2-1.5-2.5-2.5l.8-.8c.5-.5.5-2 0-2.5L7 3.5c-.5-.5-1.5-.5-2 0L3.5 5C3 6 3.5 9 6 11.5S10 13 11 12.5l1.5-1.5c.5-.5.5-1.5 0-2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                  Ligar Agora
                </ShimmerButton>
              </div>
              
              {/* Abstract decorative element inside card */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-accent/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
            </MagicCard>
          </motion.div>

          {/* Zona de Cobertura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <MagicCard 
              className="flex flex-col lg:flex-row items-center gap-8 p-8 md:px-12 bg-bg-ter/30 border-white/[0.05]"
              gradientColor="rgba(200, 169, 110, 0.1)"
            >
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-bg-sec flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div className="font-display text-xl tracking-[0.04em] text-white">Zonas de Cobertura</div>
              </div>
              
              <div className="w-[1px] h-12 bg-white/10 hidden lg:block mx-4"></div>
              
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {zones.map((zone) => (
                  <span key={zone} className="text-[0.75rem] uppercase tracking-widest text-dim border border-white/[0.05] py-2 px-4 rounded-full bg-bg-sec/50 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
                    {zone}
                  </span>
                ))}
              </div>
            </MagicCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
