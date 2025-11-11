import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Teachers } from "./components/Teachers";
import { Gallery } from "./components/Gallery";
import { Admissions } from "./components/Admissions";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Teachers />
      <Gallery />
      <Admissions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}