import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Preencha todos os campos!");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entraremos em contato.");
    setForm((prev) => ({ ...prev, message: "" }));
  };
  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl lg:text-6xl text-foreground uppercase mb-8 text-center">Contato</h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg">
              Fale conosco para reservas, eventos especiais ou dúvidas sobre nosso cardápio.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "(11) 99999-9999", href: "tel:+5511999999999" },
                { icon: MessageCircle, text: "WhatsApp", href: "https://wa.me/5511999999999" },
                { icon: Mail, text: "contato@pizzariadochefe.com", href: "mailto:contato@pizzariadochefe.com" },
                { icon: Instagram, text: "@pizzariadochefe", href: "https://instagram.com/pizzariadochefe" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body"
                >
                  <item.icon size={24} className="text-primary" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted border-2 border-border rounded px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Seu email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted border-2 border-border rounded px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted border-2 border-border rounded px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-display text-xl uppercase py-3 rounded hover:bg-accent transition-colors tracking-wider"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
