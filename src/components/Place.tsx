import { Map } from 'lucide-react';

const Place = () => {
  return (
    <section id="place" className="border-b-2 border-border">
      <div className="grid md:grid-cols-2 gap-[2px] grid-ink">
        <div className="reveal cell-plain px-5 md:px-7 py-12 md:py-16 flex flex-col justify-center">
          <span className="kicker">Дата, время и место</span>
          <h2 className="font-head font-bold text-[clamp(30px,6vw,52px)] leading-[1.05] tracking-[-0.03em] mt-3">
            31 августа,
            <br />
            <span className="text-primary">11:00</span>, Профсоюзная 136к5
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[42ch] text-[1.02em] leading-[1.45]">
            Корпус 5 — в глубине двора. Если заблудились, спросите на вахте.
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
    </section>
  );
};

export default Place;
