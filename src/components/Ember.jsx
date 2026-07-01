export default function Ember({ delay = 0, left = 50, size = 8 }) {
  return (
    <span
      className="absolute rounded-full pointer-events-none animate-emberRise"
      style={{
        left: `${left}%`,
        bottom: "-10px",
        width: size,
        height: size,
        background: "radial-gradient(circle, #FFD84D 0%, #FF6A00 70%, transparent 100%)",
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    />
  );
}
