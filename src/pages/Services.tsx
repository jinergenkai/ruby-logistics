import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Ship, Plane, Warehouse, Globe, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const serviceIcons = {
    "international-sea": <Ship size={48} className="text-logistics-500 mb-4 animate-bounce" />,
    "domestic-sea": <Ship size={48} className="text-logistics-500 mb-4 hover:scale-110 transition-transform" />,
    "air-freight": <Plane size={48} className="text-logistics-500 mb-4 animate-pulse" />,
    "warehousing": <Warehouse size={48} className="text-logistics-500 mb-4 hover:rotate-6 transition-transform" />,
    "international-shipping": <Globe size={48} className="text-logistics-500 mb-4 animate-spin-slow" />
  };

  const services = t('services.items', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    features: string[];
  }>;

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">{t('services.header.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('services.header.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`} style={{ animationDelay: `${0.2 * index}s` }}>
                <div className="text-center lg:text-left mb-6">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                  <h2 className="text-3xl font-bold mb-4 hover:text-logistics-500 transition-colors">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group">
                      <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-logistics-500 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="btn-primary inline-block transform hover:scale-105 transition-transform"
                >
                  {t('services.requestQuote')}
                </Link>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in`} style={{ animationDelay: `${0.3 * index}s` }}>
                <img 
                  src={
                    service.id === 'international-sea' ? '/1.jpg' :
                    service.id === 'domestic-sea' ? '/2.jpeg' :
                    service.id === 'air-freight' ? 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1470' :
                    service.id === 'warehousing' ? 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1470' :
                    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1470'
                  }
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-logistics-700 text-white py-16">
        <div className="container-custom text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.cta.description')}
          </p>
          <Link 
            to="/contact" 
            className="btn-primary bg-white text-logistics-600 hover:bg-gray-100 transform hover:scale-105 transition-transform"
          >
            {t('services.cta.button')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
