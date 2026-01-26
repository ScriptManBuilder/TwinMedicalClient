import React, { useState } from 'react';
import Modal from '../components/modal';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <h3 className="text-2xl font-bold mb-6">Чим ми можемо бути корисні</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Якісна медична продукція від перевірених виробників</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Консультації та підбір оптимальних рішень</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Доставка по всій території України</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Підтримка та обслуговування клієнтів</span>
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

      {/* Про компанію */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medical-dark mb-4">Хто ми і що ми робимо</h2>
            </div>

            <div className="space-y-6 text-medical-gray leading-relaxed text-lg">
              <p>
                <strong className="text-medical-dark">Twin Medical</strong> — це надійний партнер у сфері постачання якісних медичних виробів та обладнання. 
                Ми спеціалізуємося на забезпеченні медичних закладів України преміальною продукцією, 
                яка відповідає найвищим міжнародним стандартам якості та безпеки.
              </p>
              
              <p>
                Наша компанія працює з широким асортиментом медичної продукції: від хірургічного одягу 
                та одноразових покриттів до шовних матеріалів та спеціалізованого обладнання. 
                Кожен продукт у нашому каталозі ретельно відібраний та сертифікований відповідно до 
                вимог українського законодавства та європейських стандартів.
              </p>

              <p>
                Ми не просто постачальники — ми створюємо довгострокові партнерські відносини з нашими клієнтами. 
                Twin Medical забезпечує повний цикл обслуговування: від консультації та підбору оптимальних 
                рішень до своєчасної доставки та післяпродажної підтримки. Наша мета — зробити співпрацю 
                максимально комфортною та ефективною для кожного медичного закладу.
              </p>

              <p>
                Довіряючи <strong className="text-medical-dark">Twin Medical</strong>, ви обираєте якість, надійність та професіоналізм. 
                Ми пишаємося тим, що наша продукція допомагає українським лікарям надавати 
                якісну медичну допомогу та рятувати життя щодня.
              </p>
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
            <button 
              onClick={openModal}
              className="bg-gradient-to-r from-medical-blue to-primary-700 hover:from-primary-700 hover:to-medical-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Розпочати співпрацю
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default About;
