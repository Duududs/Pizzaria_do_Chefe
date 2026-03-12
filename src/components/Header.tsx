import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <>
      <div className="bg-primary py-1 text-center">
        <p className="text-primary-foreground text-sm font-body tracking-wider uppercase">
          Desde 1999 — Pizzas Artesanais — Delivery & Retirada — Aberto 7 dias
          por semana
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-card border-b-2 border-primary">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-foreground"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <nav className="hidden lg:flex items-center gap-6 font-display text-lg uppercase tracking-wide">
            <button
              onClick={() => scrollTo("menu")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollTo("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollTo("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src="/logo.png"
              alt="Pizza Restaurant"
              className="h-16 w-auto"
            />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-primary text-primary-foreground px-4 py-2 rounded font-display text-lg uppercase tracking-wide hover:bg-accent transition-colors"
          >
            <ShoppingCart size={20} className="inline mr-2" />
            Pedido
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold font-body">
                {totalItems}
              </span>
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-3 font-display text-lg uppercase">
            <button
              onClick={() => scrollTo("menu")}
              className="text-left text-foreground hover:text-primary"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollTo("sobre")}
              className="text-left text-foreground hover:text-primary"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollTo("contato")}
              className="text-left text-foreground hover:text-primary"
            >
              Contato
            </button>
          </nav>
        )}
      </header>
      <div className="checker-border h-[var(--checker-size)] w-full" />
    </>
  );
}
