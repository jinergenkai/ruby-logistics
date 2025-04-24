
import { Link } from 'react-router-dom';
import { Ship, Plane, Package, Warehouse, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'international-sea':
    case 'domestic-sea':
      return <Ship size={42} className="text-logistics-500 mb-4" />;
    case 'air-freight':
      return <Plane size={42} className="text-logistics-500 mb-4" />;
    case 'warehousing':
      return <Warehouse size={42} className="text-logistics-500 mb-4" />;
    case 'international-shipping':
      return <Globe size={42} className="text-logistics-500 mb-4" />;
    default:
      return <Package size={42} className="text-logistics-500 mb-4" />;
  }
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('services.header.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('services.header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(t('services.items', { returnObjects: true }) as any[]).map((service, index) => (
            <div 
              key={index} 
              className="card-service flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {getServiceIcon(service.id)}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="mt-auto text-logistics-500 hover:text-logistics-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            {t('common.services')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
