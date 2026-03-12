export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative overflow-hidden bg-background">
      <img
        src="/images/hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-foreground/58" aria-hidden="true" />
      <div
        className="absolute inset-y-0 left-0 w-[62%]"
        style={{ background: "linear-gradient(90deg, rgba(247,244,238,0.96) 0%, rgba(247,244,238,0.88) 34%, rgba(247,244,238,0.58) 62%, rgba(247,244,238,0.18) 82%, rgba(247,244,238,0) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/24 via-transparent to-background/36" aria-hidden="true" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative grid min-h-[78vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-20">
          <p className="text-primary font-display text-2xl tracking-widest uppercase animate-fade-in">
            Pizzaria Artesanal
          </p>
          <h1 className="text-foreground font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] uppercase mt-3 mb-5 animate-enter">
            Sabor de
            <span className="block text-primary">Verdade</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg sm:text-xl mb-8 max-w-xl animate-fade-in">
            Pizzas assadas no forno, ingredientes frescos e entrega rápida para matar sua fome sem enrolação.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in">
            <button
              onClick={scrollToMenu}
              className="bg-primary text-primary-foreground font-display text-xl uppercase px-8 py-3 rounded hover:brightness-110 transition-all tracking-wider"
            >
              Ver Cardápio
            </button>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground font-display text-xl uppercase px-8 py-3 rounded hover:brightness-110 transition-all tracking-wider"
            >
              Pedir Agora
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
