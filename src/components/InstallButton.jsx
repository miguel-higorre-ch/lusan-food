import { Download } from "lucide-react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import AnimatedBorder from "./AnimatedBorder.jsx";

export default function InstallButton() {
  const { isInstallable, isInstalled, promptInstall, isIOS } = usePWAInstall();

  // Don't show if already installed
  if (isInstalled) {
    return null;
  }

  const handleClick = () => {
    if (isIOS) {
      // For iOS, show instructions to add to home screen
      alert(
        "Para instalar la app en iOS:\n\n1. Toca el botón compartir (cuadrado con flecha)\n2. Desliza hacia abajo y toca 'Agregar a inicio'\n3. Toca 'Agregar' para confirmar"
      );
    } else if (isInstallable) {
      promptInstall();
    } else {
      // Not yet installable - show info
      alert(
        "La app se instalará cuando estés listo.\n\nEn Android:\n- Espera unos segundos y recarga la página\n- O usa el menú del navegador (3 puntos) → 'Instalar app'\n\nEn iOS:\n- Usa el botón compartir → 'Agregar a inicio'"
      );
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-gradient-to-r from-flameRed to-flameGold text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_6px_20px_rgba(255,120,0,0.4)] hover:shadow-[0_8px_28px_rgba(255,120,0,0.6)] hover:-translate-y-0.5 transition-all"
      >
        <Download size={16} /> Instalar App
      </button>
      <AnimatedBorder size={200} duration={3} delay={0} rounded="rounded-full" />
    </div>
  );
}
