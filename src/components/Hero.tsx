import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-medical-light to-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - текст */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark leading-tight">
              Якісні{' '}
              <span className="text-medical-blue">медичні</span>{' '}
              вироби
            </h1>
            
            <p className="text-lg text-medical-gray leading-relaxed max-w-lg">
              Преміальні рішення для сучасної медицини. 
              Інноваційні технології, перевірена якість, 
              надійність у кожному виробі.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
                Переглянути каталог
              </button>
              <button className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Зв'язатися з нами
              </button>
            </div>
          </div>
          
          {/* Правая часть - изображение/карточка */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-medical-dark">
                  Сертифікована продукція
                </h3>
                
                <p className="text-medical-gray">
                  Всі вироби відповідають міжнародним стандартам якості 
                  та мають необхідні сертифікати.
                </p>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-medical-blue rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm font-semibold text-medical-blue">98%</span>
                </div>
                <p className="text-sm text-medical-gray">Рівень довіри клієнтів</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;