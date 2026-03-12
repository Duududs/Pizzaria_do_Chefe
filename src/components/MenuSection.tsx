import { useState } from "react";
import { menuItems, MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { toast } from "sonner";
const categories = [
  { key: "todas", label: "Todas" },
  { key: "tradicionais", label: "Tradicionais" },
  { key: "especiais", label: "Especiais" },
] as const;
type Size = "P" | "M" | "G";
function PizzaCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<Size>("M");
  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.prices[size],
      image: item.image,
      size,
    });
    toast.success(`${item.name} (${size}) adicionada ao carrinho!`);
  };
  return (
    <div className="bg-card rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors group">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-primary text-primary-foreground font-display text-sm px-3 py-1 rounded uppercase">
          {item.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-2xl text-foreground uppercase">{item.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 font-body">{item.description}</p>
        <div className="flex gap-2 mt-3">
          {(["P", "M", "G"] as Size[]).map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`flex-1 py-1 rounded font-display text-lg uppercase transition-colors ${
                size === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-cream-dark"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-3xl text-primary">
            R$ {item.prices[size].toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-accent transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("todas");
  const filtered =
    activeCategory === "todas"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);
  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-5xl lg:text-6xl text-foreground uppercase">Cardápio</h2>
          <span className="font-display text-2xl text-primary uppercase hidden sm:block">Desde 1999</span>
        </div>
        <div className="flex gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-display text-lg uppercase px-5 py-2 rounded transition-colors tracking-wide ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-cream-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
