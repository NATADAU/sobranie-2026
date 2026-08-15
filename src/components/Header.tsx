import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#program', label: 'Программа' },
  { href: '#place', label: 'Где и когда' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-40 bg-background border-b-2 border-border">
      <div className="flex items-center justify-between gap-4 px-5 md:px-7 h-[76px]">
        <a
          href="#top"
          onClick={go('#top')}
          className="flex items-baseline gap-2.5 min-w-0 no-underline"
        >
          <b className="font-head font-bold text-[1.05em] tracking-[-0.02em] leading-none truncate">
            РБОО «Центр лечебной педагогики»
          </b>
          <span className="hidden lg:inline text-muted-foreground text-[0.8em] tracking-[0.02em] whitespace-nowrap">
            собрание к началу учебного года
          </span>
        </a>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className="text-foreground no-underline text-[0.82em] tracking-[0.06em] uppercase py-1.5 whitespace-nowrap border-b-2 border-transparent hover:border-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <span className="bg-primary text-primary-foreground text-[0.78em] uppercase tracking-[0.06em] font-semibold px-4 py-2">
            31 августа, 11:00
          </span>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          className="md:hidden p-2 -mr-2 border-2 border-border"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-border bg-background animate-fade-in">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className="px-5 py-4 border-b-2 border-border text-foreground no-underline uppercase tracking-[0.06em] text-[0.85em]"
              >
                {l.label}
              </a>
            ))}
            <span className="px-5 py-4 bg-primary text-primary-foreground uppercase tracking-[0.06em] text-[0.85em] font-semibold">
              31 августа, 11:00
            </span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;