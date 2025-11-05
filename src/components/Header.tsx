import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './modal';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
            <Link to="/" className="text-xl font-bold text-medical-dark">Twin Medical</Link>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Головна
            </Link>
            <Link to="/catalog" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Каталог
            </Link>
            <Link to="/about" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Про компанію
            </Link>
            <Link to="/certificates" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Сертифікати
            </Link>
            <Link to="/contact" className="text-medical-gray hover:text-medical-blue transition-colors duration-300 font-medium">
              Контакти
            </Link>
          </nav>

          {/* Кнопка связи */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={openModal}
              className="bg-medical-blue hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Зв'язатися</span>
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