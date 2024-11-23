import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
import Blog from "./components/home/blog/blog";
import BlogPost from "./components/home/blog/cblog";
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

  // Open Contact Modal
  const openContactModal = () => setIsContactModalOpen(true);

  // Close Contact Modal
  const closeContactModal = () => setIsContactModalOpen(false);

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the default jump behavior
  
      const targetId = this.getAttribute('href').slice(1); // Get the target section ID
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 300, // Scroll to the target minus 300px offset
          behavior: 'smooth' // Smooth scrolling
        });
      }
    });
  });

  return (
    <div className="App">
      <Router>
       
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <> <Header openContactModal={openContactModal} />
                <LogoCarousel />
                <Service />
                <About openContactModal={openContactModal} />
                <Industry />
                <Comparison />
                <Testimonials />
                <Blogs />
                <Faq />
                <Footer />
              </>
            }
          />
          {/* Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
        {/* Contact Modal */}
        {isContactModalOpen && (
          <ContactModal isOpen={isContactModalOpen} closeModal={closeContactModal} />
        )}
      </Router>
    </div>
  );
}

export default App;
