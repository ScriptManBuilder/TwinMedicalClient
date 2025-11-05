import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: "15+", label: "Років на ринку" },
    { number: "300+", label: "Задоволених клієнтів" },
    { number: "50+", label: "Міст України" },
    { number: "24/7", label: "Технічна підтримка" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Якість понад усе",
      description: "Працюємо тільки з перевіреними виробниками, що мають міжнародні сертифікати ISO та CE"
    },
    {
      icon: "🤝",
      title: "Партнерський підхід",
      description: "Будуємо довгострокові відносини, забезпечуючи повний цикл супроводу від покупки до сервісу"
    },
    {
      icon: "🚀",
      title: "Інноваційність",
      description: "Постійно відстежуємо новинки медичного обладнання та впроваджуємо передові технології"
    },
    {
      icon: "💎",
      title: "Професіоналізм",
      description: "Наша команда має глибокі знання в медичній галузі та багаторічний досвід роботи"
    }
  ];

  const workDirections = [
    {
      icon: "🔬",
      title: "Діагностична медицина",
      description: "УЗД апарати, рентген-обладнання, МРТ, КТ, лабораторні аналізатори",
      details: "Повний спектр діагностичного обладнання для точної постановки діагнозу"
    },
    {
      icon: "⚕️",
      title: "Хірургічне обладнання",
      description: "Ендоскопія, лапароскопія, операційні столи, хірургічні інструменти",
      details: "Сучасні рішення для мінімально інвазивної та класичної хірургії"
    },
    {
      icon: "🧪",
      title: "Лабораторна медицина",
      description: "Біохімічні аналізатори, гематологічні системи, імуноферментні аналізатори",
      details: "Високоточне обладнання для клінічних та біохімічних досліджень"
    },
    {
      icon: "🏥",
      title: "Реанімація та інтенсивна терапія",
      description: "Апарати ШВЛ, моніторинг пацієнтів, дефібрилятори, інфузійні помпи",
      details: "Життєво важливе обладнання для критичних станів"
    },
    {
      icon: "🦷",
      title: "Стоматологічне обладнання",
      description: "Стоматологічні установки, рентген-апарати, ультразвукові скейлери",
      details: "Комплексні рішення для сучасних стоматологічних клінік"
    },
    {
      icon: "🔧",
      title: "Технічний сервіс",
      description: "Встановлення, навчання персоналу, технічне обслуговування, ремонт",
      details: "Повний цикл супроводу від покупки до сервісного обслуговування"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-medical-light to-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-6">
              Про Twin Medical
            </h1>
            <p className="text-xl text-medical-gray leading-relaxed">
              Ми — провідний постачальник преміального медичного обладнання в Україні. 
              Наша місія — забезпечити медичні заклади найкращими інструментами для збереження здоров'я та життя.
            </p>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-medical-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
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

      {/* Наша історія */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Наша історія</h2>
              <div className="space-y-4 text-medical-gray leading-relaxed">
                <p>
                  Twin Medical була заснована в 2009 році групою професіоналів з багаторічним досвідом роботи 
                  в медичній галузі. Наша компанія народилася з розуміння критичної важливості якісного 
                  медичного обладнання для ефективного лікування.
                </p>
                <p>
                  За роки роботи ми побудували міцні партнерські відносини з провідними світовими виробниками 
                  медтехніки та створили надійну мережу сервісних центрів по всій Україні.
                </p>
                <p>
                  Сьогодні Twin Medical — це синонім якості, надійності та професіоналізму в сфері 
                  медичного обладнання. Ми пишаємося тим, що наші рішення допомагають українським лікарям 
                  рятувати життя кожен день.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-medical-blue to-primary-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Наші досягнення</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Офіційний дистриб'ютор 15+ міжнародних брендів</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Сертифікація ISO 9001:2015 системи менеджменту якості</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Власний навчальний центр для медперсоналу</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Мережа сервісних центрів у 50+ містах України</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Наші цінності</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Принципи, якими ми керуємося у роботі та які визначають нашу корпоративну культуру
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-medical-dark mb-3">{value.title}</h3>
                <p className="text-medical-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наші напрямки роботи */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Наші напрямки роботи</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Ми працюємо в усіх ключових напрямках медицини, забезпечуючи комплексні рішення для медичних закладів
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workDirections.map((direction, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{direction.icon}</div>
                <h3 className="text-xl font-bold text-medical-dark mb-3 text-center">{direction.title}</h3>
                <p className="text-sm text-medical-gray mb-3 text-center italic">{direction.details}</p>
                <p className="text-sm text-medical-gray leading-relaxed">{direction.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-medical-blue to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Базова інформація про наші послуги</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">📋 Консультації</div>
                <p>Безкоштовний підбір обладнання під ваші потреби</p>
              </div>
              <div>
                <div className="font-semibold mb-2">🚚 Доставка</div>
                <p>По всій Україні, включаючи віддалені регіони</p>
              </div>
              <div>
                <div className="font-semibold mb-2">🔧 Встановлення</div>
                <p>Професійне встановлення та налаштування</p>
              </div>
              <div>
                <div className="font-semibold mb-2">🎓 Навчання</div>
                <p>Навчання персоналу роботі з обладнанням</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-medical-dark text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готові до співпраці?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Зв'яжіться з нами та дізнайтеся, як Twin Medical може покращити роботу вашого медичного закладу
            </p>
            <button className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Розпочати співпрацю
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
