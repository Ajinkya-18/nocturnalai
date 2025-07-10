
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-noct-dark text-white">
      <Hero />
      <About />
      <Services />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
