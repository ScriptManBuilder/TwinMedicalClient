import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-dark text-white">
      {/* Основная часть футера */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" clipRule="evenodd" />
                </svg>
              </div>
              <Link to="/" className="text-xl font-bold">Twin Medical</Link>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Преміальні медичні вироби для сучасної медицини. 
               Якість, надійність та інновації у кожному рішенні.
            </p>
            <div className="flex space-x-4">
              {/* Социальные сети */}
              <a href="https://www.instagram.com/twin.medical.ua" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-medical-blue rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.675 1.1 4.92 4.92 0 011.1 1.675c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.1 1.675 4.92 4.92 0 01-1.675 1.1c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.675-1.1 4.92 4.92 0 01-1.1-1.675c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.1-1.675 4.92 4.92 0 011.675-1.1c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.773.127 4.802.31 4.05.553a6.92 6.92 0 00-2.45 1.6A6.92 6.92 0 00.553 4.05c-.243.752-.426 1.723-.483 3.002C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.057 1.279.24 2.25.483 3.002a6.92 6.92 0 001.6 2.45 6.92 6.92 0 002.45 1.6c.752.243 1.723.426 3.002.483C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.279-.057 2.25-.24 3.002-.483a6.92 6.92 0 002.45-1.6 6.92 6.92 0 001.6-2.45c.243-.752.426-1.723.483-3.002.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.057-1.279-.24-2.25-.483-3.002a6.92 6.92 0 00-1.6-2.45 6.92 6.92 0 00-2.45-1.6c-.752-.243-1.723-.426-3.002-.483C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-medical-blue rounded-lg flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Послуги */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Послуги</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Доставка по місту Одесса
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Доставка Новою поштою по всій Україні
                </Link>
              </li>
            </ul>
          </div>

          {/* Корисні посилання */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Інформація</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Про нас
                </Link>
              </li>
              {/* <li>
                <Link to="/certificates" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Сертифікати
                </Link>
              </li> */}
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Новини
                </a>
              </li> */}
              {/* <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Кар'єра
                </Link>
              </li> */}
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Політика конфіденційності
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Контакти</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-300">
                    м. Одеса, Україна<br />
                    
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300">+38 (093) 646-39-38 </p>             
                
              </div>
                 <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300">+38 (068) 141-43-10</p>
                
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300">twinmedical.od@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Twin Medical. Всі права захищені.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Умови використання
              </Link>
              {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Політика cookies
              </a> */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">Система працює</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;