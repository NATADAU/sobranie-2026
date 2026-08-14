// Пиктограммы hero — перенесены 1-в-1 из исходного макета «Вариант 8»

const base = {
  className: 'w-[68px] h-[68px] block self-start mt-0.5',
  viewBox: '0 0 60 60',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 5,
  'aria-hidden': true,
} as const;

export const PictoEar = () => (
  <svg {...base}>
    <circle cx="22" cy="30" r="12" />
    <path d="M40 18a17 17 0 0 1 0 24" />
    <path d="M50 12a27 27 0 0 1 0 36" />
  </svg>
);

export const PictoSpeech = () => (
  <svg {...base}>
    <path d="M6 8h48v34H26L12 54V42H6z" />
    <circle cx="21" cy="25" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="30" cy="25" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="39" cy="25" r="2.6" fill="currentColor" stroke="none" />
  </svg>
);

export const PictoCup = () => (
  <svg {...base}>
    <path d="M8 22h34v18a10 10 0 0 1-10 10H18A10 10 0 0 1 8 40z" />
    <path d="M42 26h8a7 7 0 0 1 0 14h-8" />
    <path d="M18 6v8M30 6v8" />
  </svg>
);

export const PictoCircle = () => (
  <svg {...base}>
    <circle cx="30" cy="9" r="5" />
    <circle cx="51" cy="21" r="5" />
    <circle cx="51" cy="45" r="5" />
    <circle cx="30" cy="57" r="5" />
    <circle cx="9" cy="45" r="5" />
    <circle cx="9" cy="21" r="5" />
  </svg>
);

export const PictoLines = () => (
  <svg {...base}>
    <path d="M6 12h48M6 30h34M6 48h22" />
  </svg>
);

export const PictoQuestion = () => (
  <svg {...base}>
    <path d="M18 20a12 12 0 1 1 15 11.5V38" />
    <circle cx="33" cy="50" r="3.4" fill="currentColor" stroke="none" />
  </svg>
);

export const PictoGroups = () => (
  <svg {...base}>
    <rect x="7" y="7" width="20" height="20" />
    <rect x="33" y="7" width="20" height="20" />
    <rect x="7" y="33" width="20" height="20" />
    <path d="M33 43h20" />
  </svg>
);

export const PictoHome = () => (
  <svg {...base}>
    <path d="M8 28 30 8l22 20" />
    <path d="M14 28v24h32V28" />
  </svg>
);

export const PictoPen = () => (
  <svg {...base}>
    <path d="M10 44 44 10l6 6-34 34-9 3z" />
    <path d="M36 18l6 6" />
  </svg>
);

export const PictoClock = () => (
  <svg {...base}>
    <circle cx="30" cy="30" r="22" />
    <path d="M30 14v16l11 7" />
  </svg>
);

export const PictoHeart = () => (
  <svg {...base}>
    <path d="M30 52s-22-12-22-27a11 11 0 0 1 22-5 11 11 0 0 1 22 5c0 15-22 27-22 27z" />
  </svg>
);

export const PictoCalendar = () => (
  <svg {...base}>
    <rect x="7" y="12" width="46" height="40" />
    <path d="M7 24h46M19 6v10M41 6v10" />
  </svg>
);

export const PictoPlate = () => (
  <svg {...base}>
    <circle cx="26" cy="30" r="18" />
    <circle cx="26" cy="30" r="8" />
    <path d="M52 8v44M52 8c-4 4-4 14 0 18" />
  </svg>
);

export const PictoIceCream = () => (
  <svg {...base}>
    <path d="M14 26a16 16 0 0 1 32 0z" />
    <path d="M16 30l14 24 14-24" />
  </svg>
);

export const PictoArrow = () => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    strokeWidth={6}
    aria-hidden
    className="w-10 h-10 self-start"
  >
    <path d="M8 30h42M32 12l18 18-18 18" />
  </svg>
);