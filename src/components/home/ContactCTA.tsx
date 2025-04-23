import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-logistics-50 section-padding">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{t('components.contactCTA.title')}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('components.contactCTA.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              {t('components.contactCTA.contactButton')}
            </Link>
            <Link to="/services" className="btn-secondary">
              {t('components.contactCTA.exploreButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
