import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Software from "@/components/Software";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Projects />
        <Software />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
