import { motion } from "framer-motion";
import { Star } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJu0EMzC77JA0RMJuoquTekW8";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=8039451883530132272";

const reviews = [
  {
    name: "António José Leite Ferreira",
    text: "Na data marcada à hora combinada a encomenda lá estava!",
    stars: 5,
    time: "há 4 anos",
    source: "Google",
  },
  {
    name: "Samuel Teixeira",
    text: "Boa relação qualidade/preço. Ficou espectacular 5 estrelas recomendo. Positivo: Profissionalismo, Qualidade, Resposta rápida, Valor",
    stars: 5,
    time: "há 5 anos",
    source: "Google",
  },
  {
    name: "Cliente Verificado",
    text: "Excelente serviço e qualidade nos trabalhos realizados. Muito profissionais e atentos aos detalhes.",
    stars: 5,
    time: "Google",
    source: "Google",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
      ))}
    </div>
  );
}

export function Testemunhos() {
  return (
    <section className="py-[100px] bg-bg-sec border-t border-white/[0.04] overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-[60px]"
        >
          <div className="section-tag mx-auto">O Que Dizem De Nós</div>
          <h2 className="section-h2">Avaliações <span className="text-accent">Reais</span></h2>
          
          {/* Google rating badge */}
          <div className="mt-6 flex items-center gap-3 bg-bg-ter px-6 py-3 rounded-full border border-white/[0.06]">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-white">5.0</span>
              <StarRating count={5} />
              <span className="text-dim text-sm ml-1">(3 avaliações)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-ter border border-white/[0.04] p-8 rounded-xl relative group hover:border-accent/20 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="font-display text-[5rem] leading-none text-accent/10 absolute -top-2 right-6 select-none">"</div>

              <div className="flex items-center gap-2 mb-4">
                <StarRating count={r.stars} />
                <span className="text-dim text-[0.72rem]">{r.time}</span>
              </div>

              <p className="text-[0.88rem] text-[#e8e6e1]/70 leading-[1.8] mb-6 relative z-10">
                "{r.text}"
              </p>

              <div className="border-t border-white/[0.04] pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display text-lg">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-[1rem] tracking-[0.04em] text-white">{r.name}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg viewBox="0 0 24 24" className="w-3 h-3"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    <span className="text-[0.65rem] text-dim">Google Review</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to leave a review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-dim text-[0.85rem] mb-4">Já trabalhou connosco? Partilhe a sua experiência!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-text-dark hover:bg-[#f0f0f0] hover:-translate-y-0.5 transition-all shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Deixar Avaliação no Google
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Ver no Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
