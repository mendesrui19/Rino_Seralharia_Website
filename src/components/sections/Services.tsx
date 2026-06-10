import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group h-full"
            >
              <div className="relative bg-bg-sec border border-white/[0.06] rounded-lg p-8 pb-10 h-full transition-all duration-500 hover:border-accent/30 hover:bg-bg-ter hover:shadow-[0_0_40px_rgba(200,169,110,0.08)]">
                {/* Number */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-display text-[3rem] leading-none text-accent/60 group-hover:text-accent transition-colors duration-500">
                    {svc.num}
                  </span>
                  <div className="h-[1px] flex-1 bg-accent/20 group-hover:bg-accent/40 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="font-display text-[1.45rem] tracking-[0.03em] mb-4 text-white leading-[1.2] group-hover:text-accent transition-colors duration-300">
                  {svc.name}
                </h3>
                <p className="text-[0.82rem] text-[#e8e6e1]/45 leading-[1.75] group-hover:text-[#e8e6e1]/70 transition-colors duration-500">
                  {svc.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          ))}
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
