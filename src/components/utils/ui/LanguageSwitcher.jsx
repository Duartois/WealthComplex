import { useTranslation } from 'react-i18next';
import brFlag from '../../../assets/svg/br.svg';
import usFlag from '../../../assets/svg/us.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lng', lng);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => changeLanguage('pt')}
        aria-label="Mudar idioma para Português"
        className="rounded-md p-1 transition-transform duration-200 hover:scale-110 focus:outline-none"
      >
        <img
          src={brFlag}
          alt=""
          aria-hidden="true"
          className="h-3 w-5 sm:h-4 sm:w-6 rounded-sm shadow-md"
        />
      </button>
      <button
        onClick={() => changeLanguage('en')}
        aria-label="Change language to English"
        className="rounded-md p-1 transition-transform duration-200 hover:scale-110 focus:outline-none"
      >
        <img
          src={usFlag}
          alt=""
          aria-hidden="true"
          className="h-3 w-5 sm:h-4 sm:w-6 rounded-sm shadow-md"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
