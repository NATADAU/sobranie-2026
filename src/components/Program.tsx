const Program = () => {
  return (
    <section id="program" className="border-b-2 border-border bg-background">
      <div className="reveal px-5 md:px-7 py-12 md:py-16 border-b-2 border-border paper-grain">
        <span className="kicker">Программа собрания</span>
        <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3 max-w-[18ch]">
          Здесь будет <span className="text-primary">программа</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[46ch] text-[1.02em] leading-[1.45]">
          Собираем её прямо сейчас — порядок и тайминг появятся на этой странице чуть
          позже. Пока известно главное: презентации будут, но короткие.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] grid-ink">
        {[
          { k: 'Начало', v: '11:00' },
          { k: 'Презентации', v: 'короткие' },
          { k: 'Обед', v: 'будет' },
          { k: 'Мороженое', v: 'тоже' },
        ].map((s) => (
          <div key={s.k} className="cell-plain px-5 py-6">
            <div className="kicker">{s.k}</div>
            <div className="font-head font-bold text-[1.25em] tracking-[-0.02em] mt-1">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;