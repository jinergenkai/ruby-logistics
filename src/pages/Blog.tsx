
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const blogImages = [
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  ];

  const blogPosts = (t('blog.posts', { returnObjects: true }) as any[]).map((post, index) => ({
    ...post,
    image: blogImages[index]
  }));

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('blog.header.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('blog.header.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-custom">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-custom hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-logistics-100 text-logistics-600 text-xs px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-logistics-500 transition-custom">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-logistics-500 font-medium hover:text-logistics-600 inline-flex items-center"
                  >
                    {t('blog.readMore')}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-logistics-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('blog.newsletter.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('blog.newsletter.description')}
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={t('blog.newsletter.emailPlaceholder')}
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-logistics-500 focus:border-logistics-500"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  {t('blog.newsletter.subscribeButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
