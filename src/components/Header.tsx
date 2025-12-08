import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './modal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
            <img 
              src="/TWIN_MEDICAL_LOGO.png" 
              alt="Twin Medical Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Навигация */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <Link to="/" className="relative text-medical-gray hover:text-medical-blue transition-colors duration-300 font-semibold text-base group py-2">
              Головна
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/catalog" className="relative text-medical-gray hover:text-medical-blue transition-colors duration-300 font-semibold text-base group py-2">
              Каталог
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/about" className="relative text-medical-gray hover:text-medical-blue transition-colors duration-300 font-semibold text-base group py-2">
              Про компанію
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/certificates" className="relative text-medical-gray hover:text-medical-blue transition-colors duration-300 font-semibold text-base group py-2">
              Сертифікати
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/contact" className="relative text-medical-gray hover:text-medical-blue transition-colors duration-300 font-semibold text-base group py-2">
              Контакти
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          {/* Кнопка связи */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={openModal}
              className="bg-gradient-to-r from-medical-blue to-primary-700 hover:from-primary-700 hover:to-medical-blue text-white px-3 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden xs:inline sm:inline">Зв'язатися</span>
              <span className="inline xs:hidden sm:hidden">Контакти</span>
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
      
      {/* Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;