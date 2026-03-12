import { Clock, MapPin, Heart } from "lucide-react";
export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl lg:text-6xl text-primary-foreground uppercase mb-8 text-center">
          Sobre Nós
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary-foreground/90 font-body text-lg leading-relaxed">
            Desde 1999, a <strong className="text-secondary">Pizzaria do Chefe</strong> traz o melhor da pizza artesanal
            para a sua mesa. Nosso compromisso é usar ingredientes frescos e selecionados, massa fermentada naturalmente
            por 48 horas e molho de tomate caseiro. Cada pizza é preparada com amor e assada em forno a lenha,
            garantindo o sabor autêntico que conquistou gerações.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              title: "Horário",
              text: "Seg a Dom: 18h às 23h\nSex e Sáb: 18h às 00h",
            },
            {
              icon: MapPin,
              title: "Localização",
              text: "Rua das Pizzas, 123\nCentro - São Paulo, SP",
            },
            {
              icon: Heart,
              title: "Tradição",
              text: "+25 anos servindo as melhores pizzas da cidade",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-accent text-accent-foreground rounded-lg p-6 text-center"
            >
              <card.icon size={40} className="mx-auto mb-3 text-secondary" />
              <h3 className="font-display text-2xl uppercase mb-2">{card.title}</h3>
              <p className="font-body text-sm whitespace-pre-line">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
