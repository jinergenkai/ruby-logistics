
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-logistics-700 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('reviews.header.title')}</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            {t('reviews.header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(t('reviews.testimonials', { returnObjects: true }) as any[]).slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-logistics-600 p-6 rounded-lg shadow-lg animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-6 italic">"{testimonial.content}"</p>
              {/* <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-logistics-300">{testimonial.company}</p>
              </div> */}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/reviews" className="btn-secondary">
            {t('common.reviews')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
