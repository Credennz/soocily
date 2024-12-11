import React, { useState, useEffect, useRef  } from "react";
import { useNavigate, useParams } from "react-router-dom"; // To fetch the blog ID from the URL
import "./cblog.css";
import Footer from "../footer";
import { HashLink } from 'react-router-hash-link'; 

const BlogPost = ({ openContactModal }) => {
  const { id } = useParams(); // Fetch the blog ID dynamically from the URL
  const navigate = useNavigate(); // Always declare hooks at the top level
  const [menuActive, setMenuActive] = useState(false); // Manage menu toggle state
  const toggleButtonRef = useRef(null);

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
      content:`
In today’s fast-paced digital world, capturing a consumer’s attention and converting it into a sale often feels like threading a needle. Enter <b>shoppable ads</b>—a revolutionary tool that bridges the gap between discovery and purchase. These interactive ads allow consumers to shop directly from the advertisement, streamlining the buying process and shortening the customer journey. Supported by platforms like Instagram, Facebook, YouTube, TikTok, and Pinterest, shoppable ads are reshaping the landscape of digital marketing.
This comprehensive guide explores what shoppable ads are, the benefits they offer, and the strategies required to craft a winning shoppable ad campaign.

<b>What Are Shoppable Ads?</b>

Shoppable ads are a form of interactive digital advertising that empowers consumers to purchase products directly within the ad itself, without leaving the platform. By integrating shopping features into engaging visuals, shoppable ads make it seamless for consumers to transition from browsing to buying.

These ads take advantage of in-app shopping technology, keeping users engaged and removing the friction of navigating away from their favourite platforms. Whether it’s a clickable image, a swipe-up link, or an embedded product carousel, shoppable ads are designed to capture interest and drive immediate action.

<b>Why Are Shoppable Ads Gaining Popularity?</b>

The rising popularity of shoppable ads is driven by three major factors:

1. <b>Consumer Behavior:</b> Shoppers increasingly rely on social media and online platforms for product discovery.
2. <b>Convenience:</b> Consumers prefer streamlined experiences that minimize steps between browsing and purchasing.
3. <b>Technological Advancements:</b> Platforms have integrated seamless shopping features, making these ads more effective.

<b>Where Can You Use Shoppable Ads?</b>

Shoppable ads are supported on multiple platforms, each with unique features that cater to social commerce. Let’s explore the top platforms:

1. <b>Instagram</b>

       Instagram’s shoppable posts and stories allow brands to turn their visual content into instant shopping opportunities. Features include:

       • Tagged products in posts and reels.
       • “Shop Now” buttons on Stories.
       • A dedicated Shop tab for easy product discovery.

2. <b>Facebook</b>

      Facebook’s shoppable ads work seamlessly with the platform’s marketplace and Shops feature, enabling businesses to showcase products through:

      • Clickable carousel ads.
      • Collection ads that combine lifestyle imagery with product listings.

3. <b>YouTube</b>

      YouTube’s TrueView for Shopping ads enhances the video-watching experience by integrating clickable product images directly below videos. Brands can:

      • Showcase multiple products.
      • Drive traffic to their e-commerce site or direct checkout page.
      
4. <b>TikTok</b>
      
      TikTok is a hotspot for younger, trend-driven consumers. Its shoppable ads include:

      • In-feed ads with embedded shopping links.
      • Hashtag challenges that encourage user participation while driving sales.
      
5. <b>Pinterest</b>

      Known for its aspirational content, Pinterest leverages shoppable pins and ads to make visual ideas actionable. Users can:

      • Shop products directly from pins.
      • View pricing and availability without leaving the platform.

<b>The Benefits of Shoppable Ads</b>

Shoppable ads offer a host of advantages for businesses aiming to boost sales and streamline the customer journey.

1. <b>Boost Conversions</b>

By reducing friction in the shopping process, shoppable ads help capture customers at the moment of peak interest.

2. <b>Shorten the Customer Journey</b>

Traditional ads often require multiple steps to complete a purchase. Shoppable ads eliminate these barriers by enabling in-ad transactions.

3. <b>Increase Sales</b>

With higher engagement and conversion rates, shoppable ads have proven to drive significant sales growth across industries.

4. <b>Provide Valuable Insights</b>

Shoppable ads offer detailed analytics, such as:

• Click-through rates (CTR).
• Conversion rates.
• Return on ad spend (ROAS).

These insights allow businesses to refine their campaigns for better results.

5. <b>Enhance Customer Experience</b>

By blending entertainment with convenience, shoppable ads provide a frictionless shopping experience that aligns with modern consumer preferences.

<b>How to Run a Successful Shoppable Ad Campaign</b>

Creating a high-performing shoppable ad campaign requires strategic planning, creative execution, and ongoing optimization. Here’s a step-by-step guide to success:

1. <b>Define Your Goals</b>

Start by determining what you want to achieve. Common goals include:

• Increasing brand awareness.
• Driving direct sales.
• Generating leads or collecting customer data.

2. <b>Target the Right Audience</b>

Understanding your audience is crucial. Use data-driven insights to define:

• Demographics: Age, location, gender.
• Interests and behaviours: Purchase habits, platform usage.
• Pain points: Problems your product solves.

Leverage advanced targeting options on platforms to ensure your ads reach the most relevant audience.

3. <b>Use High-Quality Visuals</b>

Visual appeal is the cornerstone of any shoppable ad. Invest in:

• Professional product photography.
• Eye-catching videos or animations.
• User-generated content (UGC) to enhance authenticity.

Make sure your visuals align with the platform’s style to blend seamlessly into users’ feeds.

4. <b>Craft Compelling Copy</b>

Pair your visuals with concise, persuasive copy.

• Highlight the product’s key benefits.
• Use strong calls-to-action (CTAs) like “Shop Now” or “Limited Time Offer.”

5. <b>Optimize for Mobile</b>

The majority of users engage with shoppable ads on mobile devices. Ensure your ads are:

• Optimized for fast loading.
• Easy to navigate with minimal text and clutter.

6. <b>Test and Refine Your Campaign</b>

A/B testing is critical for identifying what resonates best with your audience. Experiment with:

• Different visuals or video formats.
• Various CTAs and headlines.
• Targeting settings to refine audience segments.

7. <b>Track and Analyze Performance</b>

Use platform analytics to monitor your campaign’s performance. Key metrics to watch include:

• CTR: Indicates engagement levels.
• Conversion rate: Measures how many users complete a purchase.
• ROAS: Evaluate the profitability of your campaign.

Adjust your strategy based on these insights to continuously improve results.

<b>Best Practices for Shoppable Ads</b>

<b>Integrate Social Proof:</b> Showcase reviews, ratings, or UGC to build trust.
<b>Leverage Trends:</b> Align your ads with trending topics or hashtags to boost visibility.
<b>Retarget Abandoned Carts:</b> Use dynamic retargeting ads to bring back users who didn’t complete their purchase.
<b>Maintain Consistency:</b> Ensure your branding is consistent across all ads and platforms.

<b>Shoppable Ads: A Game-Changer for Modern Marketing</b>

Shoppable ads are transforming the way consumers interact with brands, blending discovery and purchase into a single, seamless experience. By reducing friction, enhancing engagement, and driving actionable insights, these ads empower businesses to connect with their audience more effectively than ever before.
With careful planning, creativity, and a data-driven approach, shoppable ads can unlock unparalleled success for your marketing campaigns. Now is the time to embrace this innovative advertising format and stay ahead in the rapidly evolving world of digital marketing.

`,
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 7,
      title: "Adapting to AI-Driven Search",
      date: "Dec 01, 2024",
      content: `The rise of AI-powered platforms like ChatGPT, Gemini, and Bard is reshaping how people search for and consume information. These platforms provide conversational, contextual responses, reducing reliance on traditional search engines like Google. As businesses and content creators adapt to this shift, the challenge lies in ensuring visibility across both AI-driven and traditional search ecosystems.
      Here’s how you can improve your search ranking and stay relevant in the evolving landscape of AI-enhanced search.

      1. <b>Understand the Role of AI in Search</b>

      AI platforms curate and deliver information based on contextual relevance, quality, and clarity rather than just keyword matching. They pull data from credible sources to craft meaningful answers. Optimizing for these platforms requires a new approach that focuses on structured, user-centric content.

      <b>Actionable Insight:</b> Craft content that directly answers user queries in a clear, concise manner while maintaining depth for contextual AI tools to interpret and use effectively.

      2. <b>Optimize for Conversational Queries</b>

      AI tools often simulate how humans ask questions conversationally. Unlike traditional searches driven by keywords, queries on platforms like ChatGPT are more detailed and natural, such as “What are the benefits of AI for small businesses?” rather than “AI benefits business.”

      <b>How to Adapt:</b>

      • Use natural language in your content.
      • Incorporate long-tail keywords and phrases that reflect conversational searches.
      • Include FAQ sections to address specific questions users might ask AI platforms.

      3. <b>Prioritize High-Quality, Credible Content</b>

      AI platforms rely heavily on high authority and accurate sources to provide answers. Low-quality or misleading content is less likely to be featured in AI-driven responses.

      <b>Content Optimization Tips:</b>

      • Conduct thorough research and cite credible sources.
      • Regularly update your content to reflect the latest information.
      • Include visuals like infographics, videos, or charts that explain concepts succinctly.

      4. <b>Use Structured Data Markup</b>

      AI algorithms value structured data as it helps them better understand and retrieve information from your website. Implement schema markup to make your content easier to interpret by search bots and AI crawlers.

      <b>Recommended Markups:</b>

      • FAQ schema for question-based content.
      • Article schema for blogs and resources.
      • Product schema for e-commerce platforms.

      5. <b>Target Featured Snippets and Zero-Click Searches</b>

      AI platforms often extract information directly from featured snippets or "Position Zero" results on Google. Optimizing your content for these can significantly boost your visibility.

      <b>How to Get Featured:</b>

      • Answer questions directly in the first 2-3 lines of your content.
      • Use bullet points or numbered lists for step-by-step guides.
      • Provide concise definitions or summaries within your content.

      6. <b>Leverage AI for SEO Strategy</b>

      Just as users are turning to AI tools, marketers can use these platforms to refine their strategies. Tools like ChatGPT, Jasper, and others can assist in generating optimized content ideas, keyword research, and content outlines.

      <b>Use AI for:</b>

      • Identifying trending topics.
      • Generating meta tags and descriptions.
      • Creating drafts that you can polish for better engagement.

      7. <b>Focus on E-A-T Principles (Expertise, Authoritativeness, Trustworthiness)</b>

      AI platforms prioritize sources with strong E-A-T signals to ensure they deliver reliable information. Building your authority in your niche will improve your chances of being referenced by AI systems.

      <b>How to Build E-A-T:</b>

      • Publish articles written by experts in your industry.
      • Earn backlinks from reputable sites.
      • Highlight credentials, testimonials, and case studies to establish trust.

      8. <b>Diversify Your Online Presence</b>

      AI models draw from multiple sources, including websites, social media, and even multimedia platforms like YouTube. A diversified presence increases your chances of being included in AI-generated responses.

      <b>What to Do:</b>

      • Maintain an active blog and social media channels.
      • Publish videos or podcasts to expand reach.
      • Engage in forums and communities related to your industry.

      9. <b>Create AI-friendly FAQs and Guides</b>

      FAQs are often the backbone of AI responses. By creating comprehensive guides or question-answer formats, you improve the chances of your content being used in AI platforms' responses.

      <b>Best Practices for FAQ Pages:</b>

      • Address specific, actionable questions your audience might ask.
      • Keep answers brief but link to detailed explanations for further reading.
      • Use headers and subheaders to make it easy for AI to parse your content.

      10. <b>Monitor and Adapt to New AI Search Trends</b>

      The landscape of AI-driven search is constantly evolving. Staying informed about updates and trends will help you refine your strategy and stay ahead of the curve.

      <b>Stay Ahead by:</b>

      • Following updates from major AI platforms like OpenAI (ChatGPT) or Google (Gemini).
      • Experimenting with prompts on AI platforms to understand how they retrieve information.
      • Continuously testing and optimizing your content based on performance metrics.

      <b>Conclusion: The Future of Search is AI</b>

      As the shift from traditional search engines to AI platforms accelerates, businesses must adapt their strategies to stay visible and relevant. By prioritizing conversational content, leveraging structured data, and maintaining high-quality, authoritative content, you can ensure your brand thrives in the AI-driven search landscape.

      Success lies in embracing the evolving nature of search and consistently optimizing your presence across all platforms—because the future belongs to those who adapt first.`,
      author: "Soocily",
      image: "path/to/image2.jpg",
    },
    {
      id: 8,
      title: "Advanced CSS Techniques",
      date: "Jul 04, 2024",
      content: `<b>Benefits of Advanced CSS Tricks</b>

      CSS tricks can provide many benefits, including improved design and layout of web pages, enabling developers to create more complex responsive web applications. Overall, advanced CSS tricks can help create more polished and cross-functional websites and web applications.
      
      Several responsive and lightweight CSS frameworks are frequently in use by developers and designers that make it simpler to add visual elements like forms, buttons, panels, breadcrumbs, etc., and implement functions. It simplifies the process of creating websites. Regardless of the browser versions, these websites will work efficiently. As a result, there will be less chance of coding errors during cross browser testing.
      
      The availability of ready-made style sheet frameworks substantially speeds up project implementation and simplifies web development. Users may accomplish the required activities by spending little time studying and immersing themselves in CSS code.
      
      Another benefit is the ability to create a user interface that is both user-friendly and aesthetically pleasing, with the flexibility to change it during project updates without having to start from scratch.
      
      <b>Best Advanced CSS Tricks and Tips</b>
      Let’s start with our list of the cool CSS tricks and tips for 2024.

      link : https://credennz-in.vercel.app/


      
      1. <b>Responsive CSS Grids</b>
      While taking care of the responsive design, you need to ensure the grid is responsive. Responsive CSS grid is one of the best CSS tricks and tips that offer different ways of creating a customizable grid, irrespective of the device. The most reliable thing is that the CSS grid operates with equal or unequal column sizes.`,
      author: "Soocily",
      image:
        "https://s3-us-west-2.amazonaws.com/speedybrandimages/tmp_6b7a260e-a717-4625-b845-a7f8ee929ee3.webp",
    },
    {
      id: 9,
      title: <h4>"The Rise of UGC Ads and Influencer Marketing: Revolutionizing Campaign Success"</h4>,
      date: "Dec 03, 2024",
      content: `In an era where authenticity drives consumer trust, <b>User-Generated Content (UGC)</b> and <b>Influencer Marketing</b> have emerged as powerful tools for creating impactful marketing campaigns. These strategies leverage genuine connections, relatable content, and social proof to captivate audiences and boost brand loyalty. Here’s why UGC ads and influencer partnerships are at the forefront of modern marketing success and how they can help you maximize your campaign’s potential.

      <b>Why UGC Ads Outperform Traditional Content</b>
      
      User-generated content, created by real customers or audiences, holds an unparalleled level of authenticity. Unlike traditional branded ads, UGC feels more personal, relatable, and trustworthy, making it highly effective for engaging potential buyers.
      
      1. <b>Authenticity Wins Trust</b>
      Consumers are more likely to trust content created by real people than polished corporate campaigns. UGC gives brands a human voice, fostering a sense of reliability and relatability.
      2. <b>Cost-Effective Content Creation</b>
      UGC eliminates the need for large production budgets. Brands can repurpose organic content shared by customers, saving time and resources while delivering a fresh, authentic message.
      3. <b>Social Proof Drives Decisions</b>
      Seeing others use and endorse a product creates a sense of trust and FOMO (fear of missing out). UGC naturally integrates social proof into marketing efforts, encouraging more conversions.
      4. <b>Performance-Driven Advertising</b>
      UGC resonates well with social media algorithms, often leading to better engagement rates. Ads featuring UGC are more likely to appear on users’ feeds, increasing visibility and driving results.

      <b>Actionable Takeaway:</b> Encourage your customers to share their experiences with your product or service. Use branded hashtags, offer incentives for testimonials, and repurpose the best UGC in your advertising campaigns.

      <b>Influencer Marketing: The Modern Word-of-Mouth Strategy</b>

      Influencers bring unparalleled reach and engagement to your campaigns by acting as trusted intermediaries between brands and their followers. Here’s why influencer marketing is an essential piece of the puzzle:

      1. <b>Leveraging Established Trust</b>
      Influencers have built strong, loyal communities that trust their opinions. Collaborating with them allows brands to tap into this trust and gain credibility instantly.
      2. <b>Targeted Reach</b>
      Influencers often cater to specific niches or demographics. This makes it easier for brands to reach their ideal audience without wasting resources on untargeted campaigns.
      3. <b>Boosting Engagement and Awareness</b>
      Sponsored content created by influencers feels less like advertising and more like a genuine recommendation. This increases engagement, brand recall, and the likelihood of conversions.
      4. <b>Dynamic Content Creation</b>
      Influencers are content creators at heart. Partnering with them allows brands to access high-quality visuals, videos, and creative campaigns that align with the platform's trends and aesthetics.
      5. <b>Driving ROI</b>
      Studies show that influencer campaigns can deliver significant returns on investment, especially when paired with performance-tracking tools.

      <b>Actionable Takeaway:</b> Choose influencers whose values align with your brand. Micro and nano influencers often provide higher engagement rates and more genuine interactions, making them ideal for niche campaigns.

      <b>The Winning Combination: UGC + Influencer Marketing</b>

      When combined, UGC and influencer marketing create a powerful synergy that amplifies campaign results. Here’s why this duo is unbeatable:

      1. <b>Amplified Authenticity</b>
      Influencers can create UGC-style content that feels genuine while maintaining a professional touch. This fusion ensures that campaigns are both polished and relatable.
      2. <b>Expanding Social Proof</b>
      Influencers sharing UGC from their followers add an extra layer of validation, showing potential customers that the product is trusted by real people and endorsed by a reliable figure.
      3. <b>Maximizing Platform Potential</b>
      Both UGC and influencer content perform exceptionally well across social media platforms like Instagram, TikTok, and YouTube. Pairing them increases your chances of virality and deeper audience engagement.
      4 <b>Building Long-Term Connections</b>
      Incorporating influencer-generated UGC into your campaigns fosters a sense of community, encouraging ongoing engagement and loyalty.

      <b>Actionable Takeaway:</b> Collaborate with influencers to encourage their followers to create and share UGC. Turn these submissions into a campaign that highlights real customer stories and experiences.

      <b>Best Practices for UGC and Influencer Marketing Success</b>

      1. <b>Define Clear Goals</b>
      Determine what you aim to achieve—brand awareness, engagement, conversions—and tailor your UGC and influencer strategy accordingly.
      2. <b>Choose the Right Platforms</b>
      TikTok and Instagram are ideal for short-form, engaging content, while YouTube is great for in-depth product reviews and tutorials.
      3. <b>Use Call-to-Actions (CTAs)</b>
      Encourage customers and influencers to share their experiences with specific hashtags or participate in campaigns that spotlight your brand.
      4. <b>Track and Optimize Performance</b>
      Monitor metrics like engagement rates, reach, and conversions to measure the success of your campaigns and make data-driven adjustments.
      5. <b>Focus on Community Building</b>
      UGC and influencer marketing are most effective when they foster genuine connections. Engage with your audience by replying to comments, sharing their content, and showing appreciation.

      <b>Conclusion: The Future of Marketing is Authenticity</b>

      UGC and influencer marketing are not just trends—they are the future of effective digital marketing. By leveraging authentic content and trusted voices, brands can build meaningful relationships with their audience, boost engagement, and drive conversions like never before.

      Whether you’re a small business or a global brand, integrating UGC and influencer strategies into your campaigns is essential for standing out in today’s competitive market. Start today, and let the power of authenticity transform your marketing efforts into unforgettable success stories.

      By blending the voices of your customers with the reach of influencers, you can create campaigns that resonate deeply, inspire trust, and drive unparalleled results. <b>The best time to embrace these strategies is now—are you ready to transform your marketing?</b> `,
      author: "Soocily",
      image: "path/to/image4.jpg",
    },
    {
      id: 10,
      title: "Social media marketing plan summarized for 2025",
      date: "Dec 02, 2024",
      content: `The digital marketing landscape is undergoing a transformative shift, driven by advancements in technology, changing consumer behaviours, and the rise of new platforms. Businesses that adapt to these changes and embrace new strategies are better positioned to thrive. Below, we dive into the evolving dynamics of social media marketing, the growing impact of AI, and actionable insights to help your brand stay ahead.
      
        <b>The Evolution of Social Media: From Social Graphs to Interest Graphs</b>

        In the early days of social media, success was often measured by the size of a brand's follower base, or what is referred to as the "social graph." Today, the emphasis has shifted toward the "interest graph," where content is curated to align with users' specific passions and interests rather than their social connections.

        For businesses, this means that creating content tailored to niche audiences can drive greater engagement and brand loyalty. Success on platforms now depends less on follower counts and more on the value and relevance of the content being shared.

        <b>Actionable Takeaway:</b> Focus on understanding your audience’s interests and create content that resonates deeply with them. Use tools like audience insights and social listening to identify trending topics within your niche.

        <b>The Power of Organic Content</b>

        While paid advertising remains a powerful tool, the potential of organic content should not be overlooked. Regularly producing high-quality, engaging videos and images tailored to each platform can significantly enhance your brand's visibility.

        Creating 1-2 pieces of organic content daily allows businesses to test what resonates with audiences. Content that performs well organically can then be amplified using paid ads, ensuring better conversion rates and higher returns on ad spend.

        <b>Actionable Takeaway:</b> Implement a content calendar to streamline the creation of platform-specific content. Experiment with formats such as Reels, carousels, and short-form videos to identify what drives the most engagement.
        
        <b>Validating Content Through Organic Performance</b>

One of the smartest approaches to optimising your marketing efforts is to let organic engagement guide your paid campaigns. By observing how audiences respond to your posts, you can identify which messages, visuals, or styles are most impactful.

For instance, if a video gains significant traction organically, repurposing it for a targeted ad campaign can result in higher click-through and conversion rates. This reduces the risk of investing in paid content that may not resonate.

<b>Actionable Takeaway:</b> Use analytics tools to track performance metrics like engagement, impressions, and click-through rates. Repurpose your top-performing content for advertising campaigns.

<b>AI and the Decline of Traditional Search</b>

The dominance of traditional search engines is waning, thanks to the rise of AI-powered platforms and technologies. Consumers increasingly rely on tools like chatbots, virtual assistants, and social media searches to find information.

This shift underscores the importance of maintaining a strong presence on emerging platforms and leveraging AI-driven tools to enhance marketing strategies. Staying adaptable to these changes is crucial for businesses aiming to remain relevant in the digital age.

<b>Actionable Takeaway:</b> Invest in AI-powered analytics to gain deeper insights into customer behaviour. Explore advertising opportunities on platforms that integrate AI into their user experience, such as TikTok and Instagram.

<b>Building Relationships: The Foundation of Long-Term Success</b>

While technology and platforms evolve, one principle remains timeless: the value of genuine connections. Businesses that prioritize building strong relationships with customers are more likely to inspire loyalty and advocacy.

Small gestures, such as personalised thank-you notes, thoughtful gifts, or even a simple shout-out on social media, can leave a lasting impression. These personal touches show customers that they are valued beyond the transaction.

<b>Actionable Takeaway:</b> Incorporate personal touches into your customer experience strategy. Use CRM tools to track customer milestones, such as anniversaries or birthdays, and acknowledge them with personalised messages.

<b>Embracing the Future of Marketing</b>

The digital marketing world is moving at a breakneck pace. Brands that stay flexible, embrace emerging technologies, and double down on creating authentic connections will be the ones to thrive. By focusing on interest-driven content, leveraging organic insights, and keeping up with AI trends, you can future-proof your marketing strategy and build lasting success.

<b>Key Takeaways for the Future:</b>

1. Prioritize content that aligns with audience interests rather than focusing solely on building follower counts.
2. Regularly produce and test organic content to identify what works before scaling with paid ads.
3. Stay informed about AI trends and their impact on consumer behaviour.
4. Focus on building genuine, long-term relationships with customers to inspire loyalty.

Success in the evolving marketing landscape requires not only adapting to change but also staying grounded in core values of consistency and connection. Embrace these principles, and you'll be well-positioned to navigate the future of social media marketing with confidence.

`,

        
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

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent triggering outside click logic
    setMenuActive((prevState) => !prevState);
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
        <div className="menu-toggle" ref={toggleButtonRef} onClick={toggleMenu}>
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
      <Footer openContactModal={openContactModal} />
    </div>
  );
};

export default BlogPost;
