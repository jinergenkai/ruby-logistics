import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const { t } = useTranslation();
  const testimonials = t('reviews.testimonials', { returnObjects: true }) as Array<{
    content: string;
    author: string;
    company: string;
    rating: number;
  }>;

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('reviews.header.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('reviews.header.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-custom"
              >
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="mb-6 text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 1}.jpg`}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">{t('reviews.cta.title')}</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('reviews.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              {t('reviews.cta.contactButton')}
            </Link>
            <Link to="/services" className="btn-secondary">
              {t('reviews.cta.exploreButton')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
