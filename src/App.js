import React, { useState } from "react";
import "./App.css";
import Footer from "./components/home/footer";
import Faq from "./components/home/faq";
import Blogs from "./components/home/blogs";
import Testimonials from "./components/home/testimonials";
import Comparison from "./components/home/comparison";
import Industry from "./components/home/industry";
import About from "./components/home/about";
import Service from "./components/home/service";
import Header from "./components/home/header";
import LogoCarousel from "./components/home/hlogo";
import ContactModal from "./components/home/contactoverlay";
import "./components/home/footer.css";
import "./components/home/faq.css";
import "./components/home/blogs.css";
import "./components/home/testimonials.css";
import "./components/home/comparison.css";
import "./components/home/industry.css";
import "./components/home/about.css";
import "./components/home/service.css";
import "./components/home/header.css";
import "./components/home/hlogo.css";

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Function to open the ContactModal
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  // Function to close the ContactModal
  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="App">
      {/* Pass the openContactModal function to the Header component */}
      <Header openContactModal={openContactModal} />
      <LogoCarousel />
      <Service />
      <About openContactModal={openContactModal} />
      <Industry />
      <Comparison />
      <Testimonials />
      <Blogs />
      <Faq />
      <Footer />

      {/* Conditionally render the ContactModal */}
      {isContactModalOpen && (
        <ContactModal
          isOpen={isContactModalOpen}
          closeModal={closeContactModal}
        />
      )}
    </div>
  );
}

export default App;
