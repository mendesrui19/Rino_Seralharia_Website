import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../lib/seo-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-[120px] bg-bg-base overflow-hidden"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container max-w-[900px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-tag mx-auto justify-center">Perguntas Frequentes</div>
          <h2 id="faq-heading" className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] tracking-[0.02em]">
            Serralharia em Guimarães, Braga, Porto e Minho — <span className="text-accent italic">Perguntas Frequentes</span>
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-6 mb-6" />
          <p className="text-[#e8e6e1]/50 text-[0.92rem] leading-[1.8] max-w-[560px] mx-auto">
            Respostas claras sobre os nossos serviços em aço inox, ferro e vidro em Guimarães, Braga e região.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-white/[0.06] bg-bg-sec/50 rounded-sm overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[0.95rem] font-medium text-white/90" itemProp="name">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p
                        className="px-6 pb-5 text-[0.9rem] text-[#e8e6e1]/65 leading-[1.85]"
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
