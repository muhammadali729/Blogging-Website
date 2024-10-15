// src/app/page.tsx

import Image from 'next/image'; // Import Image from Next.js for optimized image loading

export default function BlogHome() {
  // Sample blog post data (you can replace this with dynamic data later)
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Beautiful Beaches of Thailand',
      description: 'Thailand is known for its stunning beaches. In this post, I will share my experiences visiting some of the most breathtaking beaches in Thailand, including Patong Beach and Railay Beach. Each location offers unique experiences, from vibrant nightlife to serene sunsets.',
      date: 'October 10, 2024',
      image: '/Imagetravelling.jpg', // Ensure this image is in the public directory
    },
    {
      id: 2,
      title: 'A Culinary Journey Through Italy',
      description: 'Italian cuisine is world-renowned for its flavors and diversity. Join me as I explore the culinary treasures of Italy, from handmade pasta in Bologna to authentic Neapolitan pizza. I’ll also share tips on the best restaurants to visit and dishes to try!',
      date: 'October 12, 2024',
      image: '/Imagetravelling.jpg', // Ensure this image is in the public directory
    },
    {
      id: 3,
      title: 'Hiking Adventures in the Swiss Alps',
      description: 'The Swiss Alps offer breathtaking views and thrilling hikes. In this blog post, I recount my journey through the picturesque trails, including the stunning views of Matterhorn and the tranquility of Lake Geneva. Whether you’re an avid hiker or a casual walker, there’s something for everyone.',
      date: 'October 14, 2024',
      image: '/Imagetravelling.jpg', // Ensure this image is in the public directory
    },
  ];

  return (
    <div className="blog-container">
      <header className="header">
        <h1>Ali Stunning Blog</h1>
        <p className="intro">
          Discover thoughts, stories, and ideas from my personal journey.
        </p>
      </header>

      <section className="posts-section">
        {blogPosts.map((post) => (
          <article key={post.id} className="post-card">
            <Image
              src={post.image}
              alt={post.title}
              className="post-image"
              width={500} // Adjust as necessary
              height={300} // Adjust as necessary
              layout="responsive" // Ensures the image is responsive
            />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <small className="post-date">Published on {post.date}</small>
          </article>
        ))}
      </section>
    </div>
  );
}
