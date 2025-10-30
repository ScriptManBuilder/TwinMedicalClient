import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  const features = [
    {
      icon: "🏥",
      title: "Для лікарень",
      description: "Комплексні рішення для медичних закладів будь-якого розміру",
      link: "/catalog"
    },
    {
      icon: "🔬",
      title: "Для лабораторій",
      description: "Точне діагностичне обладнання для лабораторних досліджень",
      link: "/catalog"
    },
    {
      icon: "🦷",
      title: "Для стоматологів",
      description: "Сучасне обладнання для стоматологічної практики",
      link: "/catalog"
    },
    {
      icon: "🚑",
      title: "Екстрена медицина",
      description: "Реанімаційне обладнання для критичних ситуацій",
      link: "/catalog"
    }
  ];

  const stats = [
    { number: "500+", label: "Задоволених клієнтів" },
    { number: "15+", label: "Років досвіду" },
    { number: "50+", label: "Міст України" },
    { number: "24/7", label: "Підтримка" }
  ];

  const testimonials = [
    {
      name: "Др. Олена Петренко",
      position: "Головний лікар",
      hospital: "Київська міська лікарня №7",
      text: "Twin Medical допомогли нам модернізувати діагностичне відділення. Якість обладнання на найвищому рівні, а сервісна підтримка працює бездоганно.",
      rating: 5
    },
    {
      name: "Др. Ігор Коваленко", 
      position: "Завідувач лабораторії",
      hospital: "Медичний центр 'Добробут'",
      text: "Вже 3 роки співпрацюємо з Twin Medical. Надійні партнери, які завжди тримають слово та надають якісну техніку в обумовлені терміни.",
      rating: 5
    },
    {
      name: "Др. Марина Іваненко",
      position: "Стоматолог",
      hospital: "Стоматологічна клініка 'Смайл'",
      text: "Обладнання від Twin Medical дозволило нам підняти якість лікування на новий рівень. Рекомендую всім колегам!",
      rating: 5
    }
  ];

  const news = [
    {
      date: "25 Жовтня 2025",
      title: "Нове надходження діагностичного обладнання",
      description: "У нашому каталозі з'явилися останні моделі УЗД апаратів від провідних європейських виробників.",
      category: "Новини"
    },
    {
      date: "20 Жовтня 2025", 
      title: "Семінар з лапароскопічної хірургії",
      description: "Twin Medical проводить безкоштовний семінар для хірургів з використання сучасного лапароскопічного обладнання.",
      category: "Навчання"
    },
    {
      date: "15 Жовтня 2025",
      title: "Відкриття нового сервісного центру у Львові",
      description: "Розширюємо мережу сервісного обслуговування - тепер ще швидша підтримка для західних регіонів України.",
      category: "Компанія"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Наши решения */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Наші рішення</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Професійне медичне обладнання для різних напрямків медицини
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="group bg-gray-50 hover:bg-medical-blue p-6 rounded-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-medical-dark group-hover:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-medical-gray group-hover:text-blue-100">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-medical-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Довіра в цифрах</h2>
            <p className="text-xl text-gray-300">
              Результати нашої роботи говорять самі за себе
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-medical-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">
                Чому обирають Twin Medical?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Гарантована якість</h3>
                    <p className="text-medical-gray">Всі наші товари мають міжнародні сертифікати та офіційну гарантію від виробників.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Повний сервіс</h3>
                    <p className="text-medical-gray">Від консультації до навчання персоналу та технічного обслуговування - ми з вами на кожному етапі.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Швидка доставка</h3>
                    <p className="text-medical-gray">Доставляємо обладнання по всій Україні в найкоротші терміни з можливістю термінової доставки.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Гнучкі умови</h3>
                    <p className="text-medical-gray">Пропонуємо різні варіанти оплати, включаючи розстрочку та лізинг для медичних закладів.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-medical-blue to-primary-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Безкоштовна консультація</h3>
              <p className="text-blue-100 mb-6">
                Наші експерти допоможуть підібрати оптимальне рішення для вашого медичного закладу
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Аналіз потреб вашого закладу</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Підбір оптимального обладнання</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Розрахунок вартості та ROI</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>План впровадження</span>
                </li>
              </ul>
              <Link 
                to="/contact"
                className="inline-block bg-white text-medical-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Замовити консультацію
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Відгуки наших клієнтів</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Довіра лікарів - найкраща оцінка нашої роботи
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-medical-gray mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-medical-dark">{testimonial.name}</p>
                  <p className="text-sm text-medical-blue">{testimonial.position}</p>
                  <p className="text-sm text-medical-gray">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Новости */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-4">Новини та події</h2>
              <p className="text-lg text-medical-gray">
                Будьте в курсі останніх новин медичної галузі
              </p>
            </div>
            <Link 
              to="/news" 
              className="hidden md:block text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
            >
              Всі новини →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-medical-blue text-white px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-medical-gray">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-medical-dark mb-3 hover:text-medical-blue cursor-pointer transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-medical-gray text-sm mb-4">{item.description}</p>
                  <button className="text-medical-blue hover:text-primary-700 font-semibold text-sm transition-colors duration-300">
                    Читати далі →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/news" 
              className="text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
            >
              Всі новини →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-medical-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готові розпочати співпрацю?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Зв'яжіться з нами сьогодні та отримайте персональну консультацію щодо медичного обладнання для вашого закладу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Зв'язатися з нами
              </Link>
              <Link 
                to="/catalog"
                className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-medical-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Переглянути каталог
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;