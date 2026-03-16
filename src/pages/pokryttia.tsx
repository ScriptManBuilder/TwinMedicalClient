import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { pokryttiaGroups, PokryttiaGroup, PokryttiaVariant } from '../data/pokryttiaProducts';

// ======================== SVG ICON ========================

const DrapeIcon: React.FC<{ color?: string }> = ({ color = 'blue' }) => {
  const colors = {
    blue: { bg: '#EFF6FF', border: '#BFDBFE', accent: '#3B82F6', light: '#DBEAFE' },
    green: { bg: '#ECFDF5', border: '#D1FAE5', accent: '#10B981', light: '#D1FAE5' },
    purple: { bg: '#F5F3FF', border: '#DDD6FE', accent: '#8B5CF6', light: '#EDE9FE' },
    amber: { bg: '#FFFBEB', border: '#FDE68A', accent: '#F59E0B', light: '#FEF3C7' },
    teal: { bg: '#F0FDFA', border: '#99F6E4', accent: '#14B8A6', light: '#CCFBF1' },
    rose: { bg: '#FFF1F2', border: '#FECDD3', accent: '#F43F5E', light: '#FFE4E6' },
    cyan: { bg: '#ECFEFF', border: '#A5F3FC', accent: '#06B6D4', light: '#CFFAFE' },
    gray: { bg: '#F9FAFB', border: '#D1D5DB', accent: '#6B7280', light: '#E5E7EB' },
    indigo: { bg: '#EEF2FF', border: '#C7D2FE', accent: '#6366F1', light: '#E0E7FF' },
  };
  const c = colors[color as keyof typeof colors] || colors.blue;

  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="180" fill={c.bg} />
      {/* Drape outline */}
      <rect x="60" y="25" width="160" height="120" rx="8" fill="white" stroke={c.border} strokeWidth="1.5" />
      {/* Fold lines */}
      <path d="M60 55 L220 55" stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" />
      <path d="M60 85 L220 85" stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" />
      <path d="M60 115 L220 115" stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Adhesive field */}
      <rect x="110" y="60" width="60" height="50" rx="6" fill={c.light} stroke={c.accent} strokeWidth="1" opacity="0.7" />
      {/* Cross mark in center */}
      <line x1="130" y1="85" x2="150" y2="85" stroke={c.accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="140" y1="75" x2="140" y2="95" stroke={c.accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Corner fold */}
      <path d="M185 25 L220 60 L185 60 Z" fill={c.light} />
    </svg>
  );
};

const specialtyColors: Record<string, string> = {
  ophthalmology: 'blue',
  stomatology: 'teal',
  abdominal: 'green',
  gynecology: 'rose',
  orthopedics: 'purple',
  urology: 'cyan',
  proctology: 'amber',
  general: 'gray',
  'general-meditec': 'indigo',
};

const specialtyLabels: Record<string, string> = {
  ophthalmology: 'Офтальмологія',
  stomatology: 'Стоматологія',
  abdominal: 'Абдомінальна хірургія',
  gynecology: 'Гінекологія',
  orthopedics: 'Ортопедія',
  urology: 'Урологія',
  proctology: 'Проктологія',
  general: 'Загальні',
  'general-meditec': 'Meditec',
};

// ======================== VARIANT SELECTOR ========================

const VariantSelector: React.FC<{ group: PokryttiaGroup }> = ({ group }) => {
  const [selectedVariant, setSelectedVariant] = useState<PokryttiaVariant | null>(null);

  return (
    <div className="mt-5 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-medical-dark mb-2">
          Оберіть виріб ({group.variants.length} {group.variants.length === 1 ? 'артикул' : 'артикулів'})
        </label>
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {group.variants.map(v => (
            <button
              key={v.sku}
              onClick={() => setSelectedVariant(selectedVariant?.sku === v.sku ? null : v)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                selectedVariant?.sku === v.sku
                  ? 'bg-blue-50 border-medical-blue ring-1 ring-medical-blue/30'
                  : 'bg-white border-gray-200 hover:border-medical-blue/50 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedVariant?.sku === v.sku ? 'border-medical-blue bg-medical-blue' : 'border-gray-300'
                  }`}>
                    {selectedVariant?.sku === v.sku && (
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 text-medical-gray">
                      {v.sku}
                    </span>
                    {v.size && (
                      <span className="text-xs bg-blue-50 text-medical-blue px-1.5 py-0.5 rounded">
                        {v.size}
                      </span>
                    )}
                    {v.material && (
                      <span className="text-xs bg-gray-50 text-medical-gray px-1.5 py-0.5 rounded">
                        {v.material}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-medical-dark leading-snug">
                    {v.fullName}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected variant result */}
      {selectedVariant && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-mono bg-white border border-blue-200 rounded px-2 py-0.5 text-medical-blue">
                  Арт. {selectedVariant.sku}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">
                  Стерильне
                </span>
                {selectedVariant.hasAdhesive && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700">
                    Адгезивне
                  </span>
                )}
              </div>
              <p className="text-sm text-medical-dark leading-snug" title={selectedVariant.fullName}>
                {selectedVariant.fullName}
              </p>
              <p className="text-xs text-medical-gray mt-1">
                {selectedVariant.size && `${selectedVariant.size}`}
                {selectedVariant.material && ` · ${selectedVariant.material}`}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-medical-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Запит на ціну
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// ======================== PRODUCT GROUP CARD ========================

const PokryttiaGroupCard: React.FC<{
  group: PokryttiaGroup;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ group, isExpanded, onToggle }) => {
  const sizeRange = group.availableSizes.length > 1
    ? `${group.availableSizes[0]} — ${group.availableSizes[group.availableSizes.length - 1]}`
    : group.availableSizes[0] || '';

  const color = specialtyColors[group.specialty] || 'blue';

  return (
    <div className={`bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden ${
      isExpanded ? 'ring-2 ring-medical-blue/20 shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="flex flex-col md:flex-row">
        {/* Product illustration */}
        <div className="w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden">
          <DrapeIcon color={color} />
        </div>

        {/* Card content */}
        <div className="flex-1 p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-medical-dark leading-snug mb-1">
                {group.name}
              </h3>
              <p className="text-xs sm:text-sm text-medical-gray">{group.description}</p>
            </div>
            <button
              onClick={onToggle}
              className={`flex-shrink-0 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                isExpanded
                  ? 'bg-gray-100 text-medical-dark'
                  : 'bg-medical-blue text-white hover:bg-primary-700'
              }`}
            >
              <span className="hidden sm:inline">{isExpanded ? 'Згорнути' : 'Обрати варіант'}</span>
              <span className="sm:hidden">{isExpanded ? 'Згорнути' : 'Обрати'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Stats badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-medical-blue px-2.5 py-1 rounded-full text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {group.variants.length} артикулів
            </span>

            {sizeRange && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {sizeRange}
              </span>
            )}

            {group.availableMaterials.length > 0 && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {group.availableMaterials.length} {group.availableMaterials.length === 1 ? 'матеріал' : 'матеріалів'}
              </span>
            )}

            <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs">
              Стерильне
            </span>
          </div>

          {/* Expanded: Variant Selector */}
          {isExpanded && <VariantSelector group={group} />}
        </div>
      </div>
    </div>
  );
};

// ======================== SPECIALTY FILTER ========================

type SpecialtyFilter = 'all' | string;

// ======================== MAIN PAGE ========================

const PokryttiaPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState<SpecialtyFilter>('all');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const specialtyOptions = useMemo(() => {
    const options: Array<{ value: string; label: string }> = [{ value: 'all', label: 'Всі категорії' }];
    pokryttiaGroups.forEach(g => {
      if (!options.find(o => o.value === g.specialty)) {
        options.push({ value: g.specialty, label: specialtyLabels[g.specialty] || g.name });
      }
    });
    return options;
  }, []);

  const filteredGroups = useMemo(() => {
    return pokryttiaGroups.filter(g => {
      if (specialtyFilter !== 'all' && g.specialty !== specialtyFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.variants.some(v => v.sku.toLowerCase().includes(q) || v.fullName.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, specialtyFilter]);

  const totalVariants = filteredGroups.reduce((sum, g) => sum + g.variants.length, 0);

  const resetFilters = () => {
    setSearchQuery('');
    setSpecialtyFilter('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white">Одноразове покриття</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Одноразове покриття</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            Стерильне одноразове операційне покриття для різних медичних спеціальностей — офтальмологія, хірургія, урологія, ортопедія та інші.
          </p>
          <div className="flex items-center gap-6 mt-6 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {pokryttiaGroups.length} категорій
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {pokryttiaGroups.reduce((s, g) => s + g.variants.length, 0)}+ артикулів
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                {(searchQuery || specialtyFilter !== 'all') && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-medical-blue hover:underline flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Скинути
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
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Назва або артикул..."
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                  </svg>
                </div>
              </div>

              {/* Specialty */}
              <div>
                <label className="block text-sm font-semibold text-medical-dark mb-3">Спеціальність</label>
                <div className="space-y-2">
                  {specialtyOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setSpecialtyFilter(opt.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        specialtyFilter === opt.value
                          ? 'bg-medical-blue text-white font-medium'
                          : 'text-medical-gray hover:bg-gray-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* How-to hint */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-xs text-medical-blue font-semibold mb-1">Як замовити?</p>
                <p className="text-xs text-medical-gray leading-relaxed">
                  Оберіть категорію → натисніть «Обрати варіант» → оберіть потрібний артикул → натисніть «Запит на ціну»
                </p>
              </div>
            </div>
          </aside>

          {/* Product groups */}
          <div className="flex-1">
            {/* Results bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-medical-gray text-sm">
                <span className="font-semibold text-medical-dark">{filteredGroups.length}</span>
                {' '}категорій · <span className="font-semibold text-medical-dark">{totalVariants}</span> артикулів
              </p>
              <div className="flex flex-wrap gap-2">
                {specialtyFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                    {specialtyOptions.find(o => o.value === specialtyFilter)?.label}
                    <button onClick={() => setSpecialtyFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                    «{searchQuery}»
                    <button onClick={() => setSearchQuery('')} className="hover:text-primary-700 ml-1">×</button>
                  </span>
                )}
              </div>
            </div>

            {filteredGroups.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-16 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-medical-gray text-lg mb-2">Категорії не знайдені</p>
                <p className="text-gray-400 text-sm mb-6">Спробуйте змінити параметри фільтрів</p>
                <button onClick={resetFilters} className="bg-medical-blue text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm">
                  Скинути фільтри
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredGroups.map(group => (
                  <PokryttiaGroupCard
                    key={group.id}
                    group={group}
                    isExpanded={expandedGroups.has(group.id)}
                    onToggle={() => toggleGroup(group.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-medical-dark text-white py-16 mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Потрібна консультація або оптова пропозиція?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Зв'яжіться з нашими фахівцями для отримання індивідуальної пропозиції
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-medical-blue hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Зателефонувати зараз
            </button>
            <Link
              to="/contact"
              className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-medical-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Написати нам
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokryttiaPage;
