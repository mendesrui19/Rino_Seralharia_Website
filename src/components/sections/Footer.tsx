import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-8 border-t border-white/[0.04]">
      <div className="container max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16"
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
              <div className="flex flex-col gap-1.5 mt-0.5 mb-1">
                <a href="https://wa.me/351913255102" target="_blank" className="hover:text-accent transition-colors w-fit text-[0.82rem] flex items-center gap-1.5"><svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3"><path d="M8 1.5A6.5 6.5 0 0114.5 8c0 1.8-.73 3.44-1.9 4.63L14 15l-2.5-.87A6.5 6.5 0 118 1.5zm-1.5 4c-.27 0-.7.1-.93.36-.24.27-.9.88-.9 2.14s.92 2.48 1.05 2.65c.12.17 1.8 2.75 4.36 3.75 2.56 1.01 2.56.67 3.02.63.47-.04 1.5-.62 1.72-1.21.2-.6.2-1.1.14-1.21-.07-.1-.24-.17-.5-.3-.27-.13-1.57-.77-1.82-.86-.24-.09-.42-.14-.6.14-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.57-1.47-1.83-.16-.27-.02-.42.1-.55.12-.12.27-.3.4-.45.14-.14.18-.25.27-.42.09-.17.05-.32-.02-.45-.07-.14-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.46z"/></svg> WhatsApp (Geral)</a>
                <a href="https://wa.me/351913148995" target="_blank" className="hover:text-accent transition-colors w-fit text-[0.82rem] flex items-center gap-1.5"><svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3"><path d="M8 1.5A6.5 6.5 0 0114.5 8c0 1.8-.73 3.44-1.9 4.63L14 15l-2.5-.87A6.5 6.5 0 118 1.5zm-1.5 4c-.27 0-.7.1-.93.36-.24.27-.9.88-.9 2.14s.92 2.48 1.05 2.65c.12.17 1.8 2.75 4.36 3.75 2.56 1.01 2.56.67 3.02.63.47-.04 1.5-.62 1.72-1.21.2-.6.2-1.1.14-1.21-.07-.1-.24-.17-.5-.3-.27-.13-1.57-.77-1.82-.86-.24-.09-.42-.14-.6.14-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.57-1.47-1.83-.16-.27-.02-.42.1-.55.12-.12.27-.3.4-.45.14-.14.18-.25.27-.42.09-.17.05-.32-.02-.45-.07-.14-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.46z"/></svg> WhatsApp (Sr. Nelson)</a>
              </div>
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
