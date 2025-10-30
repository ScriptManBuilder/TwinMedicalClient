import React from 'react';

const Sertificat: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015",
      subtitle: "Система менеджменту якості",
      description: "Міжнародний стандарт, що підтверджує нашу відданість принципам якості в усіх аспектах діяльності",
      issuer: "Bureau Veritas",
      validUntil: "2026",
      type: "quality"
    },
    {
      id: 2,
      title: "ISO 13485:2016",
      subtitle: "Медичні вироби - Система менеджменту якості",
      description: "Спеціалізований стандарт для організацій, що займаються проектуванням і виробництвом медичних виробів",
      issuer: "TÜV SÜD",
      validUntil: "2025",
      type: "medical"
    },
    {
      id: 3,
      title: "CE Marking",
      subtitle: "Європейський знак відповідності",
      description: "Підтвердження відповідності продукції вимогам директив Європейського Союзу",
      issuer: "Notified Body",
      validUntil: "Постійно",
      type: "compliance"
    },
    {
      id: 4,
      title: "FDA Registration",
      subtitle: "Реєстрація в США",
      description: "Офіційна реєстрація в Управлінні з контролю якості харчових продуктів і лікарських засобів США",
      issuer: "FDA",
      validUntil: "2025",
      type: "regulatory"
    },
    {
      id: 5,
      title: "MDR Compliance",
      subtitle: "Регламент ЄС по медичних виробах",
      description: "Повна відповідність новому європейському регламенту по медичних виробах (EU 2017/745)",
      issuer: "European Union",
      validUntil: "Постійно",
      type: "compliance"
    },
    {
      id: 6,
      title: "Ліцензія МОЗ України",
      subtitle: "Дозвіл на медичну практику",
      description: "Офіційна ліцензія Міністерства охорони здоров'я України на здійснення медичної діяльності",
      issuer: "МОЗ України",
      validUntil: "2027",
      type: "license"
    }
  ];

  const partners = [
    { name: "Philips Healthcare", country: "Нідерланди", specialization: "Діагностичне обладнання" },
    { name: "GE Healthcare", country: "США", specialization: "Медична візуалізація" },
    { name: "Siemens Healthineers", country: "Німеччина", specialization: "Лабораторна діагностика" },
    { name: "Medtronic", country: "Ірландія", specialization: "Хірургічне обладнання" },
    { name: "Abbott", country: "США", specialization: "Діагностичні тести" },
    { name: "Roche Diagnostics", country: "Швейцарія", specialization: "Лабораторне обладнання" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'quality': return 'bg-blue-100 text-blue-800';
      case 'medical': return 'bg-green-100 text-green-800';
      case 'compliance': return 'bg-purple-100 text-purple-800';
      case 'regulatory': return 'bg-orange-100 text-orange-800';
      case 'license': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'quality': return 'Якість';
      case 'medical': return 'Медицина';
      case 'compliance': return 'Відповідність';
      case 'regulatory': return 'Регулювання';
      case 'license': return 'Ліцензія';
      default: return 'Інше';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Сертифікати та ліцензії
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Наша діяльність підтверджена міжнародними стандартами якості та офіційними дозволами. 
              Ми гарантуємо відповідність усім вимогам безпеки та ефективності.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm">Сертифікатів</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">ISO</div>
                <div className="text-sm">Стандарти</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">EU</div>
                <div className="text-sm">Сертифікація</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">FDA</div>
                <div className="text-sm">Реєстрація</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Наші сертифікати</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Документи, що підтверджують нашу компетентність та відповідність міжнародним стандартам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(cert.type)}`}>
                      {getTypeLabel(cert.type)}
                    </span>
                    <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-medical-dark mb-2">{cert.title}</h3>
                  <h4 className="text-medical-blue font-semibold mb-3">{cert.subtitle}</h4>
                  <p className="text-medical-gray text-sm mb-4 leading-relaxed">{cert.description}</p>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-medical-gray">Видано:</span>
                      <span className="font-semibold text-medical-dark">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-medical-gray">Дійсно до:</span>
                      <span className="font-semibold text-medical-dark">{cert.validUntil}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 text-medical-blue hover:text-primary-700 font-semibold text-sm transition-colors duration-300">
                    Переглянути сертифікат →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Сертифіковані партнери</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Ми є офіційними дистриб'юторами провідних світових виробників медичного обладнання
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-medical-blue transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-primary-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {partner.name.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-medical-dark">{partner.name}</h3>
                    <p className="text-sm text-medical-gray">{partner.country}</p>
                    <p className="text-xs text-medical-blue">{partner.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Качество */}
      <section className="py-16 bg-medical-dark text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Гарантія якості</h2>
            <p className="text-xl text-gray-300 mb-8">
              Всі наші сертифікати регулярно оновлюються та підтверджуються незалежними аудиторськими компаніями
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Регулярні аудити</h3>
                <p className="text-gray-300 text-sm">Щорічна перевірка систем якості</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Міжнародні стандарти</h3>
                <p className="text-gray-300 text-sm">Відповідність ISO та європейським нормам</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Документообіг</h3>
                <p className="text-gray-300 text-sm">Повна документація всіх процесів</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sertificat;
