import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ScorpionIcon = (props: IconProps) => (
  <svg {...base(props)}>
    {/* corpo */}
    <ellipse cx="12" cy="13" rx="3" ry="2.2" />
    {/* cabeça/garras */}
    <path d="M9 12.5 6 11l-2 1.5M6 11l-1.5-1.5M9 13.5 6 15l-2-1M6 15l-1.5 1.5" />
    {/* patas */}
    <path d="M10 14.5 8.5 17M12 15v2.5M14 14.5 15.5 17" />
    {/* cauda com ferrão */}
    <path d="M15 12c2-.5 3.5-2 3.5-4S17 5 15.5 5.5 14 8 15 9" />
    <path d="M15.2 5.6 17 4" />
  </svg>
);

export const CockroachIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="12" cy="12" rx="4.5" ry="6.5" />
    <path d="M12 5.5V18.5" />
    <path d="M10 4.5 8 2M14 4.5 16 2" />
    <path d="M7.8 8.5 5 8M16.2 8.5 19 8M7.5 12H4.5M16.5 12H19.5M7.8 15.5 5 16M16.2 15.5 19 16" />
  </svg>
);

export const TermiteIcon = (props: IconProps) => (
  <svg {...base(props)}>
    {/* cabeça */}
    <circle cx="6" cy="12" r="2" />
    {/* segmentos */}
    <ellipse cx="10.5" cy="12" rx="2" ry="1.6" />
    <ellipse cx="14.5" cy="12" rx="2" ry="1.6" />
    <ellipse cx="18.5" cy="12" rx="2" ry="1.6" />
    {/* antenas */}
    <path d="M5 11 3.5 9.5M5 13 3.5 14.5" />
    {/* patas */}
    <path d="M10.5 13.6V16M14.5 13.6V16M10.5 10.4V8M14.5 10.4V8" />
  </svg>
);

export const SpiderIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="8.2" r="1.4" />
    {/* 8 patas */}
    <path d="M9.5 11 6 9 4 10.5M9.5 12 5.5 12 3.5 13.5M9.5 13 6 15 4.5 17M10.5 14.5 9 17.5 9.5 20" />
    <path d="M14.5 11 18 9 20 10.5M14.5 12 18.5 12 20.5 13.5M14.5 13 18 15 19.5 17M13.5 14.5 15 17.5 14.5 20" />
  </svg>
);

export const BedbugIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="12" cy="12" rx="6" ry="5" />
    <path d="M12 7v10M6 12h12" />
    {/* antenas */}
    <path d="M9.5 7.5 8 5.5M14.5 7.5 16 5.5" />
    {/* patas laterais */}
    <path d="M6.2 10 4 9M6.2 14 4 15M17.8 10 20 9M17.8 14 20 15" />
  </svg>
);

export const FlyIcon = (props: IconProps) => (
  <svg {...base(props)}>
    {/* asas */}
    <path d="M12 11c-3-3-7-3-8 0 1 2 5 2 8 0Z" />
    <path d="M12 11c3-3 7-3 8 0-1 2-5 2-8 0Z" />
    {/* corpo */}
    <ellipse cx="12" cy="14" rx="2.2" ry="3.2" />
    {/* cabeça */}
    <circle cx="12" cy="9.5" r="1.6" />
    {/* antenas */}
    <path d="M11 8.3 10 7M13 8.3 14 7" />
    {/* patas */}
    <path d="M10.5 16 9 18M12 17v2M13.5 16 15 18" />
  </svg>
);

export const FleaIcon = (props: IconProps) => (
  <svg {...base(props)}>
    {/* corpo curvado em perfil */}
    <path d="M14 7c-4 0-7 3-7 7 0 2 1 3.5 3 4" />
    <path d="M14 7c2 0 3 1 3 2.5S15.5 12 14 12" />
    {/* cabeça */}
    <circle cx="15" cy="8" r="1.2" />
    {/* perna saltadora */}
    <path d="M10 14l2 3-1 3M9 16l-2 1M12 12l1 2" />
    {/* antenas */}
    <path d="M15.5 7 17 5.5" />
  </svg>
);

export const TickIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="12" cy="13" rx="5" ry="4" />
    {/* cabecinha */}
    <path d="M12 9V7" />
    <circle cx="12" cy="6.5" r="1" />
    {/* 8 patas curtas */}
    <path d="M7.5 11 6 10M7.2 13H5.5M7.5 15 6 16" />
    <path d="M16.5 11 18 10M16.8 13H18.5M16.5 15 18 16" />
    <path d="M9.5 10 9 8.5M14.5 10 15 8.5" />
  </svg>
);

export const AntIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="6.5" cy="12" r="1.8" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="17.5" cy="12" r="2.6" />
    {/* antenas */}
    <path d="M5.5 11 4 9M5.5 13 4 15" />
    {/* patas */}
    <path d="M12 10V7M12 14v3M10 11 8.5 9M10 13 8.5 15M14 11 15.5 9M14 13 15.5 15" />
  </svg>
);

export const BatIcon = (props: IconProps) => (
  <svg {...base(props)}>
    {/* corpo */}
    <path d="M12 9v8" />
    {/* cabeça com orelhas */}
    <path d="M10.5 8 10 5l1.5 1.5h1L14 5l-.5 3" />
    <circle cx="12" cy="9" r="1.2" />
    {/* asas */}
    <path d="M12 10c-2 1-3 0-4-1s-2-1-3 0c0 2 1 4 3 5 1 .5 2 0 2.5-1 .5 1 1 2 1.5 2" />
    <path d="M12 10c2 1 3 0 4-1s2-1 3 0c0 2-1 4-3 5-1 .5-2 0-2.5-1-.5 1-1 2-1.5 2" />
  </svg>
);

export const MosquitoIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 6v12" />
    <path d="M12 9 8 5M12 9l4-4" />
    <path d="M12 11 7 10M12 11l5-1" />
    <path d="M12 14 8 17M12 14l4 3" />
    <path d="M12 18l-2 3M12 18l2 3" />
    <path d="M13 7h5" />
    <path d="M18 7l2-2" />
    <ellipse cx="12" cy="11.5" rx="1.6" ry="3.2" />
  </svg>
);

export const MothIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 8v10" />
    <circle cx="12" cy="6.5" r="1.3" />
    <path d="M10.8 5.6 9 3.5M13.2 5.6 15 3.5" />
    <path d="M11.5 9C8 5.5 4.5 6.5 3 10c1.5 1 4.5 1.5 8.5 0" />
    <path d="M12.5 9c3.5-3.5 7-2.5 8.5 1-1.5 1-4.5 1.5-8.5 0" />
    <path d="M11.5 12C8 15.5 6 18.5 6 21c2.5-.5 4.5-2 5.5-5" />
    <path d="M12.5 12c3.5 3.5 5.5 6.5 5.5 9-2.5-.5-4.5-2-5.5-5" />
  </svg>
);

export const WoodBorerIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 20V4h14v16" />
    <path d="M8 4c1 2 1 4 0 6s-1 4 0 6" />
    <path d="M16 4c-1 2-1 4 0 6s1 4 0 6" />
    <circle cx="12" cy="8" r="1.2" />
    <circle cx="10" cy="14" r="0.9" />
    <circle cx="15" cy="16" r="0.8" />
  </svg>
);

export const WaspIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="12" cy="12" rx="2.3" ry="4.2" />
    <path d="M10.2 10h3.6M10 12h4M10.3 14h3.4" />
    <circle cx="12" cy="7" r="1.5" />
    <path d="M11 5.8 9.5 4M13 5.8 14.5 4" />
    <path d="M10 10c-3.5-3-6.5-2-7.5.5 2 1 5 1 7.5-.5Z" />
    <path d="M14 10c3.5-3 6.5-2 7.5.5-2 1-5 1-7.5-.5Z" />
    <path d="M12 16v3l1.5 2" />
  </svg>
);
