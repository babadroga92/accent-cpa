import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToContact={scrollToContact} />

      <main id="top">
        <Hero scrollToContact={scrollToContact} />

        <About />

        <div className="section-divider"></div>

        <Services />

        <div className="section-divider"></div>

        <Pricing scrollToContact={scrollToContact} />

        <div className="section-divider"></div>

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}

export default App;
