import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold text-medical-dark">Twin Medical</span>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Головна
            </a>
            <a href="#" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Каталог
            </a>
            <a href="#" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Про компанію
            </a>
            <a href="#" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Сертифікати
            </a>
            <a href="#" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Контакти
            </a>
          </nav>

          {/* Кнопка связи */}
          <div className="flex items-center space-x-4">
            <button className="bg-medical-blue hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
              Зв'язатися
            </button>
            
            {/* Мобильное меню */}
            <button className="md:hidden w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-5 h-0.5 bg-medical-gray mb-1"></span>
              <span className="w-5 h-0.5 bg-medical-gray mb-1"></span>
              <span className="w-5 h-0.5 bg-medical-gray"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;