import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  type: string;
  sterile: boolean;
  sizes: string[];
  unit: string;
  description: string;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1610010, name: "Серветка марлева медична 5 см х 5 см (8 шарів) №50 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["5×5"], unit: "№50", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610020, name: "Серветка марлева медична 5 см х 5 см (8 шарів) №20 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["5×5"], unit: "№20", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610104, name: "Серветка марлева медична 5 см х 5 см (8 шарів) №5 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["5×5"], unit: "№5", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610118, name: "Серветка марлева медична 5 см х 5 см (8 шарів) №100 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["5×5"], unit: "№100", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610119, name: "Серветка марлева медична 5 см х 5 см (8 шарів) №100 «Славна®»", type: "Серветка марлева", sterile: false, sizes: ["5×5"], unit: "№100", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610133, name: "Серветка марлева медична 7,5 см х 7,5 см (8 шарів) №25 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["7,5×7,5"], unit: "№25", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610148, name: "Серветка марлева медична 7,5 см х 7,5 см (12 шарів) №100 «Славна®»", type: "Серветка марлева", sterile: false, sizes: ["7,5×7,5"], unit: "№100", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610162, name: "Серветка марлева медична 10 см х 10 см (12 шарів) №10 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["10×10"], unit: "№10", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610179, name: "Серветка марлева медична 10 см х 10 см (8 шарів) №100 «Славна®»", type: "Серветка марлева", sterile: false, sizes: ["10×10"], unit: "№100", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610181, name: "Серветка марлева медична 10 см х 10 см (12 шарів) №100 «Славна®»", type: "Серветка марлева", sterile: false, sizes: ["10×10"], unit: "№100", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610192, name: "Серветка марлева медична 10 см х 20 см (12 шарів) №10 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["10×20"], unit: "№10", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610002, name: "Серветка марлева медична 45 см х 20 см (4 шари) №5 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["45×20"], unit: "№5", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1610319, name: "Серветка марлева медична з петлею 45 см х 45 см (4 шари) №5 «Славна®»", type: "Серветка марлева", sterile: true, sizes: ["45×45"], unit: "№5", description: "Марля медична бавовняна, тип 17", inStock: true },
  { id: 1640112, name: "Спонж марлевий медичний діаметром 2,5 см №50 «Славна®»", type: "Спонж", sterile: true, sizes: ["2,5 см"], unit: "№50", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640111, name: "Спонж марлевий медичний діаметром 2,5 см №25 «Славна®»", type: "Спонж", sterile: true, sizes: ["2,5 см"], unit: "№25", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640116, name: "Спонж марлевий медичний діаметром 3 см №10 «Славна®»", type: "Спонж", sterile: true, sizes: ["3 см"], unit: "№10", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640117, name: "Спонж марлевий медичний діаметром 3 см №25 «Славна®»", type: "Спонж", sterile: true, sizes: ["3 см"], unit: "№25", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640120, name: "Спонж марлевий медичний діаметром 4 см №2 «Славна®»", type: "Спонж", sterile: true, sizes: ["4 см"], unit: "№2", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640123, name: "Спонж марлевий медичний діаметром 4 см №25 «Славна®»", type: "Спонж", sterile: true, sizes: ["4 см"], unit: "№25", description: "Марля медична бавовняна, тип 20", inStock: true },
  { id: 1640124, name: "Спонж марлевий медичний діаметром 4 см №50 «Славна®»", type: "Спонж", sterile: true, sizes: ["4 см"], unit: "№50", description: "Марля медична бавовняна, тип 20", inStock: true },
];

const typeOptions = ["Всі", "Серветки", "Бинти", "Тампони", "Кульки", "Марля в рулонах"];
const sterileOptions = ["Всі", "Стерильні", "Нестерильні"];
const stockOptions = ["Всі", "В наявності", "Немає в наявності"];

const MarlevaProductia: React.FC = () => {
  const [selectedType, setSelectedType] = useState("Всі");
  const [selectedSterile, setSelectedSterile] = useState("Всі");
  const [selectedStock, setSelectedStock] = useState("Всі");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchType = selectedType === "Всі" || p.type === selectedType;
      const matchSterile =
        selectedSterile === "Всі" ||
        (selectedSterile === "Стерильні" && p.sterile) ||
        (selectedSterile === "Нестерильні" && !p.sterile);
      const matchStock =
        selectedStock === "Всі" ||
        (selectedStock === "В наявності" && p.inStock) ||
        (selectedStock === "Немає в наявності" && !p.inStock);
      const matchSearch =
        searchQuery.trim() === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchSterile && matchStock && matchSearch;
    });
  }, [selectedType, selectedSterile, selectedStock, searchQuery]);

  const resetFilters = () => {
    setSelectedType("Всі");
    setSelectedSterile("Всі");
    setSelectedStock("Всі");
    setSearchQuery("");
  };

  const activeFiltersCount = [
    selectedType !== "Всі",
    selectedSterile !== "Всі",
    selectedStock !== "Всі",
    searchQuery.trim() !== "",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white">Марлева продукція</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Марлева продукція</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Широкий асортимент марлевої продукції медичного призначення — серветки, бинти, тампони, кульки та марля в рулонах.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-medical-blue hover:underline flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Скинути ({activeFiltersCount})
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-medical-dark mb-2">Пошук</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Назва продукту..."
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                  </svg>
                </div>
              </div>

              {/* Type filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-medical-dark mb-3">Тип продукції</label>
                <div className="space-y-2">
                  {typeOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedType(opt)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        selectedType === opt
                          ? "bg-medical-blue text-white font-medium"
                          : "text-medical-gray hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sterile filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-medical-dark mb-3">Стерильність</label>
                <div className="space-y-2">
                  {sterileOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedSterile(opt)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        selectedSterile === opt
                          ? "bg-medical-blue text-white font-medium"
                          : "text-medical-gray hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock filter */}
              <div>
                <label className="block text-sm font-semibold text-medical-dark mb-3">Наявність</label>
                <div className="space-y-2">
                  {stockOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedStock(opt)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        selectedStock === opt
                          ? "bg-medical-blue text-white font-medium"
                          : "text-medical-gray hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Results bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-medical-gray text-sm">
                Знайдено: <span className="font-semibold text-medical-dark">{filtered.length}</span> товарів
              </p>
              {/* Active filter chips */}
              <div className="flex flex-wrap gap-2">
                {selectedType !== "Всі" && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                    {selectedType}
                    <button onClick={() => setSelectedType("Всі")} className="hover:text-primary-700 ml-1">×</button>
                  </span>
                )}
                {selectedSterile !== "Всі" && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                    {selectedSterile}
                    <button onClick={() => setSelectedSterile("Всі")} className="hover:text-primary-700 ml-1">×</button>
                  </span>
                )}
                {selectedStock !== "Всі" && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                    {selectedStock}
                    <button onClick={() => setSelectedStock("Всі")} className="hover:text-primary-700 ml-1">×</button>
                  </span>
                )}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-16 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-medical-gray text-lg mb-2">Товари не знайдені</p>
                <p className="text-gray-400 text-sm mb-6">Спробуйте змінити параметри фільтрів</p>
                <button onClick={resetFilters} className="bg-medical-blue text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm">
                  Скинути фільтри
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image placeholder */}
                    <div className="h-40 bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          product.sterile
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {product.sterile ? "Стерильний" : "Нестерильний"}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          product.inStock
                            ? "bg-blue-100 text-medical-blue"
                            : "bg-red-50 text-red-400"
                        }`}>
                          {product.inStock ? "В наявності" : "Немає"}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-medical-dark mb-2 leading-snug">{product.name}</h3>
                      <p className="text-xs text-medical-gray mb-3 flex-grow">{product.description}</p>

                      {/* Sizes */}
                      {product.sizes.length > 1 && (
                        <div className="mb-3">
                          <p className="text-xs font-semibold text-medical-dark mb-1">Розміри:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.sizes.map((size) => (
                              <span key={size} className="text-xs border border-gray-200 rounded px-2 py-0.5 text-medical-gray">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <button className="mt-auto w-full bg-medical-blue text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-300">
                        Запит на ціну
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-medical-dark text-white py-16 mt-10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Потрібна консультація або оптова пропозиція?</h2>
          <p className="text-gray-300 text-lg mb-8">Зв'яжіться з нашими фахівцями для отримання індивідуальної пропозиції</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Зателефонувати зараз
            </button>
            <Link to="/contact" className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-medical-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center">
              Написати нам
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarlevaProductia;
