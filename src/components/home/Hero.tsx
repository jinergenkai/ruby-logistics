import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/overlay.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-700/60 z-10"></div>
      <div className="container-custom py-16 md:py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl opacity-90 mb-6">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary bg-white text-logistics-600 hover:bg-gray-100">
                {t('hero.exploreServices')}
              </Link>
              <Link to="/contact" className="btn-secondary text-blue hover:text-white border-white hover:bg-white/10">
                {t('hero.contactUs')}
              </Link>
            </div>
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="bg-logistics-50 p-3 rounded-full mr-4">
                  <svg className="text-logistics-500 w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4A6.33 6.33 0 0 0 8.89 9a6.34 6.34 0 1 0 6.34 6.34V9.04a8.16 8.16 0 0 0 4.36 1.26V6.69z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('hero.social.tiktok.title')}</h3>
                  <a href="https://www.tiktok.com/@rubylogistics" className="text-white hover:text-logistics-500">
                    {t('hero.social.tiktok.handle')}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-logistics-50 p-3 rounded-full mr-4">
                  <svg className="text-logistics-500 w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('hero.social.zalo.title')}</h3>
                  <p className="text-white">{t('hero.social.zalo.phone')}</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/avatar.jpg"
            alt="Modern Logistics Services"
            className="rounded-lg shadow-lg w-full h-[400px] md:h-[480px] object-cover transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
