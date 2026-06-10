import { motion } from "framer-motion";
import { Ruler, Key, Clock, Building } from "lucide-react";
import { ShimmerButton } from "../ui/shimmer-button";

export function PorqueNos() {
  const features = [
    { icon: Ruler, title: "Fabrico 100% por medida", text: "Nenhum produto standard. Cada peça é desenhada e fabricada especificamente para o seu espaço." },
    { icon: Key, title: "Serviço chave-na-mão", text: "Visita ao local, orçamento, fabrico e montagem. Sem surpresas, sem subcontratação." },
    { icon: Clock, title: "Rigor nos prazos", text: "Cumprimos o que prometemos. A sua obra não pára à espera — sabemos disso." },
    { icon: Building, title: "Particulares e empresas", text: "Da vivenda ao hotel, do restaurante à fábrica. O mesmo nível de exigência." }
  ];

  const zones = ["Guimarães", "Braga", "Fafe", "Vizela", "Barcelos", "Famalicão", "Póvoa do Lanhoso", "Vieira do Minho", "Esposende", "Viana do Castelo", "Porto"];

  return (
    <section id="porque" className="py-[120px] bg-bg-light section-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-[70px]"
        >
          <div className="section-tag mx-auto">Porquê escolher-nos</div>
          <h2 className="section-h2">Qualidade sem <span className="text-accent">compromissos</span></h2>
          <p className="section-desc mt-4 max-w-[500px]">
            Serralheiros profissionais com experiência em fabrico, preparação, montagem e reparação de todos os tipos de estruturas metálicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-accent/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[1.3rem] tracking-[0.03em] mb-3 text-text-dark">
                  {f.title}
                </h3>
                <p className="text-[0.85rem] text-text-dark-sec leading-[1.7]">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-xl border border-black/[0.06] shadow-sm"
          >
            <div className="font-display text-2xl tracking-[0.04em] mb-6 text-text-dark">Zona de Cobertura</div>
            <div className="flex flex-wrap gap-2.5">
              {zones.map((zone) => (
                <span key={zone} className="text-xs uppercase tracking-widest text-text-dark-sec border border-text-dark/10 py-2 px-4 rounded-full bg-bg-light hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
                  {zone}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/[0.08] to-accent/[0.02]"
          >
            <div className="font-display text-[1.8rem] tracking-[0.04em] mb-2 text-accent">Orçamento Gratuito</div>
            <p className="text-[0.88rem] text-text-dark-sec leading-[1.7] mb-6">
              Visita ao local e orçamento sem custos e sem compromisso. Resposta em menos de 24 horas.
            </p>
            <ShimmerButton
              href="tel:+351913255102"
              background="#c8a96e"
              shimmerColor="#ffffff"
              className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm w-full py-4 shadow-[0_0_40px_rgba(200,169,110,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13.5 10.5c-.5-.5-2-.5-2.5 0l-.8.8c-1-.5-2-1.5-2.5-2.5l.8-.8c.5-.5.5-2 0-2.5L7 3.5c-.5-.5-1.5-.5-2 0L3.5 5C3 6 3.5 9 6 11.5S10 13 11 12.5l1.5-1.5c.5-.5.5-1.5 0-2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              Ligar Agora — 913 255 102
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
