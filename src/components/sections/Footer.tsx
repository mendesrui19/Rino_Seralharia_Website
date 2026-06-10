import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-8 border-t border-white/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="font-display text-4xl mb-1">Rinos</div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-accent font-bold mb-4">Serralharia Civil · Unipessoal, Lda</div>
            <p className="text-[0.88rem] text-dim leading-[1.8] max-w-[340px]">
              Especialistas em aço inox, ferro e vidro no distrito de Braga. Fabrico por medida, serviço chave-na-mão desde 2016.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="font-display text-xl mb-6">Serviços</div>
            <div className="flex flex-col gap-3 text-[0.88rem] text-dim">
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Corrimão Inox</a>
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Portões &amp; Grades</a>
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Varandas Inox</a>
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Escadarias</a>
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Mobiliário Hotelaria</a>
              <a href="#servicos" className="hover:text-accent transition-colors w-fit">Estruturas Metálicas</a>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="font-display text-xl mb-6">Contacto</div>
            <div className="flex flex-col gap-3 text-[0.88rem] text-dim">
              <a href="tel:+351913255102" className="hover:text-accent transition-colors w-fit text-white">913 255 102</a>
              <a href="https://wa.me/351913255102" target="_blank" className="hover:text-accent transition-colors w-fit">WhatsApp</a>
              <a href="https://facebook.com/serralharia.rinos" target="_blank" className="hover:text-accent transition-colors w-fit">Facebook</a>
              <a href="#contacto" className="hover:text-accent transition-colors w-fit">Pedir Orçamento</a>
              <span className="text-[0.78rem] mt-1 block leading-[1.5]">Guimarães, Braga<br/>e região do Minho</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[0.72rem] text-dim">© {new Date().getFullYear()} Serralharia Rinos, Unipessoal, Lda.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[0.72rem] text-dim">
            <a href="https://www.livroreclamacoes.pt/entrar" target="_blank" rel="noopener" className="hover:text-white transition-colors">Livro de Reclamações</a>
            <a href="https://www.arbitragemdeconsumo.org/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Resolução de Litígios (CNIACC)</a>
            <a href="https://www.consumidor.gov.pt/" target="_blank" rel="noopener" className="hover:text-white transition-colors">Portal do Consumidor</a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 pt-6 border-t border-white/[0.02] text-center text-[0.65rem] text-white/30 leading-[1.6]"
        >
          <p className="mb-2"><strong>Informação importante disponibilizada ao Consumidor (Lei 144/2015):</strong></p>
          <p>Em caso de litígio de consumo, o consumidor pode recorrer à entidade de resolução alternativa de litígios de consumo competente. Em caso de litígio o consumidor pode recorrer ao <strong>Centro Nacional de Informação e Arbitragem de Conflitos de Consumo (CNIACC)</strong> em <a href="http://www.arbitragemdeconsumo.org" className="hover:text-accent underline" target="_blank">www.arbitragemdeconsumo.org</a> ou ao <strong>Centro de Informação de Consumo e Arbitragem do Porto</strong>. Mais informações em <a href="http://www.consumidor.pt" className="hover:text-accent underline" target="_blank">www.consumidor.pt</a>.</p>
          <p className="mt-4">Ao navegar neste site está a consentir a utilização de 'cookies' para uma melhor experiência. Patrocinado por: N.R.</p>
        </motion.div>
      </div>
    </footer>
  );
}
