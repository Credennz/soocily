import React, { useState, useEffect, useRef  } from "react";
import { useNavigate, useParams } from "react-router-dom"; // To fetch the blog ID from the URL
import "./cblog.css";
import Footer from "../footer";
import { HashLink } from 'react-router-hash-link'; 

const BlogPost = ({ openContactModal }) => {
  const { id } = useParams(); // Fetch the blog ID dynamically from the URL
  const navigate = useNavigate(); // Always declare hooks at the top level
  const [menuActive, setMenuActive] = useState(false); // Manage menu toggle state

  const blogData = [
    {
      id: 1,
      title: "Getting Started with Web Design",
      date: "Apr 12, 2024",
      content:
        "Learn the fundamentals of web design and development. Start your journey today.",
      author: "Soocily",
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      title: "UX Design Principles",
      date: "Apr 11, 2024",
      content:
        "Understanding user experience design and its impact on modern web applications.",
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Advanced CSS Techniques",
      date: "Apr 04, 2024",
      content:
        "Master advanced CSS features and animations for modern websites.",
      author: "Soocily",
      image: "path/to/image3.jpg",
    },
    {
      id: 4,
      title: "React Components",
      date: "Apr 03, 2024",
      content: "Building reusable React components for scalable applications.",
      author: "Soocily",
      image: "path/to/image4.jpg",
    },
    {
      id: 5,
      title: "AI in Web Design",
      date: "May 27, 2024",
      content:
        "How artificial intelligence is shaping the future of web design.",
      author: "Soocily",
      image:
        "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 6,
      title: "Getting Started with Web Design",
      date: "Jun 12, 2024",
      content:
        "Learn the fundamentals of web design and development. Start your journey today.",
      author: "Soocily",
      image: "path/to/image1.jpg",
    },
    {
      id: 7,
      title: "UX Design Principles",
      date: "Jun 11, 2024",
      content:
        "Understanding user experience design and its impact on modern web applications.",
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 8,
      title: "Advanced CSS Techniques",
      date: "Jul 04, 2024",
      content: `Benefits of Advanced CSS Tricks
  CSS tricks can provide many benefits, including improved design and layout of web pages, enabling developers to create more complex responsive web applications. Overall, advanced CSS tricks can help create more polished and cross-functional websites and web applications.
  
  Several responsive and lightweight CSS frameworks are frequently in use by developers and designers that make it simpler to add visual elements like forms, buttons, panels, breadcrumbs, etc., and implement functions. It simplifies the process of creating websites. Regardless of the browser versions, these websites will work efficiently. As a result, there will be less chance of coding errors during cross browser testing.
  
  The availability of ready-made style sheet frameworks substantially speeds up project implementation and simplifies web development. Users may accomplish the required activities by spending little time studying and immersing themselves in CSS code.
  
  Another benefit is the ability to create a user interface that is both user-friendly and aesthetically pleasing, with the flexibility to change it during project updates without having to start from scratch.
  
  Best Advanced CSS Tricks and Tips
  Let’s start with our list of the cool CSS tricks and tips for 2024.

  link : https://credennz-in.vercel.app/


  
  1. Responsive CSS Grids
  While taking care of the responsive design, you need to ensure the grid is responsive. Responsive CSS grid is one of the best CSS tricks and tips that offer different ways of creating a customizable grid, irrespective of the device. The most reliable thing is that the CSS grid operates with equal or unequal column sizes.`,
      author: "Soocily",
      image:
        "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 9,
      title: "React Components",
      date: "Jul 03, 2024",
      content: "Building reusable React components for scalable applications.",
      author: "Soocily",
      image: "path/to/image4.jpg",
    },
    {
      id: 10,
      title: "AI in Web Design",
      date: "Jun 27, 2024",
      content:
        "How artificial intelligence is shaping the future of web design.",
      author: "Soocily",
      image:
        "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
  ];

  const blog = blogData.find((item) => item.id === parseInt(id)); // Find the blog matching the ID

  
//nav bar off
const menuRef = useRef(null);
useEffect(() => {
  // Listen for clicks outside the menu
  document.addEventListener("mousedown", closeMenuIfClickedOutside);

  // Clean up the event listener when the component unmounts
  return () => {
    document.removeEventListener("mousedown", closeMenuIfClickedOutside);
  };
}, []);
const closeMenuIfClickedOutside = (e) => {
  if (menuRef.current && !menuRef.current.contains(e.target)) {
    setMenuActive(false); // Close the menu
  }
};

const handleLinkClick = () => {
  setMenuActive(false); // Close the menu when a link is clicked
};
  // If no blog is found, render an error message
  if (!blog) {
    return (
      <div className="blog-not-found">
        <p>Blog not found</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }
  const convertLinksToAnchorTags = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  
  const scrollWithOffset = (el) => {
    const offset = 150;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="page-layout">
      {/* Header Navigation */}
      <nav className="hb-nav2">
        <div className="hb-logo">
          <img src="../img/logosocily.png" alt="Soocily" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`hb-nav-links ${menuActive ? "active" : ""}`}ref={menuRef}>
        <HashLink to="/#services" class="nav-link"  scroll={scrollWithOffset}onClick={handleLinkClick}>Services</HashLink>

<HashLink to="/#about"class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>About Us</HashLink>
<HashLink to="/#in" class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>Industries</HashLink>
<HashLink to="/#whyus" class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>Why Us</HashLink>
<HashLink to="/#blogs" class="nav-link"  scroll={scrollWithOffset}onClick={handleLinkClick}>Blogs</HashLink>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            className="hb-contact-btn"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="blog-page-container">
        <button className="back-button" onClick={goBack}>
          <div className="back-icon-container">
            <img
              src="https://www.svgrepo.com/show/101168/go-back-arrow.svg"
              className="back-icon"
              alt="Back icon"
            />
          </div>
          <span className="back-text">Back</span>
        </button>

        <article className="blog-preview-card">
          <div className="blog-date-badge">{blog.date}</div>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-excerpt">{blog.content.substring(0, 100)}...</p>
          <hr className="blog-divider" />
          <div className="author-info">
            <p className="author-label">
              <b>Uploaded by</b>
            </p>
            <p className="author-name">{blog.author}</p>
          </div>
        </article>

        <article className="blog-content-card">
          <p
            className="blog-text"
            dangerouslySetInnerHTML={{
              __html: convertLinksToAnchorTags(blog.content),
            }}
          />
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPost;
