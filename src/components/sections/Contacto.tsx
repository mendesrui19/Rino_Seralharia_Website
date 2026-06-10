import { motion } from "framer-motion";

export function Contacto() {
  return (
    <section id="contacto" className="py-[120px] bg-bg-base overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[80px] lg:gap-[100px]">
          
          {/* Left Column: Direct Contacts */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-tag">Fale Connosco</div>
            <h2 className="section-h2">Vamos<br/><span className="text-accent">Conversar</span></h2>
            <p className="section-desc mb-10">Tem um projeto em mente? Descreva-nos o que precisa e damos vida à sua ideia.</p>

            <div className="flex flex-col gap-6 mb-12">
              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-accent bg-bg-sec">
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13.5 10.5c-.5-.5-2-.5-2.5 0l-.8.8c-1-.5-2-1.5-2.5-2.5l.8-.8c.5-.5.5-2 0-2.5L7 3.5c-.5-.5-1.5-.5-2 0L3.5 5C3 6 3.5 9 6 11.5S10 13 11 12.5l1.5-1.5c.5-.5.5-1.5 0-2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Telefones</div>
                  <div className="text-[0.95rem] mb-1"><a href="tel:+351913255102" className="hover:text-accent transition-colors">913 255 102</a></div>
                  <div className="text-[0.95rem]"><a href="tel:+351913148995" className="hover:text-accent transition-colors">913 148 995</a> <span className="text-dim text-[0.8rem]">(Sr. Nelson Ribeiro)</span></div>
                </div>
              </div>
              
              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-accent bg-bg-sec">
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13 5H3a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 6l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">E-mail</div>
                  <div className="text-[0.95rem]"><a href="mailto:geral@serralhariarinos.com" className="hover:text-accent transition-colors">geral@serralhariarinos.com</a></div>
                </div>
              </div>
              
              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-accent bg-bg-sec">
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M6 3v2M10 3v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Horário</div>
                  <div className="text-[0.95rem] text-[#e8e6e1]/80 leading-[1.6]">2ª a 6ª Feira: 08:30h - 12:00h | 13:30h - 18:00h<br/>Fins de semana e feriados: Encerrado<br/><span className="text-dim text-[0.8rem]">* Atendimento extra-horário por marcação</span></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/[0.04]">
              <a href="https://wa.me/351913255102?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento" target="_blank" className="btn btn-wa">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-[14px] h-[14px]"><path d="M8 1.5A6.5 6.5 0 0114.5 8c0 1.8-.73 3.44-1.9 4.63L14 15l-2.5-.87A6.5 6.5 0 118 1.5zm-1.5 4c-.27 0-.7.1-.93.36-.24.27-.9.88-.9 2.14s.92 2.48 1.05 2.65c.12.17 1.8 2.75 4.36 3.75 2.56 1.01 2.56.67 3.02.63.47-.04 1.5-.62 1.72-1.21.2-.6.2-1.1.14-1.21-.07-.1-.24-.17-.5-.3-.27-.13-1.57-.77-1.82-.86-.24-.09-.42-.14-.6.14-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.32-1.57-1.47-1.83-.16-.27-.02-.42.1-.55.12-.12.27-.3.4-.45.14-.14.18-.25.27-.42.09-.17.05-.32-.02-.45-.07-.14-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.46z"/></svg>
                Enviar WhatsApp
              </a>
              <a href="tel:+351913255102" className="btn btn-ghost">
                <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13.5 10.5c-.5-.5-2-.5-2.5 0l-.8.8c-1-.5-2-1.5-2.5-2.5l.8-.8c.5-.5.5-2 0-2.5L7 3.5c-.5-.5-1.5-.5-2 0L3.5 5C3 6 3.5 9 6 11.5S10 13 11 12.5l1.5-1.5c.5-.5.5-1.5 0-2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                Ligar para 913 255 102
              </a>
            </div>
          </motion.div>

          {/* Right Column: Address and Workshop Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-6 items-stretch h-full"
          >
            {/* Morada Info */}
            <div className="bg-bg-sec p-8 md:p-10 border border-white/[0.04] flex-1 flex flex-col justify-center rounded-[2px] hover:border-accent/20 transition-colors duration-500">
              <div className="w-[48px] h-[48px] rounded-full border border-white/10 flex items-center justify-center text-accent mb-8 bg-bg-base shadow-[0_0_20px_rgba(200,169,110,0.1)]">
                <svg viewBox="0 0 16 16" fill="none" className="w-[20px] h-[20px]"><path d="M8 1a5 5 0 00-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>
              </div>
              <h3 className="font-display text-2xl tracking-[0.04em] mb-4 text-white">Sede & Oficina</h3>
              <div className="text-[1.05rem] text-[#e8e6e1]/70 leading-[1.8] mb-6">
                Rua do Romanço, nº 333, Lote 2 A<br/>
                Zona Ind. de Vila Nova<br/>
                4805-623 Vila Nova de Sande<br/>
                Guimarães
              </div>
              <a 
                href="https://maps.app.goo.gl/BhhV4Z4Q1P2MpsM17" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-accent text-[0.85rem] font-bold tracking-widest uppercase hover:text-accent2 transition-colors"
              >
                +41º 02' 12.7", -8º 36' 16.5"
                <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3"><path d="M4 12l8-8m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Foto Oficina */}
            <div className="flex-1 relative rounded-[2px] overflow-hidden border border-white/5 min-h-[350px] group">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500"></div>
              <img 
                src="/images/96e228a03a061457d15673e6198d0afa_493x277_0x1_493x278_cropb059.jpg" 
                alt="Instalações Serralharia Rinos" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-bg-sec/90 backdrop-blur-md px-4 py-2 border border-white/10 text-[0.7rem] uppercase tracking-widest text-white/90 z-20">
                A nossa oficina
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
