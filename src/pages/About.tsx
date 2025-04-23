import Layout from '../components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PhilosophyPoint {
  title: string;
  description: string;
}

const About = () => {
  const { t } = useTranslation();

  const experiences = t('about.profile.experiences', { returnObjects: true }) as string[];
  const philosophyPoints = t('about.philosophy.points', { returnObjects: true }) as PhilosophyPoint[];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative text-white py-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(4px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('about.header.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('about.header.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('about.profile.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('about.profile.description')}
            </p>

            <h3 className="text-xl font-bold mb-3">{t('about.profile.experienceTitle')}</h3>
            <ul className="space-y-2 mb-6">
              {experiences.map((experience, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{experience}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">{t('about.profile.connectTitle')}</h3>
              <div className="flex space-x-4">
                <a href="https://www.tiktok.com/@rubylogistics" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4A6.33 6.33 0 0 0 8.89 9a6.34 6.34 0 1 0 6.34 6.34V9.04a8.16 8.16 0 0 0 4.36 1.26V6.69z"/>
                  </svg>
                </a>
                <a href="tel:0358820162" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('about.philosophy.title')}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                {t('about.philosophy.intro')}
              </p>
              <ul className="space-y-4">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
