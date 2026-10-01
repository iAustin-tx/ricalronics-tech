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
import SeasonalGreeting from "@/components/SeasonalGreeting";
import { client } from "@/sanity/client";

export default async function Home() {
  const greeting = await client.fetch(
    `
      *[
        _type == "seasonalGreeting" &&
        active == true
      ] | order(_createdAt desc)[0] {
        _id,
        title,
        message,
        startDate,
        endDate,
        active
      }
    `,
    {},
    { cache: "no-store" }
  );

  return (
    <>
      <main>
        <SeasonalGreeting greeting={greeting} />
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
