const CtaStrip = () => {
  return (
    <section className="border-b-2 border-border">
      <div className="reveal cell-plain px-5 md:px-7 py-10 md:py-14">
        <h2 className="font-head font-bold text-[clamp(26px,5vw,44px)] leading-[1.06] tracking-[-0.03em] max-w-[22ch]">
          Ждём всех!
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[44ch] text-[1em] leading-[1.45]">
          Записываться не нужно, трансляции не будет. Рабочие дни для педагогов
          начинаются с 24 августа.
        </p>
      </div>
    </section>
  );
};

export default CtaStrip;
