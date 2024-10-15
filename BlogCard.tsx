// components/BlogCard.tsx
import Link from 'next/link';

interface Blog {
  slug: string;
  title: string;
  description: string;
  image?: string;
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => (
  <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
    {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />}
    <div className="p-4">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-600 mt-2">{blog.description}</p>
      <Link href={`/${blog.slug}`} className="text-blue-500 mt-4 block hover:underline">
        Read More
      </Link>
    </div>
  </div>
);

export default BlogCard;
