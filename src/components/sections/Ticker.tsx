export function Ticker() {
  const words = [
    "Aço Inox", "·", "Ferro", "·", "Portas e Portões", "·", "Guardas e Marquises", "·", "Gradeamentos de Segurança", "·", "Escadas Suspensas", "·", "Corrimãos", "·", "Pilaretes", "·", "Estruturas Metálicas", "·", "Varandas", "·", "Caleiras e Tubagens", "·", "Mobiliário Inox", "·", "Portas Corta-Fogo", "·", "Asnas e Vigas", "·", "Alumínio", "·", "Vidro"
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
