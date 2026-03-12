import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CartDrawer />
    </div>
  );
};
export default Index;
