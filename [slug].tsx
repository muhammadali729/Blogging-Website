// pages/[slug].tsx
import { useRouter } from 'next/router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold">Blog: {slug}</h1>
        <p className="mt-4 text-gray-600">Full content of {slug} will go here...</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
