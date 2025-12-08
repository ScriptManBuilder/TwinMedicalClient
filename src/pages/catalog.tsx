import React from 'react';

const Catalog: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Хірургічний одяг",
      description: "Професійний хірургічний одяг для операційних",
      image: "/hirurg.png",
      products: ["Хірургічні костюми", "Операційні халати", "Шапочки та маски", "Взуття для операційних"]
    },
    {
      id: 2,
      title: "Одноразове покриття",
      description: "Стерильне одноразове покриття для медичних процедур",
      image: "/onetimematerial.png",
      products: ["Операційні простирадла", "Стерильні серветки", "Захисні чохли", "Операційні комплекти"]
    },
    {
      id: 3,
      title: "Шовні матеріали",
      description: "Високоякісні шовні матеріали для хірургії",
      image: "/shovnimaterials.png",
      products: ["Нерозсмоктувальні нитки", "Розсмоктувальні нитки", "Хірургічні голки", "Скоби та степлери"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero секция для каталога */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Каталог медичних виробів
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Професійне медичне обладнання та інструменти від провідних світових виробників. 
              Гарантована якість, міжнародні сертифікати, повний сервісний супровід.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-medical-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Завантажити каталог PDF
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-medical-blue transition-all duration-300">
                Консультація спеціаліста
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Категории товаров */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-dark mb-4">Категорії продукції</h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Широкий асортимент медичного обладнання для різних напрямків медицини
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
                <div className="h-64 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-medical-dark mb-3">{category.title}</h3>
                  <p className="text-medical-gray mb-4 flex-grow">{category.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-medical-dark text-sm">Основні продукти:</h4>
                    <ul className="text-sm text-medical-gray space-y-1">
                      {category.products.map((product, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-medical-blue rounded-full mr-2 flex-shrink-0"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full mt-auto bg-medical-blue text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300">
                    Переглянути продукцію
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="bg-medical-dark text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Потрібна консультація?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Наші фахівці допоможуть підібрати оптимальне рішення для вашого медичного закладу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Зателефонувати зараз
              </button>
              <button className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-medical-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Написати на Gmail
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;