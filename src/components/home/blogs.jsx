import React from "react";
import { useNavigate } from "react-router-dom";

// Example blog data
const blogData = [
  {
    id: 1,
    title: "Getting Started with Web Design",
    date: "Apr 12, 2024",
    content: "Learn the fundamentals of web design and development. Start your journey today.",
    author: "Soocily",
    image: "path/to/image1.jpg",
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
    title: "Getting Started with Web Design",
    date: "Jun 12, 2024",
    content: "Learn the fundamentals of web design and development. Start your journey today.",
    author: "Soocily",
    image: "path/to/image1.jpg",
  },
  {
    id: 7,
    title: "UX Design Principles",
    date: "Jun 11, 2024",
    content: "Understanding user experience design and its impact on modern web applications.",
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
    content: "How artificial intelligence is shaping the future of web design.",
    author: "Soocily",
    image: "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  // Function to handle click event for "View More"
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/blog"); // Navigate to the Blog page
  };

  // Function to navigate to the individual blog post page
  const handleNavigation = (id) => {
    window.scrollTo(0, 0);
    navigate(`/post/${id}`); // Navigate to individual blog page based on ID
  };

  // Sort blog data by date in descending order and get the latest 3 blogs
  const latestBlogs = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
    .slice(0, 3); // Take top 3

  return (
    <div id="blogs" className="ra-container">
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

      {/* Pass handleClick to HomePage */}
      <HomePage blogData={latestBlogs} handleClick={handleClick} handleNavigation={handleNavigation} />
    </div>
  );
};

// HomePage component which renders blog cards and the "View More" button
const HomePage = ({ blogData, handleClick, handleNavigation }) => (
  <div>
    <h1 className="ra-title">Recent Articles</h1>

    {/* Map through blogData to render blog cards */}
    <div className="ra-articles-grid">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-card">
          <div className="blog-card-header">
            <span className="blog-date">{blog.date}</span>
            <h3 className="blog-title">{blog.title}</h3>
          </div>
          <div className="blog-card-body">
            {/* Uncomment the image if needed */}
            {/* <img src={blog.image} alt={blog.title} className="blog-image" /> */}
            <p className="blog-content">{blog.content}</p>
          </div>
          <div className="blog-card-footer">
            <div className="tk">
              <span className="blog-author">Uploaded by </span>
              <span className="blog-author">{blog.author}</span>
            </div>
            <button
              className="arrow-link"
              onClick={() => handleNavigation(blog.id)} // Navigate to individual post
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

    {/* View More Button */}
    <div>
      <button className="floating-button" onClick={handleClick}>
        View more &gt; &gt;
      </button>
    </div>
  </div>
);

export default Blogs;
