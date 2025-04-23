import { useTranslation } from 'react-i18next';
import { Button } from './button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      variant="outline"
      className="fixed top-4 right-4 z-50"
      onClick={toggleLanguage}
    >
      {i18n.language === 'en' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}
    </Button>
  );
};