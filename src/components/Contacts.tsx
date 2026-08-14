const cards = [
  {
    name: 'Организационные вопросы',
    role: 'Зал, кофе, обед',
    detail: 'Всё, что касается места и угощения, — по этой части. Спрашивайте заранее.',
    tone: 'cell-yellow',
  },
  {
    name: 'Программа',
    role: 'Темы и выступления',
    detail: 'Хотите добавить пункт или короткую презентацию — предложение принимается.',
    tone: 'cell-blue',
  },
  {
    name: 'Без записи',
    role: 'Приходите просто так',
    detail: 'Отмечаться не нужно — у нас это не принято. Двери открываем с 10:30.',
    tone: 'cell-green',
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="border-b-2 border-border">
      <div className="px-5 md:px-7 py-12 md:py-16 border-b-2 border-border paper-grain">
        <span className="kicker">Контакты организации</span>
        <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3 max-w-[20ch]">
          Если что-то непонятно — <span className="text-primary">спросите</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[46ch] text-[1.02em] leading-[1.45]">
          Живые люди, а не общий ящик. Отвечаем в рабочие часы, иногда быстрее.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-[2px] grid-ink">
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

      <div className="grid md:grid-cols-2 gap-[2px] grid-ink border-t-2 border-border">
        <div className="cell-plain px-5 md:px-7 py-8">
          <span className="kicker">Адрес</span>
          <div className="font-head font-bold text-[1.2em] tracking-[-0.02em] mt-2">
            Москва, ул. Профсоюзная, 136, корпус 5
          </div>
          <p className="text-muted-foreground text-[0.88em] mt-2 leading-[1.45]">
            РБОО «Центр лечебной педагогики». Нас будет около ста человек, так что
            приходите заранее — успеете поздороваться со всеми.
          </p>
        </div>
        <div className="cell-plain px-5 md:px-7 py-8">
          <span className="kicker">Часы работы</span>
          <div className="font-head font-bold text-[1.2em] tracking-[-0.02em] mt-2">
            Пн — Пт, 09:00 — 18:00
          </div>
          <p className="text-muted-foreground text-[0.88em] mt-2 leading-[1.45]">
            Обычный график Центра. В день собрания — как получится, все будут в зале.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;