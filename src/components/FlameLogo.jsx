export default function FlameLogo({ className = "", glow = false }) {
  return (
    <svg viewBox="0 0 220 240" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD84D" />
          <stop offset="45%" stopColor="#FF8A00" />
          <stop offset="100%" stopColor="#E8380D" />
        </linearGradient>
        {glow && (
          <filter id="flameGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <g filter={glow ? "url(#flameGlow)" : undefined}>
        <path
          d="M110 8c6 22-14 30-22 46-9 18 2 34 16 34 18 0 22-18 16-32 20 10 30 34 18 56-10 19-32 28-54 22C42 126 28 104 34 80c4-16 16-28 26-40C68 28 82 14 110 8z"
          fill="url(#flameGrad)"
        />
        <path
          d="M18 150c30-14 60-6 82 6 26 14 52 18 78 4-8 24-34 40-64 42-38 3-70-14-88-40-4-6-6-8-8-12z"
          fill="url(#flameGrad)"
          opacity="0.95"
        />
        <path
          d="M40 178c26-6 50 2 70 12 22 11 46 12 66-2-10 20-32 32-58 32-32 0-60-16-78-42z"
          fill="url(#flameGrad)"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
