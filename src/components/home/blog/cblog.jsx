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
      title: "The Ultimate Guide to Shoppable Ads: Benefits, Platforms, and Strategies for Success",
      date: "Dec 03, 2024",
      content:`The Ultimate Guide to Shoppable Ads: Benefits, Platforms, and Strategies for Success
In today’s fast-paced digital world, capturing a consumer’s attention and converting it into a sale often feels like threading a needle. Enter shoppable ads—a revolutionary tool that bridges the gap between discovery and purchase. These interactive ads allow consumers to shop directly from the advertisement, streamlining the buying process and shortening the customer journey. Supported by platforms like Instagram, Facebook, YouTube, TikTok, and Pinterest, shoppable ads are reshaping the landscape of digital marketing.
This comprehensive guide explores what shoppable ads are, the benefits they offer, and the strategies required to craft a winning shoppable ad campaign.

What Are Shoppable Ads?
Shoppable ads are a form of interactive digital advertising that empowers consumers to purchase products directly within the ad itself, without leaving the platform. By integrating shopping features into engaging visuals, shoppable ads make it seamless for consumers to transition from browsing to buying.
These ads take advantage of in-app shopping technology, keeping users engaged and removing the friction of navigating away from their favourite platforms. Whether it’s a clickable image, a swipe-up link, or an embedded product carousel, shoppable ads are designed to capture interest and drive immediate action.

Why Are Shoppable Ads Gaining Popularity?
The rising popularity of shoppable ads is driven by three major factors:
Consumer Behavior: Shoppers increasingly rely on social media and online platforms for product discovery.
Convenience: Consumers prefer streamlined experiences that minimize steps between browsing and purchasing.
Technological Advancements: Platforms have integrated seamless shopping features, making these ads more effective.

Where Can You Use Shoppable Ads?
Shoppable ads are supported on multiple platforms, each with unique features that cater to social commerce. Let’s explore the top platforms:
1. Instagram

       Instagram’s shoppable posts and stories allow brands to turn their visual content into instant shopping opportunities. Features include:
       Tagged products in posts and reels.
       “Shop Now” buttons on Stories.
       A dedicated Shop tab for easy product discovery.

2. Facebook

      Facebook’s shoppable ads work seamlessly with the platform’s marketplace and Shops feature, enabling businesses to showcase products through:
      Clickable carousel ads.
      Collection ads that combine lifestyle imagery with product listings.

3. YouTube

      YouTube’s TrueView for Shopping ads enhances the video-watching experience by integrating clickable product images directly below videos. Brands can:
      Showcase multiple products.
      Drive traffic to their e-commerce site or direct checkout page.
      
4. TikTok
      
      TikTok is a hotspot for younger, trend-driven consumers. Its shoppable ads include:
      In-feed ads with embedded shopping links.
      Hashtag challenges that encourage user participation while driving sales.
5. Pinterest

      Known for its aspirational content, Pinterest leverages shoppable pins and ads to make visual ideas actionable. Users can:
      Shop products directly from pins.
      View pricing and availability without leaving the platform.

The Benefits of Shoppable Ads
Shoppable ads offer a host of advantages for businesses aiming to boost sales and streamline the customer journey.

1. Boost Conversions

By reducing friction in the shopping process, shoppable ads help capture customers at the moment of peak interest.
2. Shorten the Customer Journey

Traditional ads often require multiple steps to complete a purchase. Shoppable ads eliminate these barriers by enabling in-ad transactions.
3. Increase Sales

With higher engagement and conversion rates, shoppable ads have proven to drive significant sales growth across industries.
4. Provide Valuable Insights

Shoppable ads offer detailed analytics, such as:
Click-through rates (CTR).
Conversion rates.
Return on ad spend (ROAS).
These insights allow businesses to refine their campaigns for better results.
5. Enhance Customer Experience

By blending entertainment with convenience, shoppable ads provide a frictionless shopping experience that aligns with modern consumer preferences.

How to Run a Successful Shoppable Ad Campaign

Creating a high-performing shoppable ad campaign requires strategic planning, creative execution, and ongoing optimization. Here’s a step-by-step guide to success:
1. Define Your Goals

Start by determining what you want to achieve. Common goals include:
Increasing brand awareness.
Driving direct sales.
Generating leads or collecting customer data.
2. Target the Right Audience

Understanding your audience is crucial. Use data-driven insights to define:
Demographics: Age, location, gender.
Interests and behaviours: Purchase habits, platform usage.
Pain points: Problems your product solves.
Leverage advanced targeting options on platforms to ensure your ads reach the most relevant audience.
3. Use High-Quality Visuals

Visual appeal is the cornerstone of any shoppable ad. Invest in:
Professional product photography.
Eye-catching videos or animations.
User-generated content (UGC) to enhance authenticity.
Make sure your visuals align with the platform’s style to blend seamlessly into users’ feeds.
4. Craft Compelling Copy

Pair your visuals with concise, persuasive copy.
Highlight the product’s key benefits.
Use strong calls-to-action (CTAs) like “Shop Now” or “Limited Time Offer.”
5. Optimize for Mobile

The majority of users engage with shoppable ads on mobile devices. Ensure your ads are:
Optimized for fast loading.
Easy to navigate with minimal text and clutter.
6. Test and Refine Your Campaign

A/B testing is critical for identifying what resonates best with your audience. Experiment with:
Different visuals or video formats.
Various CTAs and headlines.
Targeting settings to refine audience segments.
7. Track and Analyze Performance

Use platform analytics to monitor your campaign’s performance. Key metrics to watch include:
CTR: Indicates engagement levels.
Conversion rate: Measures how many users complete a purchase.
ROAS: Evaluate the profitability of your campaign.
Adjust your strategy based on these insights to continuously improve results.

Best Practices for Shoppable Ads
Integrate Social Proof: Showcase reviews, ratings, or UGC to build trust.
Leverage Trends: Align your ads with trending topics or hashtags to boost visibility.
Retarget Abandoned Carts: Use dynamic retargeting ads to bring back users who didn’t complete their purchase.
Maintain Consistency: Ensure your branding is consistent across all ads and platforms.

Shoppable Ads: A Game-Changer for Modern Marketing
Shoppable ads are transforming the way consumers interact with brands, blending discovery and purchase into a single, seamless experience. By reducing friction, enhancing engagement, and driving actionable insights, these ads empower businesses to connect with their audience more effectively than ever before.
With careful planning, creativity, and a data-driven approach, shoppable ads can unlock unparalleled success for your marketing campaigns. Now is the time to embrace this innovative advertising format and stay ahead in the rapidly evolving world of digital marketing.

`,
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
      title: "The Rise of UGC Ads and Influencer Marketing: Revolutionizing Campaign Success",
      date: "Dec 03, 2024",
      content: `In an era where authenticity drives consumer trust, User-Generated Content (UGC) and Influencer Marketing have emerged as powerful tools for creating impactful marketing campaigns. These strategies leverage genuine connections, relatable content, and social proof to captivate audiences and boost brand loyalty. Here’s why UGC ads and influencer partnerships are at the forefront of modern marketing success and how they can help you maximize your campaign’s potential.

      Why UGC Ads Outperform Traditional Content
      
      User-generated content, created by real customers or audiences, holds an unparalleled level of authenticity. Unlike traditional branded ads, UGC feels more personal, relatable, and trustworthy, making it highly effective for engaging potential buyers.
      Authenticity Wins Trust
      Consumers are more likely to trust content created by real people than polished corporate campaigns. UGC gives brands a human voice, fostering a sense of reliability and relatability.
      Cost-Effective Content Creation
      UGC eliminates the need for large production budgets. Brands can repurpose organic content shared by customers, saving time and resources while delivering a fresh, authentic message.
      Social Proof Drives Decisions
      Seeing others use and endorse a product creates a sense of trust and FOMO (fear of missing out). UGC naturally integrates social proof into marketing efforts, encouraging more conversions.
      Performance-Driven Advertising
      UGC resonates well with social media algorithms, often leading to better engagement rates. Ads featuring UGC are more likely to appear on users’ feeds, increasing visibility and driving results.
      Actionable Takeaway: Encourage your customers to share their experiences with your product or service. Use branded hashtags, offer incentives for testimonials, and repurpose the best UGC in your advertising campaigns.

      Influencer Marketing: The Modern Word-of-Mouth Strategy
      Influencers bring unparalleled reach and engagement to your campaigns by acting as trusted intermediaries between brands and their followers. Here’s why influencer marketing is an essential piece of the puzzle:
      Leveraging Established Trust
      Influencers have built strong, loyal communities that trust their opinions. Collaborating with them allows brands to tap into this trust and gain credibility instantly.
      Targeted Reach
      Influencers often cater to specific niches or demographics. This makes it easier for brands to reach their ideal audience without wasting resources on untargeted campaigns.
      Boosting Engagement and Awareness
      Sponsored content created by influencers feels less like advertising and more like a genuine recommendation. This increases engagement, brand recall, and the likelihood of conversions.
      Dynamic Content Creation
      Influencers are content creators at heart. Partnering with them allows brands to access high-quality visuals, videos, and creative campaigns that align with the platform's trends and aesthetics.
      Driving ROI
      Studies show that influencer campaigns can deliver significant returns on investment, especially when paired with performance-tracking tools.
      Actionable Takeaway: Choose influencers whose values align with your brand. Micro and nano influencers often provide higher engagement rates and more genuine interactions, making them ideal for niche campaigns.

      The Winning Combination: UGC + Influencer Marketing
      When combined, UGC and influencer marketing create a powerful synergy that amplifies campaign results. Here’s why this duo is unbeatable:
      Amplified Authenticity
      Influencers can create UGC-style content that feels genuine while maintaining a professional touch. This fusion ensures that campaigns are both polished and relatable.
      Expanding Social Proof
      Influencers sharing UGC from their followers add an extra layer of validation, showing potential customers that the product is trusted by real people and endorsed by a reliable figure.
      Maximizing Platform Potential
      Both UGC and influencer content perform exceptionally well across social media platforms like Instagram, TikTok, and YouTube. Pairing them increases your chances of virality and deeper audience engagement.
      Building Long-Term Connections
      Incorporating influencer-generated UGC into your campaigns fosters a sense of community, encouraging ongoing engagement and loyalty.
      Actionable Takeaway: Collaborate with influencers to encourage their followers to create and share UGC. Turn these submissions into a campaign that highlights real customer stories and experiences.

      Best Practices for UGC and Influencer Marketing Success
      Define Clear Goals

      Determine what you aim to achieve—brand awareness, engagement, conversions—and tailor your UGC and influencer strategy accordingly.
      Choose the Right Platforms
      TikTok and Instagram are ideal for short-form, engaging content, while YouTube is great for in-depth product reviews and tutorials.
      Use Call-to-Actions (CTAs)
      Encourage customers and influencers to share their experiences with specific hashtags or participate in campaigns that spotlight your brand.
      Track and Optimize Performance
      Monitor metrics like engagement rates, reach, and conversions to measure the success of your campaigns and make data-driven adjustments.
      Focus on Community Building
      UGC and influencer marketing are most effective when they foster genuine connections. Engage with your audience by replying to comments, sharing their content, and showing appreciation.

      Conclusion: The Future of Marketing is Authenticity

      UGC and influencer marketing are not just trends—they are the future of effective digital marketing. By leveraging authentic content and trusted voices, brands can build meaningful relationships with their audience, boost engagement, and drive conversions like never before.
      Whether you’re a small business or a global brand, integrating UGC and influencer strategies into your campaigns is essential for standing out in today’s competitive market. Start today, and let the power of authenticity transform your marketing efforts into unforgettable success stories.

      By blending the voices of your customers with the reach of influencers, you can create campaigns that resonate deeply, inspire trust, and drive unparalleled results. The best time to embrace these strategies is now—are you ready to transform your marketing? `,
      author: "Soocily",
      image: "path/to/image4.jpg",
    },
    {
      id: 10,
      title: "Social media marketing plan summarized for 2025",
      date: "Dec 02, 2024",
      content: `The digital marketing landscape is undergoing a transformative shift, driven by advancements in technology, changing consumer behaviours, and the rise of new platforms. Businesses that adapt to these changes and embrace new strategies are better positioned to thrive. Below, we dive into the evolving dynamics of social media marketing, the growing impact of AI, and actionable insights to help your brand stay ahead.
      
        The Evolution of Social Media: From Social Graphs to Interest Graphs

        In the early days of social media, success was often measured by the size of a brand's follower base, or what is referred to as the "social graph." Today, the emphasis has shifted toward the "interest graph," where content is curated to align with users' specific passions and interests rather than their social connections.
        For businesses, this means that creating content tailored to niche audiences can drive greater engagement and brand loyalty. Success on platforms now depends less on follower counts and more on the value and relevance of the content being shared.
        Actionable Takeaway: Focus on understanding your audience’s interests and create content that resonates deeply with them. Use tools like audience insights and social listening to identify trending topics within your niche.

        The Power of Organic Content

        While paid advertising remains a powerful tool, the potential of organic content should not be overlooked. Regularly producing high-quality, engaging videos and images tailored to each platform can significantly enhance your brand's visibility.
        Creating 1-2 pieces of organic content daily allows businesses to test what resonates with audiences. Content that performs well organically can then be amplified using paid ads, ensuring better conversion rates and higher returns on ad spend.
        Actionable Takeaway: Implement a content calendar to streamline the creation of platform-specific content. Experiment with formats such as Reels, carousels, and short-form videos to identify what drives the most engagement.`,
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
          {/* <p className="blog-excerpt">{blog.content.substring(0, 100)}...</p> */}
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
