const Program = () => {
  return (
    <section id="program" className="border-b-2 border-border bg-background">
      <div className="reveal px-5 md:px-7 py-12 md:py-16 paper-grain">
        <span className="kicker">Программа собрания</span>
        <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3 max-w-[18ch]">
          Порядок выступлений <span className="text-primary">появится здесь</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[46ch] text-[1.02em] leading-[1.45]">
          Тайминг ещё собираем. Список появится на этой странице, как только
          выступления сложатся.
        </p>
      </div>
    </section>
  );
};

export default Program;
