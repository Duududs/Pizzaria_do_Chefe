import calabresaImg from "@/assets/Calabresa.png";
import frangoCatupiryImg from "@/assets/Frango c Catupiry.png";
import margheritaImg from "@/assets/Margherita.png";
import pepperoniImg from "@/assets/Pepperoni.png";
import portuguesaImg from "@/assets/Portuguesa.png";
import quatroQueijosImg from "@/assets/Quatro Queijos.png";
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: { P: number; M: number; G: number };
  image: string;
  category: "tradicionais" | "especiais" | "doces";
}
export const menuItems: MenuItem[] = [
  {
    id: "margherita",
    name: "Margherita",
    description: "Molho de tomate, mussarela de búfala, manjericão fresco e azeite",
    prices: { P: 32, M: 42, G: 55 },
    image: margheritaImg,
    category: "tradicionais",
  },
  {
    id: "calabresa",
    name: "Calabresa",
    description: "Calabresa fatiada, cebola, azeitonas e mussarela",
    prices: { P: 30, M: 40, G: 52 },
    image: calabresaImg,
    category: "tradicionais",
  },
  {
    id: "4queijos",
    name: "Quatro Queijos",
    description: "Mussarela, gorgonzola, parmesão e catupiry",
    prices: { P: 35, M: 45, G: 58 },
    image: quatroQueijosImg,
    category: "especiais",
  },
  {
    id: "portuguesa",
    name: "Portuguesa",
    description: "Presunto, ovos, cebola, azeitonas, ervilha e mussarela",
    prices: { P: 33, M: 43, G: 56 },
    image: portuguesaImg,
    category: "tradicionais",
  },
  {
    id: "frango-catupiry",
    name: "Frango c/ Catupiry",
    description: "Frango desfiado, catupiry, milho e mussarela",
    prices: { P: 34, M: 44, G: 57 },
    image: frangoCatupiryImg,
    category: "especiais",
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    description: "Pepperoni importado, mussarela e molho de tomate especial",
    prices: { P: 36, M: 46, G: 60 },
    image: pepperoniImg,
    category: "especiais",
  },
];
