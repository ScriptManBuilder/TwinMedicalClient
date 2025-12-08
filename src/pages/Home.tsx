import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  // Состояние для отслеживания раскрытых карточек новостей
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  const toggleNewsCard = (index: number) => {
    setExpandedNews(expandedNews === index ? null : index);
  };

  // Автозакрытие карточки через 10 секунд
  useEffect(() => {
    if (expandedNews !== null) {
      const timer = setTimeout(() => {
        setExpandedNews(null);
      }, 10000); // 10 секунд

      // Очищаем таймер при размонтировании или изменении expandedNews
      return () => clearTimeout(timer);
    }
  }, [expandedNews]);

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
    { number: "300+", label: "Задоволених клієнтів" },
    { number: "15+", label: "Років досвіду" },
    { number: "50+", label: "Міст України" },
    { number: "24/7", label: "Підтримка" }
  ];

  const testimonials = [
    {
      name: "Др. Олена Петренко",
      position: "Головний лікар",
      hospital: "Київська міська лікарня №7",
      text: "Коли мені сказали 'давайте купимо нове обладнання', я подумала: 'знову морока з налаштуваннями і поломками'. А з Twin Medical все вийшло навпаки - поставили, показали як користуватися, і працює як годинник!",
      rating: 5
    },
    {
      name: "Др. Ігор Коваленко", 
      position: "Завідувач лабораторії",
      hospital: "Медичний центр 'Добробут'",
      text: "Три роки назад ризикнув і замовив у них апарат. Думав: якщо зламається - буду сам винен. А він досі працює без жодних проблем! Тепер всім колегам їх рекомендую.",
      rating: 5
    },
    {
      name: "Др. Марина Іваненко",
      position: "Стоматолог",
      hospital: "Стоматологічна клініка 'Смайл'",
      text: "Була готова до того, що знову будуть проблеми з новим обладнанням. Але тут все навпаки - працює як годинник! А якщо щось і трапиться, хлопці приїжджають швидше швидкої допомоги.",
      rating: 5
    }
  ];

  // Функция для форматирования даты на украинском
  const formatUkrainianDate = (date: Date): string => {
    const months = [
      'Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня',
      'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  // Создаем даты относительно сегодня
  const today = new Date();
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(today.getDate() - 3);
  
  const eightDaysAgo = new Date(today);
  eightDaysAgo.setDate(today.getDate() - 8);
  
  const thirteenDaysAgo = new Date(today);
  thirteenDaysAgo.setDate(today.getDate() - 13);

  const news = [
    {
      date: formatUkrainianDate(threeDaysAgo),
      title: "Нові УЗД апарати - тепер бачимо все!",
      description: "Прийшли нові УЗД, які показують таку картинку, що аж диво! Тепер можна роздивитися все до найменших деталей.",
      category: "Новини",
      fullContent: "Знаєте, коли дивишся на старі УЗД знімки - то здається, що це якесь абстрактне мистецтво. А з новими апаратами все зрозуміло навіть без лікаря! Картинка настільки чітка, що можна побачити те, що раніше тільки здогадувалися. Особливо круто для вагітних - тепер можна роздивитися кожний пальчик малюка.",
      benefits: ["Картинка як фото", "Все видно", "Швидше ніж раніше", "Зручно для всіх"]
    },
    {
      date: formatUkrainianDate(eightDaysAgo), 
      title: "Вчимося разом - приходьте на семінар!",
      description: "Хочете побачити, як роблять складні операції через маленькі розрізики? Запрошуємо на цікавий семінар!",
      category: "Навчання",
      fullContent: "Уявіть: операція на животі через розріз 5 мм! Звучить неможливо? А насправді це повсякденність сучасної хірургії. На семінарі покажемо, як це працює, дамо потримати інструменти в руках. Навіть якщо ви не лікар - буде цікаво побачити, як розвивається медицина.",
      benefits: ["Цікаво всім", "Можна потримати інструменти", "Розповімо простими словами", "Безкоштовно"]
    },
    {
      date: formatUkrainianDate(thirteenDaysAgo),
      title: "У Львові тепер теж є наш сервіс!",
      description: "Нарешті відкрили офіс у Львові! Тепер західна Україна теж отримає швидку допомогу з ремонтом обладнання.",
      category: "Компанія",
      fullContent: "Довго збиралися, довго планували, і нарешті зробили! Тепер у Львові працює наша команда, яка полагодить медичне обладнання швидше, ніж ви встигнете сказати 'допоможіть'. Хлопці досвідчені, руки золоті, і головне - завжди з гарним настроєм приїжджають.",
      benefits: ["Швидко приїжджаємо", "Знаємо свою справу", "Запчастини завжди є", "Гарний настрій в комплекті"]
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
            <h2 className="text-3xl font-bold mb-4">А цифри не брешуть!</h2>
            <p className="text-xl text-gray-300">
              Ось що у нас вийшло за ці роки
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
                Чому до нас повертаються?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Точно не зламається</h3>
                    <p className="text-medical-gray">Беремо тільки перевірене обладнання з паперами. Ніяких підробок чи сумнівних речей - тільки оригінал з гарантією.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Робимо все самі</h3>
                    <p className="text-medical-gray">Привеземо, поставимо, покажемо як користуватися, а потім ще й навчимо ваших лікарів. І якщо щось зламається - приїдемо полагодити.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Швидко веземо</h3>
                    <p className="text-medical-gray">Треба терміново? Не питання! Можемо доставити навіть вчора, якщо дуже потрібно. По всій Україні добираємося швидко.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark mb-2">Можна і в розстрочку</h3>
                    <p className="text-medical-gray">Не треба відразу всю суму! Можна платити частинами, в розстрочку, або навіть в лізинг. Головне - щоб ви отримали те, що потрібно.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-medical-blue to-primary-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Поговоримо по-людськи?</h3>
              <p className="text-blue-100 mb-6">
                Не знаєте що вибрати? Зателефонуйте - розповімо все простими словами і допоможемо визначитися
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Дізнаємося що вам потрібно</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Підберемо щось підходяще</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Порахуємо скільки це коштує</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  <span>Розкажемо як все буде</span>
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

      {/* Партнери/Торговые марки */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Декоративный фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-medical-blue text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Наші партнери
            </div>
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Торгові марки, з якими ми працюємо</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Офіційні партнери провідних світових виробників медичного обладнання
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/image_2025-09-07_15-46-35-removebg-preview.png", alt: "Partner Brand 1" },
              { src: "/image_2025-09-07_15-47-03-removebg-preview.png", alt: "Partner Brand 2" },
              { src: "/image_2025-09-07_15-47-28-removebg-preview.png", alt: "Partner Brand 3" },
              { src: "/images__1_-removebg-preview.png", alt: "Partner Brand 4" }
            ].map((brand, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-medical-blue transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                {/* Декоративный градиент при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-medical-blue to-primary-700 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-center h-24">
                  <img 
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>
                
                {/* Индикатор при наведении */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
          
          {/* Дополнительная информация */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-medical-gray">
              <svg className="w-5 h-5 text-medical-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Сертифіковані дистриб'ютори оригінальної продукції</span>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">А що кажуть лікарі?</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Найкращі рекомендації - від тих, хто користується щодня
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-medical-blue via-primary-700 to-medical-dark text-white relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Розпочнемо співпрацю</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Готові розпочати співпрацю?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Зв'яжіться з нами сьогодні та отримайте персональну консультацію щодо медичного обладнання для вашого закладу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-medical-blue hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Зв'язатися з нами
              </Link>
              <Link 
                to="/catalog"
                className="border-2 border-white text-white hover:bg-white hover:text-medical-blue px-8 py-4 rounded-xl font-bold transition-all duration-300"
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