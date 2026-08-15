const CtaStrip = () => {
  return (
    <section className="border-b-2 border-border">
      <div className="grid md:grid-cols-[1fr_auto] gap-[2px] grid-ink items-stretch">
        <div className="reveal cell-plain px-5 md:px-7 py-10 md:py-14">
          <h2 className="font-head font-bold text-[clamp(26px,5vw,44px)] leading-[1.06] tracking-[-0.03em] max-w-[22ch]">
            Записываться не нужно
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[44ch] text-[1em] leading-[1.45]">
            Просто приходите очно. Трансляции не будет — всё важное случится в зале.
          </p>
        </div>
        <div className="bg-primary text-primary-foreground px-8 md:px-12 py-10 flex items-center">
          <span className="font-head font-bold text-[2em] leading-none tracking-[-0.03em]">
            Ждём вас
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaStrip;
