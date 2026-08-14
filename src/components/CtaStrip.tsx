import { Users } from 'lucide-react';

const words = [
  'все в сборе',
  'презентации короткие',
  'кофе есть',
  'стульев хватит',
  'обед будет',
  'и мороженое',
];

const CtaStrip = () => {
  return (
    <section className="border-b-2 border-border">
      <div className="overflow-hidden bg-primary text-primary-foreground border-b-2 border-border py-3">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0">
              {words.map((w) => (
                <span
                  key={`${dup}-${w}`}
                  className="font-head font-bold uppercase tracking-[0.06em] text-[0.85em] px-6 whitespace-nowrap"
                >
                  {w} <span className="opacity-60">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-[2px] grid-ink items-stretch">
        <div className="reveal cell-plain px-5 md:px-7 py-10 md:py-14">
          <h2 className="font-head font-bold text-[clamp(26px,5vw,44px)] leading-[1.06] tracking-[-0.03em] max-w-[22ch]">
            Будем рады видеть всех очно
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[44ch] text-[1em] leading-[1.45]">
            Записываться не нужно — просто приходите. Трансляции не будет, так что всё
            самое интересное случится в зале.
          </p>
        </div>
        <div className="bg-primary text-primary-foreground px-8 md:px-12 py-10 flex md:flex-col items-center md:items-start justify-between gap-4 text-left">
          <Users size={40} />
          <span>
            <span className="block font-head font-bold text-[2em] leading-none tracking-[-0.03em]">
              Приходите
            </span>
            <span className="block text-[0.8em] font-semibold mt-1.5">
              27 августа, 11:00
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;