import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { ShimmerButton } from '../ui/shimmer-button';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        id="nav"
        className="fixed top-0 left-0 right-0 z-[200] transition-all duration-350 border-b border-white/[0.04] bg-[#050505]"
      >
        <div className="flex items-center justify-between py-5 px-8 max-w-[1200px] mx-auto">
          <a href="#" className="flex flex-col leading-none gap-0.5">
            <img src="/images/85dc00a86ed4a46df517c3ae0e2b94fd_590x234_0x0_590x237_crop23e4.jpg" alt="Serralharia Rinos" className="h-[45px] w-auto object-contain mb-1" />
            <span className="text-[0.6rem] tracking-[0.22em] uppercase text-accent font-medium">Serralharia Civil · Guimarães</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 list-none">
            {['sobre', 'servicos', 'obras', 'contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-[0.72rem] tracking-[0.16em] uppercase text-dim font-medium transition-colors hover:text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:bg-accent after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <ShimmerButton
                href="#contacto"
                background="#c8a96e"
                shimmerColor="#ffffff"
                className="text-bg-base text-[0.72rem] tracking-[0.16em] uppercase font-bold py-2.5 px-6 rounded-sm transition-all hover:-translate-y-0.5 inline-flex shadow-[0_0_20px_rgba(200,169,110,0.3)]"
              >
                Pedir Orçamento
              </ShimmerButton>
            </li>
          </ul>
          <button
            className="flex md:hidden flex-col gap-1.5 p-1 cursor-pointer z-[210]"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300", isOpen && "rotate-45 translate-y-[7.5px]")}></span>
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300", isOpen && "opacity-0")}></span>
            <span className={cn("block w-6 h-[1.5px] bg-white transition-all duration-300", isOpen && "-rotate-45 -translate-y-[7.5px]")}></span>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[190] bg-bg-base flex-col items-center justify-center gap-10",
          isOpen ? "flex" : "hidden"
        )}
      >
        {['sobre', 'servicos', 'obras', 'contacto'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={closeMenu}
            className="font-display text-5xl tracking-[0.04em] transition-colors hover:text-accent capitalize"
          >
            {item}
          </a>
        ))}
        <ShimmerButton
          href="#contacto"
          onClick={closeMenu as any}
          background="#c8a96e"
          shimmerColor="#ffffff"
          className="text-xl text-bg-base py-3.5 px-10 rounded-sm font-bold font-display tracking-[0.08em] shadow-[0_0_20px_rgba(200,169,110,0.3)]"
        >
          Pedir Orçamento
        </ShimmerButton>
      </div>
    </>
  );
}
