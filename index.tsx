// pages/index.tsx
import BlogCard from '../Component/BlogCard';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const blogs = [
  { slug: 'blog-1', title: 'Blog One', description: 'This is blog one.', image: '/blog1.jpg' },
  { slug: 'blog-2', title: 'Blog Two', description: 'This is blog two.', image: '/blog2.jpg' },
  { slug: 'blog-3', title: 'Blog Three', description: 'This is blog three.', image: '/blog3.jpg' },
  { slug: 'blog-4', title: 'Blog Four', description: 'This is blog four.' },
  { slug: 'blog-5', title: 'Blog Five', description: 'This is blog five.', image: '/blog5.jpg' },
  { slug: 'blog-6', title: 'Blog Six', description: 'This is blog six.', image: '/blog6.jpg' },
];

const Home = () => (
  <div>
    <Header />
    <main className="max-w-6xl mx-auto mt-20 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </main>
    <Footer />
  </div>
);

export default Home;
