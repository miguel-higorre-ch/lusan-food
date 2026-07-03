export default function FlameLogo({ className = "", glow = false }) {
  return (
    <img
      src="/logo-lusan.png"
      alt="Lusan Food"
      className={className + " object-contain" + (glow ? " drop-shadow-[0_0_14px_rgba(255,120,0,0.7)]" : "")}
    />
  );
}
