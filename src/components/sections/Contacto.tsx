import { useState } from "react";
import { ShimmerButton } from "../ui/shimmer-button";

export function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    
    // @ts-ignore - We know these elements exist in the form
    const nome = f.nome.value;
    // @ts-ignore
    const telefone = f.telefone.value;
    // @ts-ignore
    const email = f.email.value;
    // @ts-ignore
    const servico = f.servico.value;
    // @ts-ignore
    const mensagem = f.mensagem.value;

    const body = encodeURIComponent(`Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nServiço: ${servico}\n\n${mensagem}`);
    window.location.href = `mailto:geral@serralhariarinos.com?subject=${encodeURIComponent('Orçamento — Serralharia Rinos')}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-[120px] bg-bg-base overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[80px] lg:gap-[120px]">
          
          <div className="animate-fade-up">
            <div className="section-tag">Fale Connosco</div>
            <h2 className="section-h2">Vamos<br/><span className="text-accent">Conversar</span></h2>
            <p className="section-desc mb-10">Tem um projeto em mente? Descreva-nos o que precisa e damos vida à sua ideia.</p>

            <div className="flex flex-col gap-6 mb-12">
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
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-accent bg-bg-sec">
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M13 5H3a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 6l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">E-mail</div>
                  <div className="text-[0.95rem]"><a href="mailto:geral@serralhariarinos.com" className="hover:text-accent transition-colors">geral@serralhariarinos.com</a></div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-accent bg-bg-sec">
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M8 1a5 5 0 00-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.15em] uppercase text-dim font-bold mb-1">Morada & GPS</div>
                  <div className="text-[0.95rem] text-[#e8e6e1]/80 leading-[1.6] mb-2">Rua do Romanço, nº 333, Lote 2 A<br/>Zona Ind. de Vila Nova<br/>4805-623 Vila Nova de Sande, Guimarães</div>
                  <div className="text-[0.8rem] text-accent">+41º 02' 12.7", -8º 36' 16.5"</div>
                </div>
              </div>
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

            <div className="mt-12 rounded-[2px] overflow-hidden border border-white/5 relative group animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500"></div>
              <img 
                src="/images/96e228a03a061457d15673e6198d0afa_493x277_0x1_493x278_cropb059.jpg" 
                alt="Instalações Serralharia Rinos" 
                className="w-full h-auto aspect-video object-cover filter brightness-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-bg-sec/90 backdrop-blur-md px-4 py-2 border border-white/10 text-[0.7rem] uppercase tracking-widest text-white/90 z-20">
                A nossa oficina
              </div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-bg-sec p-10 md:p-12 border border-white/[0.04]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="f-nome">Nome *</label>
                    <input className="w-full bg-transparent border border-white/10 rounded-[2px] py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.02] transition-colors" id="f-nome" name="nome" type="text" placeholder="O seu nome" required/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="f-tel">Telefone *</label>
                    <input className="w-full bg-transparent border border-white/10 rounded-[2px] py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.02] transition-colors" id="f-tel" name="telefone" type="tel" placeholder="9XX XXX XXX" required/>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="f-email">E-mail</label>
                  <input className="w-full bg-transparent border border-white/10 rounded-[2px] py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.02] transition-colors" id="f-email" name="email" type="email" placeholder="email@exemplo.pt"/>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="f-svc">Serviço</label>
                  <select className="w-full bg-bg-sec border border-white/10 rounded-[2px] py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.02] transition-colors appearance-none cursor-pointer" id="f-svc" name="servico">
                    <option value="">Selecione um serviço...</option>
                    <option>Corrimão Inox</option>
                    <option>Portão / Porta</option>
                    <option>Grades / Marquises</option>
                    <option>Varanda / Pilaretes</option>
                    <option>Escadaria</option>
                    <option>Inox + Vidro</option>
                    <option>Mobiliário Inox / Hotelaria</option>
                    <option>Estruturas Metálicas</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <label className="text-[0.65rem] tracking-[0.1em] uppercase text-dim font-bold" htmlFor="f-msg">Descrição *</label>
                  <textarea className="w-full bg-transparent border border-white/10 rounded-[2px] py-3.5 px-4 text-[0.95rem] text-white focus:outline-none focus:border-accent focus:bg-white/[0.02] transition-colors min-h-[140px] resize-y" id="f-msg" name="mensagem" placeholder="Descreva o trabalho que pretende..." required></textarea>
                </div>
                <ShimmerButton 
                  type="submit"
                  background="#c8a96e"
                  shimmerColor="#ffffff"
                  className="text-bg-base font-bold tracking-[0.16em] uppercase text-sm w-full py-4 shadow-[0_0_40px_rgba(200,169,110,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Enviar Pedido
                  <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </ShimmerButton>
                <p className="text-center text-[0.72rem] text-dim mt-4">Orçamento gratuito · Resposta em menos de 24h</p>
              </form>
            ) : (
              <div className="bg-bg-sec p-16 border border-white/[0.04] text-center flex flex-col items-center justify-center min-h-[500px]">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="mb-6"><circle cx="26" cy="26" r="24" stroke="#c8a96e" strokeWidth="2"/><path d="M16 26l8 8 12-16" stroke="#c8a96e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 className="font-display text-4xl mb-3">Mensagem Enviada!</h3>
                <p className="text-dim">Obrigado pelo contacto. Entraremos em contacto brevemente.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
