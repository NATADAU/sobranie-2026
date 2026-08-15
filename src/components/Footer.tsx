const items: { k: string; v: string; href?: string }[] = [
  { k: 'адрес', v: 'Москва, ул. Профсоюзная, 136, корпус 5' },
  { k: 'когда', v: '31 августа, 11:00' },
  { k: 'кого ждём', v: 'всех сотрудников Центра' },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-5 md:px-7 py-7">
        {items.map((i) => (
          <div key={i.k} className="flex gap-2.5 items-baseline">
            <span className="kicker">{i.k}</span>
            <span className="font-head font-medium text-[0.98em]">
              {i.href ? (
                <a href={i.href} className="rule-link">
                  {i.v}
                </a>
              ) : (
                i.v
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-border px-5 md:px-7 py-5 text-[0.78em] text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 justify-between">
        <span>РБОО «Центр лечебной педагогики» · внутреннее собрание</span>
        <span>Стулья пересчитаны вручную</span>
      </div>
    </footer>
  );
};

export default Footer;