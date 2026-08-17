const slots = [
  { time: '10:30', title: 'Общий сбор' },
  { time: '11:00', title: 'Собрание' },
  { time: '13:30 — 14:30', title: 'Вкусный обед' },
  { time: '14:30 — 16:00', title: 'Общий педсовет' },
  { time: '16:30', title: 'Мороженое!' },
];

const Program = () => {
  return (
    <section id="program" className="border-b-2 border-border bg-background">
      <div className="reveal px-5 md:px-7 py-12 md:py-16 border-b-2 border-border paper-grain">
        <span className="kicker">Программа собрания</span>
        <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3 max-w-[16ch]">
          31 августа, <span className="text-primary">по часам</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] grid-ink">
        {slots.map((s) => (
          <div key={s.time} className="cell-plain px-5 py-7">
            <div className="kicker">{s.time}</div>
            <div className="font-head font-bold text-[1.25em] tracking-[-0.02em] mt-2 leading-tight">
              {s.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
