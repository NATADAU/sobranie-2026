const cards = [
  {
    name: 'Выступление',
    role: 'Темы в программу',
    detail: 'Есть короткий доклад или вопрос к общему кругу — скажите заранее, вставим.',
    tone: 'cell-yellow',
  },
  {
    name: 'В день собрания',
    role: 'Двери с 10:30',
    detail: 'Приходите чуть раньше, чтобы поздороваться. Обычные часы работы Центра в этот день не смотрите.',
    tone: 'cell-blue',
  },
  {
    name: 'Кому писать',
    role: 'Своим, не в общий ящик',
    detail: 'Отдельной приёмной нет. Напишите тому, кто собирает программу или встречает в зале.',
    tone: 'cell-green',
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="border-b-2 border-border">
      <div className="px-5 md:px-7 py-12 md:py-16 paper-grain">
        <span className="kicker">Если что-то непонятно</span>
        <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3 max-w-[20ch]">
          Спросите <span className="text-primary">у своих</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[46ch] text-[1.02em] leading-[1.45]">
          Это внутреннее собрание. Ниже — что ещё полезно знать, кроме даты и адреса.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[2px] grid-ink border-t-2 border-border">
        {cards.map((p) => (
          <div
            key={p.name}
            className={`reveal ${p.tone} p-6 md:p-7 flex flex-col gap-6`}
          >
            <div>
              <div className="font-head font-bold text-[1.3em] tracking-[-0.02em] leading-tight">
                {p.name}
              </div>
              <div className="text-[0.82em] uppercase tracking-[0.06em] opacity-80 mt-1.5">
                {p.role}
              </div>
            </div>
            <p className="text-[0.9em] leading-[1.45] opacity-90 flex-1">{p.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
