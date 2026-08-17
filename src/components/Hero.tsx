import {
  PictoCalendar,
  PictoCircle,
  PictoClock,
  PictoCup,
  PictoEar,
  PictoHeart,
  PictoHome,
  PictoIceCream,
  PictoPlate,
  PictoPen,
  PictoQuestion,
  PictoSpeech,
  PictoArrow,
} from '@/components/HeroPictos';

const cellBase =
  'cell opacity-0 animate-pop [animation-fill-mode:forwards] min-h-[120px] md:min-h-0';

const tile = (i: number) => ({ animationDelay: `${0.05 + i * 0.085}s` });

const Hero = () => {
  return (
    <section
      id="top"
      aria-label="Приглашение"
      className="grid grid-cols-2 grid-flow-row-dense md:grid-flow-row md:grid-cols-6 md:grid-rows-3 gap-[2px] grid-ink border-b-2 border-border md:h-[calc(100vh-76px)] md:min-h-[600px] md:max-h-[860px]"
    >
      {/* Заголовок */}
      <div
        style={tile(0)}
        className={`${cellBase} cell-plain col-span-2 md:col-span-3 justify-center px-5 py-6 md:px-7 md:py-6`}
      >
        <h1 className="font-head font-bold leading-[1.04] tracking-[-0.035em] text-[clamp(38px,9vw,61px)]">
          Все свои.
          <br />
          Все в <em className="not-italic text-primary">сборе</em>
        </h1>
      </div>

      <div style={tile(1)} className={`${cellBase} cell-yellow`}>
        <PictoEar />
        <span className="lbl">
          слушаем
          <br />
          друг друга
        </span>
      </div>

      <div style={tile(2)} className={`${cellBase} cell-plain`}>
        <PictoSpeech />
        <span className="lbl">
          говорим
          <br />
          по делу
        </span>
      </div>

      <div style={tile(3)} className={`${cellBase} cell-blue`}>
        <PictoCup />
        <span className="lbl">
          кофе
          <br />
          не кончится
        </span>
      </div>

      <div style={tile(4)} className={`${cellBase} cell-plain col-span-2 md:col-span-1`}>
        <span className="num">01 сентября рядом</span>
        <p className="text-muted-foreground text-[1.02em] leading-[1.45] max-w-[22ch] md:self-end">
          Первое собрание года. Соберёмся всем составом.
        </p>
      </div>

      <div style={tile(5)} className={`${cellBase} cell-green`}>
        <PictoCircle />
        <span className="lbl">
          если презентации,
          <br />
          то короткие
        </span>
      </div>

      <div style={tile(6)} className={`${cellBase} cell-plain`}>
        <PictoPlate />
        <span className="lbl">
          обед
          <br />
          будет
        </span>
      </div>

      <div style={tile(7)} className={`${cellBase} cell-yellow`}>
        <PictoQuestion />
        <span className="lbl">
          задаём
          <br />
          вопросы
        </span>
      </div>

      <div style={tile(8)} className={`${cellBase} cell-plain`}>
        <PictoIceCream />
        <span className="lbl">
          и даже
          <br />
          мороженое
        </span>
      </div>

      <div
        style={tile(9)}
        className={`${cellBase} cell-blue col-span-2 md:col-span-1 gap-2`}
      >
        <span className="num">когда и где</span>
        <div>
          <div className="font-head font-bold text-[1.7em] leading-[1.1] tracking-[-0.02em]">
            31 августа
            <br />
            с 10:30
          </div>
          <div className="text-[0.85em] leading-[1.4] opacity-90">
            Профсоюзная, 136
            <br />
            корпус 5
          </div>
        </div>
      </div>

      <div style={tile(10)} className={`${cellBase} cell-plain`}>
        <PictoHome />
        <span className="lbl">
          расходимся
          <br />
          не спеша
        </span>
      </div>

      <div style={tile(11)} className={`${cellBase} cell-green`}>
        <PictoPen />
        <span className="lbl">
          строим
          <br />
          планы
        </span>
      </div>

      <div style={tile(12)} className={`${cellBase} cell-yellow`}>
        <PictoClock />
        <span className="lbl">
          начинаем
          <br />
          вовремя
        </span>
      </div>

      {/* Выломанная ячейка-кнопка */}
      <div
        style={{
          animation:
            'drop .7s cubic-bezier(.2,.9,.3,1) 1.35s backwards, sway 4.5s ease-in-out 2.1s infinite',
        }}
        className="cell bg-primary text-primary-foreground z-[3] text-left min-h-[120px] md:min-h-0 rotate-[-6deg] scale-[1.06] hover:[animation-play-state:paused] transition-transform duration-300"
      >
        <PictoArrow />
        <div>
          <div className="font-head font-bold text-[2.2em] leading-none tracking-[-0.03em]">
            Ждём всех
          </div>
        </div>
      </div>

      <div style={tile(13)} className={`${cellBase} cell-plain`}>
        <PictoHeart />
        <span className="lbl">
          делимся
          <br />
          новостями
        </span>
      </div>

      <div
        style={tile(14)}
        className={`${cellBase} cell-blue col-span-2 md:col-span-1 flex-row md:flex-col items-end md:items-stretch gap-4`}
      >
        <PictoCalendar />
        <span className="lbl">
          ставим даты
          <br />
          на год
        </span>
      </div>
    </section>
  );
};

export default Hero;