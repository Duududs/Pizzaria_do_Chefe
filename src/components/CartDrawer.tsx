import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  if (!isOpen) return null;
  const handleFinish = () => {
    if (items.length === 0) {
      toast.error("Seu carrinho está vazio!");
      return;
    }
    const message = items
      .map((i) => `${i.quantity}x ${i.name} (${i.size}) - R$ ${(i.price * i.quantity).toFixed(2)}`)
      .join("\n");
    const total = `\n\nTotal: R$ ${totalPrice.toFixed(2)}`;
    const encoded = encodeURIComponent(`Olá! Gostaria de fazer o pedido:\n\n${message}${total}`);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };
  return (
    <>
      <div className="fixed inset-0 bg-foreground/50 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col">
        <div className="bg-primary p-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-primary-foreground uppercase">Seu Pedido</h2>
          <button onClick={() => setIsOpen(false)} className="text-primary-foreground hover:text-secondary transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-display text-2xl text-muted-foreground">Carrinho vazio</p>
              <p className="text-muted-foreground text-sm mt-2">Adicione pizzas do cardápio!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 bg-muted rounded-lg p-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-display text-lg uppercase">{item.name}</h4>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-muted-foreground text-sm">Tamanho: {item.size}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="bg-card p-1 rounded hover:bg-cream-dark transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-display text-lg w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="bg-card p-1 rounded hover:bg-cream-dark transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-display text-lg text-primary">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t-2 border-border p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-display text-xl uppercase">Total</span>
              <span className="font-display text-3xl text-primary">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleFinish}
              className="w-full bg-green-olive text-primary-foreground font-display text-xl uppercase py-3 rounded hover:brightness-110 transition-all tracking-wider"
            >
              Finalizar pelo WhatsApp
            </button>
            <button
              onClick={() => { clearCart(); toast.info("Carrinho limpo!"); }}
              className="w-full bg-muted text-muted-foreground font-display text-lg uppercase py-2 rounded hover:bg-cream-dark transition-colors"
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}
