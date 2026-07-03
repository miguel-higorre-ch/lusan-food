import { Clock, Sparkles, ShieldCheck } from "lucide-react";

export const WA_LINK =
  "https://wa.me/59160341419?text=Hola%20Lusan%20Food%2C%20quiero%20hacer%20un%20pedido";

export const MENU_ITEMS = [
  {
    name: "La Suprema",
    desc: "Papa frita, chorizo, queso muzarella derretido, alitas de pollo, costillas de cerdo, tocino",
    price: "89",
    tag: "Más pedido",
    image: "/images/menu/la-suprema.jpeg",
  },
  {
    name: "La Titular",
    desc: "Papa frita, chorizo, queso muzarella derretido, alitas de pollo, costillas de cerdo",
    price: "38",
    tag: null,
    image: "/images/menu/la-titular.jpeg",
  },
  {
    name: "La Clasica",
    desc: "Papa frita, chorizo, queso muzarella derretido",
    price: "21",
    tag: null,
    image: "/images/menu/la-clasica.jpeg",
  },
  // Removed: Papas Lusan, Wrap Picante, Limonada de Coco
];

export const VALUES = [
  {
    icon: Clock,
    title: "Rápido",
    desc: "Tu pedido en la puerta de tu casa en tiempo récord.",
  },
  {
    icon: Sparkles,
    title: "Fresco",
    desc: "Ingredientes preparados el mismo día, sin atajos.",
  },
  {
    icon: ShieldCheck,
    title: "Delicioso",
    desc: "Recetas propias hechas para antojar de verdad.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Camila R.",
    quote: "La Suprema es una bomba de sabor — perfecta para compartir.",
    stars: 5,
  },
  {
    name: "Diego M.",
    quote:
      "La Titular llegó caliente y con la porción justa; volveré a pedirla.",
    stars: 5,
  },
  {
    name: "Valeria T.",
    quote: "La Clasica tiene ese toque casero que me encanta.",
    stars: 4,
  },
];
