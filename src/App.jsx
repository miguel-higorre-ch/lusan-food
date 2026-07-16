import { useState, useEffect } from "react";
import {
  Flame,
  MessageCircle,
  Star,
  MapPin,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import FlameLogo from "./components/FlameLogo.jsx";
import Ember from "./components/Ember.jsx";
import TikTokIcon from "./components/TikTokIcon.jsx";
import { WA_LINK, generateWhatsAppLink, MENU_ITEMS, VALUES, TESTIMONIALS, SOCIAL } from "./data.js";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("stats")) {
      setShowStats(true);
      const stored = localStorage.getItem("lusan_visits") || "0";
      const count = Number(stored) + 1;
      localStorage.setItem("lusan_visits", String(count));
      setVisits(count);
    }
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ink text-white font-sans overflow-x-hidden">
      {/* Nav */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-md shadow-[0_4px_30px_rgba(255,90,0,0.15)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlameLogo className="w-10 h-11" />
            <span className="font-display font-extrabold tracking-tight text-lg">
              LUSAN{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-flameGold to-flameRed">
                FOOD
              </span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <button
              onClick={() => scrollTo("menu")}
              className="hover:text-flameOrange transition-colors"
            >
              Menú
            </button>
            <button
              onClick={() => scrollTo("nosotros")}
              className="hover:text-flameOrange transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollTo("pedidos")}
              className="hover:text-flameOrange transition-colors"
            >
              Pedidos
            </button>
            <button
              onClick={() => scrollTo("opiniones")}
              className="hover:text-flameOrange transition-colors"
            >
              Opiniones
            </button>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-flameRed to-flameGold text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-[0_6px_20px_rgba(255,120,0,0.4)] hover:shadow-[0_8px_28px_rgba(255,120,0,0.6)] hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={16} /> Pedir ahora
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 px-6 py-6 flex flex-col gap-4 text-white/90">
            <button onClick={() => scrollTo("menu")} className="text-left">
              Menú
            </button>
            <button onClick={() => scrollTo("nosotros")} className="text-left">
              Nosotros
            </button>
            <button onClick={() => scrollTo("pedidos")} className="text-left">
              Pedidos
            </button>
            <button onClick={() => scrollTo("opiniones")} className="text-left">
              Opiniones
            </button>
            <a
              href={WA_LINK}
              className="flex items-center gap-2 bg-gradient-to-r from-flameRed to-flameGold text-black font-bold text-sm px-5 py-3 rounded-full justify-center mt-2"
            >
              <MessageCircle size={16} /> Pedir por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,90,0,0.18),transparent_60%)]" />
        {[...Array(10)].map((_, i) => (
          <Ember
            key={i}
            delay={i * 0.6}
            left={5 + i * 9}
            size={6 + (i % 3) * 4}
          />
        ))}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <FlameLogo
            className="w-52 h-60 md:w-80 md:h-72 animate-floatSlow animate-glowPulse mb-6"
            glow
          />
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            LUSAN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-flameGold via-flameOrange to-flameRed">
              FOOD
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 font-medium tracking-wide">
            Hecho para antojar.
          </p>
          <p className="mt-3 max-w-md text-white/50 text-sm md:text-base">
            Sabor casero, ingredientes frescos y ese toque que te hace pedir de
            nuevo.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-flameRed to-flameGold text-black font-bold px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(255,120,0,0.45)] hover:shadow-[0_14px_38px_rgba(255,120,0,0.65)] hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={20} /> Pedir por WhatsApp
            </a>
            <button
              onClick={() => scrollTo("menu")}
              className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-full font-semibold text-white/80 hover:bg-white/5 hover:border-white/40 transition-all"
            >
              Ver menú
            </button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/35">
            Pedidos: 60341419
          </p>
        </div>
      </section>

      {/* Value props */}
      <section
        id="nosotros"
        className="relative py-24 px-6 bg-gradient-to-b from-ink to-ink2"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-flameOrange font-semibold">
              Por qué Lusan Food
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              La receta detrás del antojo
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="card-3d bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-flameGold to-flameRed flex items-center justify-center shadow-[0_8px_20px_rgba(255,120,0,0.4)]">
                  <v.icon size={26} className="text-black" />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-flameOrange font-semibold">
              Nuestro menú
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              No te quedes con las ganas, pide tu favorito
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item, i) => (
              <div
                key={i}
                className="card-3d relative bg-gradient-to-b from-[#171310] to-[#0d0b09] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
              >
                <div className="h-56 md:h-64 relative flex items-center justify-center bg-gradient-to-br from-[#3a1a05] via-[#5c2200] to-ink">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} — imagen`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Flame size={48} className="text-flameGold/70" />
                  )}
                  <div className="absolute inset-0 bg-black/25" />
                  {item.tag && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide bg-gradient-to-r from-flameRed to-flameGold text-black px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-lg leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-display font-extrabold text-flameGold whitespace-nowrap">
                      Bs {item.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    {item.desc}
                  </p>
                  <a
                    href={generateWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-flameOrange/40 text-flameGold font-semibold text-sm py-2.5 rounded-full hover:bg-flameOrange/10 transition-all"
                  >
                    <MessageCircle size={15} /> Agregar al pedido
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="relative py-14 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative bg-gradient-to-r from-flameRed via-flameOrange to-flameGold shadow-[0_25px_60px_rgba(255,100,0,0.35)]">
          <div className="absolute -right-6 -top-6 opacity-20">
            <FlameLogo className="w-40 h-44" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10 md:px-12">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-black">
                Combo La Suprema
              </h3>
              <p className="text-black/70 font-medium mt-1">
                Papa frita, chorizo, queso muzarella derretido, alitas de pollo,
                costillas de cerdo, tocino + 2 gaseosas de 500ml.{" "}
                <span className="font-bold">Bs 89</span>
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white font-bold px-7 py-3.5 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all whitespace-nowrap"
            >
              <MessageCircle size={18} /> Pedir combo
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp order section */}
      <section id="pedidos" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C4A] mb-6 shadow-[0_10px_30px_rgba(37,211,102,0.4)]">
            <MessageCircle size={30} className="text-white" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Pide directo por WhatsApp
          </h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Escríbenos, arma tu pedido y te confirmamos el tiempo de entrega al
            instante.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C4A] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all"
          >
            <MessageCircle size={22} /> 60341419
          </a>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm mt-6">
            <MapPin size={15} /> Delivery en toda la ciudad
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="opiniones"
        className="relative py-24 px-6 bg-gradient-to-b from-ink2 to-ink"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-flameOrange font-semibold">
              Opiniones
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="card-3d bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded-2xl p-7 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={
                        s < t.stars
                          ? "text-flameGold fill-flameGold"
                          : "text-white/20"
                      }
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 pt-14 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FlameLogo className="w-7 h-8" />
              <span className="font-display font-extrabold">LUSAN FOOD</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Hecho para antojar. Comida rápida con sabor casero, entregada
              donde estés.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/70">
              Horario
            </h4>
            <p className="text-white/45 text-sm"></p>
            <p className="text-white/45 text-sm">16:30 pm – 21:00 pm</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white/70">
              Contacto
            </h4>
            <a
              href={WA_LINK}
              className="flex items-center gap-2 text-white/45 text-sm hover:text-flameOrange transition-colors mb-2"
            >
              <MessageCircle size={15} /> Pedidos: 60341419
            </a>
            <div className="flex gap-3 mt-3">
              
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-flameOrange hover:text-flameOrange transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SOCIAL.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-flameOrange hover:text-flameOrange transition-colors"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} Lusan Food. Todos los derechos
          reservados.
          {showStats && (
            <span className="block mt-1 text-flameOrange/60 font-mono text-[10px]">
              👁 visitas: {visits}
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}
