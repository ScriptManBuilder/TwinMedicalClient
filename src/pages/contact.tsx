import React, { useState } from 'react';
import ContactModal from '../components/modal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    category: 'general'
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Як швидко ви доставляєте обладнання?",
      answer: "Стандартна доставка по Україні займає 2-5 робочих днів. Термінова доставка - 1-2 дні. Для віддалених регіонів можливе збільшення терміну на 1-2 дні.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-.293-.707L15 4.586A1 1 0 0014.414 4H14v3z" />
        </svg>
      ),
      color: "bg-medical-blue"
    },
    {
      question: "Чи надаєте ви гарантію та сервіс?",
      answer: "Так, всі наші товари мають офіційну гарантію від виробника від 1 до 5 років. Додатково надаємо власну сервісну підтримку протягом всього терміну експлуатації.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-green-600"
    },
    {
      question: "Які умови оплати?",
      answer: "Ми пропонуємо гнучкі умови оплати: розстрочка до 24 місяців, лізинг, оплата через банк. Також працюємо з бюджетними організаціями через тендери.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-blue-600"
    },
    {
      question: "Як отримати технічну підтримку?",
      answer: "Наша гаряча лінія працює 24/7. Також можна звернутися через сайт, email або Telegram. Середній час відповіді - менше 15 хвилин.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "bg-gray-600"
    }
  ];

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
      phone1: "+38 (093) 646-39-38",
      phone2: "+38 (068) 141-43-10",
      email: "twinmedical.od@gmail.com",
      schedule: "Пн-Пт: 9:00-18:00"
    },
    // {
    //   city: "Тест",
    //   isMain: false,
    //   address: "вул. Університетська, 45",
    //   postalCode: "61000",
    //   phone: "+38 (057) 234-56-78",
    //   email: "kharkiv@twinmedical.ua",
    //   schedule: "Пн-Пт: 9:00-17:00"
    // },
    // {
    //   city: "Тест",
    //   isMain: false,
    //   address: "вул. Медикова, 78",
    //   postalCode: "79000",
    //   phone: "+38 (032) 345-67-89",
    //   email: "lviv@twinmedical.ua",
    //   schedule: "Пн-Пт: 9:00-17:00"
    // }
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Телефонуйте",
      description: "Наша гаряча лінія працює 24/7",
      action: "+38 (093) 646-39-38",
      action1: "+38 (068) 141-43-10",
      type: "phone"
    },
    {
      icon: "✉️",
      title: "Надішліть листа",
      description: "Відповімо протягом 1 години",
      action: "twinmedical.od@gmail.com",
      type: "email"
    },
    {
      icon: "💬",
      title: "Онлайн-чат",
      description: "Миттєва підтримка телеграм",
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
                
                {method.type === 'phone' && (
                  <div className="space-y-2">
                    <a 
                      href={`tel:${method.action}`}
                      className="block text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
                    >
                      {method.action}
                    </a>
                    <a 
                      href={`tel:${method.action1}`}
                      className="block text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
                    >
                      {method.action1}
                    </a>
                  </div>
                )}
                
                {method.type === 'email' && (
                  <a 
                    href={`mailto:${method.action}`}
                    className="text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
                  >
                    {method.action}
                  </a>
                )}
                
                {method.type === 'chat' && (
                  <a 
                    href="https://t.me/TwinMedicalOd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
                  >
                    Розпочати чат
                  </a>
                )}
                
                {method.type === 'meeting' && (
                  <button 
                    onClick={openModal}
                    className="text-medical-blue hover:text-primary-700 font-semibold transition-colors duration-300"
                  >
                    Обрати час
                  </button>
                )}
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
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-primary-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-medical-dark mb-2">Напишіть нам</h2>
                <p className="text-medical-gray">Заповніть форму і ми зв'яжемося з вами протягом години</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                      Ім'я <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md placeholder-gray-400"
                        placeholder="Введіть ваше ім'я"
                        required
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-300 group-focus-within:text-medical-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-300 group-focus-within:text-medical-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                      Телефон
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md placeholder-gray-400"
                        placeholder="+38 (0XX) XXX-XX-XX"
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-300 group-focus-within:text-medical-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                      Компанія
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md placeholder-gray-400"
                        placeholder="Назва організації"
                      />
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-300 group-focus-within:text-medical-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                    Категорія запиту
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer"
                    >
                      <option value="general">🔍 Загальна інформація</option>
                      <option value="sales">💰 Продажі</option>
                      <option value="support">🛠️ Технічна підтримка</option>
                      <option value="service">⚙️ Сервісне обслуговування</option>
                      <option value="partnership">🤝 Партнерство</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-medical-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                    Повідомлення <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-medical-blue/20 focus:border-medical-blue transition-all duration-300 bg-white shadow-sm hover:shadow-md placeholder-gray-400 resize-none"
                      placeholder="Розкажіть детальніше про ваш запит..."
                      required
                    ></textarea>
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-300 group-focus-within:text-medical-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-medical-blue to-primary-700 hover:from-primary-700 hover:to-medical-blue text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center space-x-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span>Надіслати повідомлення</span>
                  </button>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    Відправляючи форму, ви погоджуєтеся з 
                    <a href="#" className="text-medical-blue hover:underline ml-1">політикою конфіденційності</a>
                  </p>
                </div>
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
                          Юридичний офіс
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
                        <p className="text-medical-dark">{office.phone1}</p>
                    
                      </div>
                          <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-medical-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p className="text-medical-dark">{office.phone2}</p>
                    
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-medical-blue to-primary-700 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Часті питання</h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Відповіді на найпоширеніші питання наших клієнтів. Не знайшли відповідь? Напишіть нам!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${faq.color} rounded-xl flex items-center justify-center text-white transform transition-transform duration-300 ${expandedFAQ === index ? 'rotate-6 scale-110' : ''}`}>
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-bold text-medical-dark pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  expandedFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="pl-16 pr-12">
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border-l-4 border-medical-blue">
                        <p className="text-medical-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="mt-16 bg-gradient-to-r from-medical-blue to-primary-700 rounded-2xl p-8 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Не знайшли відповідь на своє питання?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Наші експерти готові допомогти вам персонально! Зв'яжіться з нами будь-яким зручним способом.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onClick={openModal}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div className="text-sm font-semibold">Подзвонити</div>
                </button>
                <button 
                  onClick={openModal}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div className="text-sm font-semibold">Написати</div>
                </button>
                <a 
                  href="https://t.me/TwinMedicalOd"
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-6 h-6 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm font-semibold">Telegram</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Contact;
