export default function Footer() {
  return (
    <>
      <div className="checker-border h-[var(--checker-size)] w-full" />
      <footer className="bg-primary py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground font-display text-xl uppercase">
            Pizzaria do Chefe © {new Date().getFullYear()}
          </p>
          <p className="text-primary-foreground/70 font-body text-sm mt-1">
            Servindo pizzas artesanais desde 1999
          </p>
        </div>
      </footer>
    </>
  );
}
