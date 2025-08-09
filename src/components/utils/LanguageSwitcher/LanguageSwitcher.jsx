import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lng', lng);
    }
  };

  const current = i18n.language;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`text-xl ${current === 'en' ? '' : 'opacity-50'}`}
        aria-label="English"
      >
        🇺🇸
      </button>
      <button
        onClick={() => changeLanguage('pt')}
        className={`text-xl ${current === 'pt' ? '' : 'opacity-50'}`}
        aria-label="Português"
      >
        🇧🇷
      </button>
    </div>
  );
};

export default LanguageSwitcher;
