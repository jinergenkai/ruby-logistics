import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t('common.home'), path: '/' },
    { name: t('common.about'), path: '/about' },
    { name: t('common.services'), path: '/services' },
    { name: t('common.reviews'), path: '/reviews' },
    { name: t('common.blog'), path: '/blog' },
    { name: t('common.contact'), path: '/contact' },
  ];

  const services = [
    { name: t('components.footer.services.internationalSea'), path: '/services' },
    { name: t('components.footer.services.domesticSea'), path: '/services' },
    { name: t('components.footer.services.airFreight'), path: '/services' },
    { name: t('components.footer.services.warehousing'), path: '/services' },
    { name: t('components.footer.services.internationalShipping'), path: '/services' },
  ];

  return (
    <footer className="bg-logistics-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('components.navbar.brandName')}</h3>
            <p className="mb-4 text-gray-300">
              {t('components.footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-logistics-300 transition-custom">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://tiktok.com/@rubylogistics" className="text-white hover:text-logistics-300 transition-custom">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4A6.33 6.33 0 0 0 8.89 9a6.34 6.34 0 1 0 6.34 6.34V9.04a8.16 8.16 0 0 0 4.36 1.26V6.69z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('components.footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-custom">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('components.footer.ourServices')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-gray-300 hover:text-white transition-custom">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('components.footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-logistics-300" />
                <span className="text-gray-300">{t('contact.getInTouch.info.phone.value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-logistics-300" />
                <span className="text-gray-300">{t('contact.getInTouch.info.email.value')}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-logistics-300 mt-1" />
                <span className="text-gray-300">{t('contact.getInTouch.info.address.value')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            {t('components.footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
