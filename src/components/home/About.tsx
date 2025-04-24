
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
    <img
            src="/background.jpg"
            alt="Modern Logistics Services"
            className="rounded-lg shadow-lg w-full h-[400px] md:h-[480px] object-cover transform hover:scale-105 transition-all duration-300"
          />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-4">{t('about.header.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('about.profile.description')}
            </p>
            
            <ul className="space-y-2 mb-6">
              {(t('about.profile.experiences', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/about" className="btn-primary">
              {t('common.about')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
