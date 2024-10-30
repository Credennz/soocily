import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/home/footer";
import "./components/home/footer.css";
import Faq from "./components/home/faq";
import "./components/home/faq.css";
import Blogs from "./components/home/blogs";
import "./components/home/blogs.css";
import Testimonials from "./components/home/testimonials";
import "./components/home/testimonials.css";
import Comparison from "./components/home/comparison";
import "./components/home/comparison.css";
import Industry from "./components/home/industry";
import "./components/home/industry.css";
import About from "./components/home/about";
import "./components/home/about.css";
import Service from "./components/home/service";
import "./components/home/service.css";
import Header from "./components/home/header";
import "./components/home/header.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <About />
      <Industry />
      <Comparison />
      <Testimonials />
      <Blogs />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
