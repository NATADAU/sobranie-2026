import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#program', label: 'Программа' },
  { href: '#place', label: 'Где и когда' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollY = useRef(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (open) {
      scrollY.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY.current);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    const target = href === '#top' ? document.getElementById('top') : document.querySelector(href);

    if (open) {
      setOpen(false);
      window.setTimeout(() => {
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }

    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
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
              31 августа, 10:30
            </span>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden shrink-0 p-2 -mr-2 border-2 border-border bg-background"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[76px] bottom-0 z-40 bg-background overflow-y-auto"
        >
          <nav className="flex flex-col border-t-2 border-border">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className="px-5 py-5 border-b-2 border-border text-foreground no-underline uppercase tracking-[0.06em] text-[0.85em]"
              >
                {l.label}
              </a>
            ))}
            <span className="px-5 py-5 bg-primary text-primary-foreground uppercase tracking-[0.06em] text-[0.85em] font-semibold">
              31 августа, 10:30
            </span>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
