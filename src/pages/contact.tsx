import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
  };

  const offices = [
    {
      city: "Одеса",
      isMain: true,
      address: "вул. Медична, 123",
      postalCode: "01001",
      phone: "+38 (044) 123-45-67",
      email: "odessa@twinmedical.ua",
      schedule: "Пн-Пт: 9:00-18:00"
    },
    {
      city: "Тест",
      isMain: false,
      address: "вул. Університетська, 45",
      postalCode: "61000",
      phone: "+38 (057) 234-56-78",
      email: "kharkiv@twinmedical.ua",
      schedule: "Пн-Пт: 9:00-17:00"
    },
    {
      city: "Тест",
      isMain: false,
      address: "вул. Медикова, 78",
      postalCode: "79000",
      phone: "+38 (032) 345-67-89",
      email: "lviv@twinmedical.ua",
      schedule: "Пн-Пт: 9:00-17:00"
    }
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Телефонуйте",
      description: "Наша гаряча лінія працює 24/7",
      action: "+38 (044) 123-45-67",
      type: "phone"
    },
    {
      icon: "✉️",
      title: "Надішліть листа",
      description: "Відповімо протягом 1 години",
      action: "info@twinmedical.ua",
      type: "email"
    },
    {
      icon: "💬",
      title: "Онлайн-чат",
      description: "Миттєва підтримка на сайті",
      action: "Розпочати чат",
      type: "chat"
    },
    {
      icon: "📅",
      title: "Записатися на зустріч",
      description: "Персональна консультація",
      action: "Обрати час",
      type: "meeting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Зв'яжіться з нами
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Готові відповісти на ваші питання та надати професійну консультацію. 
              Оберіть зручний спосіб зв'язку або відвідайте наші офіси.
            </p>
          </div>
        </div>
      </section>

      {/* Способы связи */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Як з нами зв'язатися</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Оберіть найзручніший для вас спосіб зв'язку
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-medical-dark mb-2">{method.title}</h3>
                <p className="text-medical-gray text-sm mb-4">{method.description}</p>
                <button className="text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма и офисы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Напишіть нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-medical-dark font-semibold mb-2">Ім'я *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-medical-dark font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-medical-dark font-semibold mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-medical-dark font-semibold mb-2">Компанія</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-medical-dark font-semibold mb-2">Категорія запиту</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                  >
                    <option value="general">Загальна інформація</option>
                    <option value="sales">Продажі</option>
                    <option value="support">Технічна підтримка</option>
                    <option value="service">Сервісне обслуговування</option>
                    <option value="partnership">Партнерство</option>
                  </select>
                </div>

                <div>
                  <label className="block text-medical-dark font-semibold mb-2">Повідомлення *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-blue hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Надіслати повідомлення
                </button>
              </form>
            </div>

            {/* Офисы */}
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Наші офіси</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className={`p-6 rounded-xl border-2 ${office.isMain ? 'border-medical-blue bg-blue-50' : 'border-gray-200 bg-white'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-medical-dark">{office.city}</h3>
                      {office.isMain && (
                        <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Головний офіс
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-medical-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-medical-dark">{office.address}</p>
                          <p className="text-medical-gray text-sm">{office.city}, {office.postalCode}, Україна</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p className="text-medical-dark">{office.phone}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <p className="text-medical-dark">{office.email}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-medical-dark">{office.schedule}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Часті питання</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Відповіді на найпоширеніші питання наших клієнтів
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Як швидко ви доставляєте обладнання?</h3>
                <p className="text-medical-gray text-sm">Стандартна доставка по Україні займає 2-5 робочих днів. Термінова доставка - 1-2 дні.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Чи надаєте ви гарантію?</h3>
                <p className="text-medical-gray text-sm">Так, всі наші товари мають офіційну гарантію від виробника від 1 до 5 років.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Чи можна оплатити частинами?</h3>
                <p className="text-medical-gray text-sm">Ми пропонуємо гнучкі умови оплати, включаючи розстрочку та лізинг.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Чи надаєте ви навчання персоналу?</h3>
                <p className="text-medical-gray text-sm">Так, ми проводимо навчання медперсоналу роботі з обладнанням у наших тренінг-центрах.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Як отримати технічну підтримку?</h3>
                <p className="text-medical-gray text-sm">Наша гаряча лінія працює 24/7. Також можна звернутися через сайт або email.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-medical-dark mb-2">Чи працюєте з державними закладами?</h3>
                <p className="text-medical-gray text-sm">Так, ми офіційні учасники державних тендерів та працюємо з бюджетними установами.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
