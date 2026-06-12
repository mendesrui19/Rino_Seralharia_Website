export function Ticker() {
  const words = [
    "Aço Inox", "·", "Ferro", "·", "Portas e Portões", "·", "Guardas e Marquises", "·", "Gradeamentos de Segurança", "·", "Escadas Suspensas", "·", "Corrimãos", "·", "Pilaretes", "·", "Estruturas Metálicas", "·", "Varandas e Varandins", "·", "Caleiras e Tubagens", "·", "Mobiliário Inox", "·", "Portas Corta-Fogo", "·", "Asnas, Pilares e Postes", "·", "Alumínio", "·", "Vidro", "·", "Grelhas em Aço Inox", "·", "Grades em Aço Inox", "·", "Fachadas Chapeadas em Inox", "·", "Portões de Garagem", "·", "Portões e Portas de Correr", "·", "Portas de Batente", "·", "Escadas em Caracol", "·", "Armações para Armazéns", "·", "Gradeamentos Fixos e Móveis", "·", "Objetos Decorativos em Inox"
  ];

  const content = (
    <div className="flex gap-16 pr-16 items-center">
      {words.map((word, i) => (
        <span key={i} className={word === '·' ? 'text-accent opacity-50 text-[1.2rem]' : 'whitespace-nowrap'}>
          {word}
        </span>
      ))}
    </div>
  );

  return (
    <div className="py-4 border-b border-white/[0.06] overflow-hidden bg-bg-base/50 flex font-display text-[1.15rem] tracking-[0.06em] text-dim uppercase">
      <div className="flex animate-ticker w-max">
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
