import React, { useState, useEffect, useRef  } from "react";
import "../blog/blog.css";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ContactModal from "../contactoverlay"
const Blog = ({ openContactModal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [menuActive, setMenuActive] = useState(false);
  const blogsPerPage = 8;
  const toggleButtonRef = useRef(null);

  // Blog data
  const blogData = [
    {
      id: 1,
      title: "Getting Started with Web Design",
      date: "Apr 12, 2024",
      content: "Learn the fundamentals of web design and development. Start your journey today.",
      author: "Soocily",
      image: "path/to/image1.png",
    },
    {
      id: 2,
      title: "UX Design Principles",
      date: "Apr 11, 2024",
      content: "Understanding user experience design and its impact on modern web applications.",
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Advanced CSS Techniques",
      date: "Apr 04, 2024",
      content: "Master advanced CSS features and animations for modern websites.",
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
      content: "How artificial intelligence is shaping the future of web design.",
      author: "Soocily",
      image: "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 6,
      title: "The Ultimate Guide to Shoppable Ads:",
      date: "Dec 03, 2024",
      content: "In today’s fast-paced digital world, capturing a consumer’s attention and converting it into a sale often feels like threading a needle. ",
      author: "Soocily",
      image: "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 7,
      title: "Adapting to AI-Driven Search",
      date: "Dec 01, 2024",
      content: "The rise of AI-powered platforms like ChatGPT, Gemini, and Bard is reshaping how people search for and consume information.",
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 8,
      title: "Advanced CSS Techniques",
      date: "Jul 04, 2024",
      content: "Master advanced CSS features and animations for modern websites.",
      author: "Soocily",
      image: "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 9,
      title: "The Rise of UGC Ads and Influencer Marketing",
      date: "Dec 02, 2024",
      content: " User-Generated Content (UGC) and Influencer Marketing have emerged as powerful tools for creating impactful marketing campaigns.",
      author: "Soocily",
      image: "path/to/image4.jpg",
    },
    {
      id: 10,
      title: "Social media marketing plan",
      date: "Dec 02, 2024",
      content: "The digital marketing landscape is undergoing a transformative shift, driven by advancements in technology, changing consumer behaviours, and the rise of new platforms. ",
      author: "Soocily",
      image: "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
  ];

  
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
  if (
    menuRef.current &&
    !menuRef.current.contains(e.target) &&
    toggleButtonRef.current !== e.target &&
    !toggleButtonRef.current.contains(e.target)
  ) {
    setMenuActive(false); // Close the menu
  }
};

const handleLinkClick = () => {
  setMenuActive(false); // Close the menu when a link is clicked
};

  // Sort blogs by date (latest first)
  const sortedBlogs = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Featured Blog (latest blog)
  const featuredBlog = sortedBlogs[0];

  // Blogs for cards (excluding featured blog)
  const cardBlogs = sortedBlogs.slice(1);

  // Pagination logic for blogs (excluding featured blog)
  const totalPages = Math.ceil(cardBlogs.length / blogsPerPage);
  const getBlogsForPage = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return cardBlogs.slice(startIndex, endIndex);
  };

  // Pagination buttons logic
  const visiblePages = 5; // Number of pages to display at once
  const getPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }

    if (endPage < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
// Scroll to top on page load
useEffect(() => {
  // Scrolls to the top of the page when the component loads
}, [currentPage]); // Effect will run whenever the page changes (i.e., when the currentPage state is updated)

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    console.log("hii");
    window.scrollTo(0, 0);
    navigate(`/post/${id}`); // Navigate to the individual blog post page
  };

  const scrollWithOffset = (el) => {
    const offset = 150;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-toggle')) {
        setMenuActive(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  
  
  return (
    <div>
      {/* Header Navigation */}
      <nav className="hb-nav2">
        <div className="hb-logo">
          <HashLink to="/#header">
            <img src="img/logosocily.png" alt="Soocily" />
          </HashLink>
        </div>
        <div className="menu-toggle" ref={toggleButtonRef} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`hb-nav-links ${menuActive ? "active" : ""}`}ref={menuRef}>
        
  {/* Link to Home and Services section */}
  <HashLink to="/#services" class="nav-link"  scroll={scrollWithOffset}onClick={handleLinkClick}>Services</HashLink>

  <HashLink to="/#about"class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>About Us</HashLink>
  <HashLink to="/#in" class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>Industries</HashLink>
  <HashLink to="/#whyus" class="nav-link"  scroll={scrollWithOffset} onClick={handleLinkClick}>Why Us</HashLink>
  <HashLink to="/#blogs" class="nav-link"  scroll={scrollWithOffset}onClick={handleLinkClick}>Blogs</HashLink>

  <HashLink
            to="/#contact"
            onClick={(e) => {
              e.preventDefault();
              if (openContactModal) openContactModal();
              else console.error("openContactModal is not passed as a prop.");
            }}
             className="hb-contact-btn"
          >
            Contact
          </HashLink>
</div>
      </nav>

      {/* Featured Blog Section */}
      <div className="ccontainer">
        <div
          className="featured-blog"
          style={{ backgroundImage: `url(${featuredBlog.image})` }}
        >
          <span className="date">{featuredBlog.date}</span>
          <div className="ck">
            <div>
              <h3>{featuredBlog.title}</h3>
              <p>{featuredBlog.content}</p>
            </div>
            <button
              className="blog-read-more"
              onClick={() => handleNavigation(featuredBlog.id)}
            >
              Read the blog..
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="bcontainer">
        <div className="blog-grid">
        <center>
        <div className="ra-blogs">
          <div className="ra-logox">
            <img
              src="../img/blogs_logo.svg"
              alt="blogs Logo"
              className="ra-blogs-logo"
            />
          </div>
          <div className="ra-logo-text">
            <span>Blogs</span>
          </div>
        </div>
      </center>
          <div className="blog-n-t">
            <h2>Recent Blog Posts</h2>
          </div>
          <div className="blog-list">
            {getBlogsForPage().map((blog) => (
              <div className="blog-card" key={blog.id}>
                <span className="blog-date">{blog.date}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-content1">{blog.content}</p>
                <div className="blog-meta">
                  <div className="tk">
                    <span className="blog-author">Uploaded by </span>
                    <span className="blog-author">{blog.author}</span>
                  </div>
                  <button
                    className="arrow-link"
                    onClick={() => handleNavigation(blog.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {getPagination().map((page, index) => (
            <button
              key={index}
              className={`page-btn ${page === currentPage ? "active" : ""}`}
              onClick={() => {
                if (page !== "...") setCurrentPage(page);
              }}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="banner">
        <img
          src="https://sistemaggedeensino.com.br/portal/wp-content/uploads/2020/02/marketing-digital-banner-post.png"
          alt="Banner Image"
        />
      </div>

      {/* Footer */}
      <Footer openContactModal={openContactModal} />
    </div>
  );
};

export default Blog;
