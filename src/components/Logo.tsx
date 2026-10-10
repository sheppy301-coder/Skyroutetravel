interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 40, className = '', showText = true, variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const subColor = variant === 'light' ? '#59a4ff' : '#2f80ff';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="logoBg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e6feb" />
              <stop offset="1" stopColor="#0d4ac8" />
            </linearGradient>
            <linearGradient id="logoAccent" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#a8c9ff" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="48" height="48" rx="13" fill="url(#logoBg)" />

          {/* Flight path arc */}
          <path
            d="M10 36 Q24 6 38 18"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="2.5 3"
          />

          {/* Paper plane — geometric, forward-leaning */}
          <g>
            {/* Main triangle body */}
            <path d="M38 20 L13 12 L21 24 Z" fill="url(#logoAccent)" />
            {/* Right wing fold */}
            <path d="M38 20 L21 24 L28 31 Z" fill="#ffffff" opacity="0.85" />
            {/* Center crease line */}
            <path d="M38 20 L21 24" stroke="#1e6feb" strokeWidth="0.8" strokeLinecap="round" />
            {/* Tail notch */}
            <path d="M21 24 L18 28 L23 26 Z" fill="#1e6feb" opacity="0.15" />
          </g>

          {/* Departure dot */}
          <circle cx="10" cy="36" r="2" fill="#a8c9ff" opacity="0.5" />
          <circle cx="10" cy="36" r="1" fill="#ffffff" opacity="0.8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${textColor} font-bold text-lg tracking-tight`}>Skyroute</span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: subColor }}>Travel</span>
        </div>
      )}
    </div>
  );
}
