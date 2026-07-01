import { motion } from "framer-motion";
import { RoadmapCard } from "../ui/roadmap-card";
import { MagicCard } from "../ui/magic-card";
import { MapPin } from "lucide-react";

import { coverageCityList, geoCoverage } from "../../lib/seo-data";

export function PorqueNos() {
  return (
    <section id="porquenos" className="section-light py-[120px] bg-bg-light border-y border-black/[0.04] relative overflow-hidden">
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
                quarter: "01",
                title: "100% Por Medida",
                description: "Nenhum produto standard. Cada peça é fabricada especificamente para o seu espaço.",
                status: "done",
              },
              {
                quarter: "02",
                title: "Chave-na-mão",
                description: "Visita, orçamento, fabrico e montagem. Sem surpresas ou subcontratação.",
                status: "done",
              },
              {
                quarter: "03",
                title: "Rigor nos Prazos",
                description: "Cumprimos o que prometemos. A sua obra não pára à espera.",
                status: "done",
              },
              {
                quarter: "04",
                title: "Empresas & Retalho",
                description: "Da habitação ao hotel, do restaurante à unidade fabril. O mesmo nível de exigência.",
                status: "done",
              },
            ]}
          />
        </motion.div>

        {/* CTA and Zones Grid */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          
          {/* Zona de Cobertura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <MagicCard 
              className="flex flex-col lg:flex-row items-center gap-8 p-8 md:px-12 !bg-white/60 !border-black/[0.05] !text-text-dark"
              gradientColor="rgba(200, 169, 110, 0.15)"
            >
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-black/10 shadow-sm">
                  <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div className="font-display text-xl tracking-[0.04em] text-text-dark">
                  Zonas de Cobertura
                  <span className="block text-[0.65rem] font-sans tracking-widest text-text-dark-sec mt-1 font-normal normal-case">
                    Raio {geoCoverage.radiusKm} km · Minho até Porto
                  </span>
                </div>
              </div>
              
              <div className="w-[1px] h-12 bg-black/10 hidden lg:block mx-4"></div>
              
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {coverageCityList.map((zone) => (
                  <span key={zone} className="text-[0.75rem] uppercase tracking-widest text-text-dark-sec border border-black/[0.05] py-2 px-4 rounded-full bg-white hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
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
