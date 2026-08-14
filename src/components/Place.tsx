import { CalendarDays, Clock, Map, MapPin, Users, type LucideIcon } from 'lucide-react';

const facts: { icon: LucideIcon; k: string; v: string; note: string }[] = [
  {
    icon: CalendarDays,
    k: 'Дата',
    v: '27 августа',
    note: 'Четверг, до сентября ещё успеем всё обсудить',
  },
  {
    icon: Clock,
    k: 'Время',
    v: 'Начало в 11:00',
    note: 'Начинаем вовремя, дальше по программе',
  },
  {
    icon: MapPin,
    k: 'Место',
    v: 'Профсоюзная, 136к5',
    note: 'Ищите корпус 5 — он в глубине двора',
  },
  {
    icon: Users,
    k: 'Кого ждём',
    v: 'Всех сотрудников',
    note: 'Около ста человек — приходите просто так',
  },
];

const Place = () => {
  return (
    <section id="place" className="border-b-2 border-border">
      <div className="grid md:grid-cols-2 gap-[2px] grid-ink">
        <div className="reveal cell-plain px-5 md:px-7 py-12 md:py-16 flex flex-col justify-center">
          <span className="kicker">Дата, время и место</span>
          <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3">
            27 августа,
            <br />
            <span className="text-primary">11:00</span>, Профсоюзная 136к5
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[42ch] text-[1.02em] leading-[1.45]">
            Если заблудились — идите на запах кофе, он ведёт точнее любой навигации.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="https://yandex.ru/maps/?text=Москва, улица Профсоюзная, 136 корпус 5"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-border px-6 py-3.5 font-head font-bold text-[1em] flex items-center gap-2 no-underline text-foreground hover:bg-secondary transition-colors"
            >
              <Map size={20} />
              Как добраться
            </a>
          </div>
        </div>

        <div className="cell-yellow p-5 md:p-7 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}hall.jpg`}
            alt="Геометрическая иллюстрация: полный зал сотрудников на собрании"
            loading="lazy"
            className="w-full max-w-[460px] border-2 border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] grid-ink border-t-2 border-border">
        {facts.map((f) => (
          <div
            key={f.k}
            className="reveal cell-plain px-5 py-7 group hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-2 text-primary">
              <f.icon size={22} />
              <span className="kicker text-muted-foreground">{f.k}</span>
            </div>
            <div className="font-head font-bold text-[1.15em] tracking-[-0.02em] mt-2 leading-tight">
              {f.v}
            </div>
            <p className="text-[0.85em] text-muted-foreground mt-2 leading-[1.4]">
              {f.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Place;