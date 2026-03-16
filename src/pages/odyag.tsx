import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  clothingProducts,
  kitGroups,
  totalKits,
  filterOptions,
  ClothingProduct,
  KitProduct,
  KitGroup,
  parseKitShortName,
} from '../data/odyagProducts';

// ======================== SVG ICON ========================

const GownIcon: React.FC<{ color?: string }> = ({ color = 'blue' }) => {
  const colors: Record<string, { bg: string; border: string; accent: string; light: string }> = {
    blue: { bg: '#EFF6FF', border: '#BFDBFE', accent: '#3B82F6', light: '#DBEAFE' },
    green: { bg: '#ECFDF5', border: '#D1FAE5', accent: '#10B981', light: '#D1FAE5' },
    purple: { bg: '#F5F3FF', border: '#DDD6FE', accent: '#8B5CF6', light: '#EDE9FE' },
    teal: { bg: '#F0FDFA', border: '#99F6E4', accent: '#14B8A6', light: '#CCFBF1' },
    amber: { bg: '#FFFBEB', border: '#FDE68A', accent: '#F59E0B', light: '#FEF3C7' },
    gray: { bg: '#F9FAFB', border: '#D1D5DB', accent: '#6B7280', light: '#E5E7EB' },
    rose: { bg: '#FFF1F2', border: '#FECDD3', accent: '#F43F5E', light: '#FFE4E6' },
    cyan: { bg: '#ECFEFF', border: '#A5F3FC', accent: '#06B6D4', light: '#CFFAFE' },
  };
  const c = colors[color] || colors.blue;

  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="180" fill={c.bg} />
      {/* Gown body */}
      <path d="M110 40 L90 55 L80 130 L100 135 L105 80 L115 75 L115 135 L165 135 L165 75 L175 80 L180 135 L200 130 L190 55 L170 40 Z" fill="white" stroke={c.accent} strokeWidth="2" />
      {/* Collar */}
      <path d="M120 40 Q140 50 160 40" stroke={c.accent} strokeWidth="2" fill={c.light} />
      {/* Left sleeve */}
      <path d="M90 55 L60 75 L65 85 L95 70" stroke={c.accent} strokeWidth="2" fill="white" />
      {/* Right sleeve */}
      <path d="M190 55 L220 75 L215 85 L185 70" stroke={c.accent} strokeWidth="2" fill="white" />
      {/* Belt */}
      <path d="M105 95 L175 95" stroke={c.accent} strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Buttons */}
      <circle cx="140" cy="65" r="2" fill={c.accent} />
      <circle cx="140" cy="80" r="2" fill={c.accent} />
      <circle cx="140" cy="95" r="2" fill={c.accent} />
      {/* Cross */}
      <rect x="135" y="145" width="10" height="25" rx="1" fill={c.accent} opacity="0.3" />
      <rect x="130" y="152" width="20" height="10" rx="1" fill={c.accent} opacity="0.3" />
    </svg>
  );
};

const KitIcon: React.FC<{ color?: string }> = ({ color = 'blue' }) => {
  const colors: Record<string, { bg: string; accent: string; light: string }> = {
    blue: { bg: '#EFF6FF', accent: '#3B82F6', light: '#DBEAFE' },
    green: { bg: '#ECFDF5', accent: '#10B981', light: '#D1FAE5' },
    purple: { bg: '#F5F3FF', accent: '#8B5CF6', light: '#EDE9FE' },
    teal: { bg: '#F0FDFA', accent: '#14B8A6', light: '#CCFBF1' },
    amber: { bg: '#FFFBEB', accent: '#F59E0B', light: '#FEF3C7' },
    rose: { bg: '#FFF1F2', accent: '#F43F5E', light: '#FFE4E6' },
    cyan: { bg: '#ECFEFF', accent: '#06B6D4', light: '#CFFAFE' },
    indigo: { bg: '#EEF2FF', accent: '#6366F1', light: '#E0E7FF' },
    emerald: { bg: '#ECFDF5', accent: '#059669', light: '#D1FAE5' },
    sky: { bg: '#F0F9FF', accent: '#0EA5E9', light: '#E0F2FE' },
    fuchsia: { bg: '#FDF4FF', accent: '#D946EF', light: '#FAE8FF' },
    lime: { bg: '#F7FEE7', accent: '#84CC16', light: '#ECFCCB' },
  };
  const c = colors[color] || colors.blue;

  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="180" fill={c.bg} />
      {/* Kit box */}
      <rect x="80" y="50" width="120" height="90" rx="6" fill="white" stroke={c.accent} strokeWidth="2" />
      <rect x="80" y="50" width="120" height="25" rx="6" fill={c.light} stroke={c.accent} strokeWidth="2" />
      {/* Handle */}
      <path d="M120 50 L120 40 L160 40 L160 50" stroke={c.accent} strokeWidth="2" fill="none" />
      {/* Cross */}
      <rect x="133" y="85" width="14" height="35" rx="2" fill={c.accent} opacity="0.6" />
      <rect x="123" y="95" width="34" height="14" rx="2" fill={c.accent} opacity="0.6" />
    </svg>
  );
};

// ======================== SUBCATEGORY COLORS ========================

const subcategoryColors: Record<string, string> = {
  cardio: 'rose',
  'trauma-ortho': 'blue',
  neuro: 'purple',
  obstetric: 'teal',
  laparoscopy: 'green',
  cesarean: 'amber',
  gynecology: 'rose',
  'general-surgery': 'cyan',
  dental: 'purple',
  ophthalmology: 'blue',
  ent: 'teal',
  proctology: 'amber',
};

// ======================== CLOTHING CARD ========================

const ClothingCard: React.FC<{
  product: ClothingProduct;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ product, isExpanded, onToggle }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<number | null>(null);

  const sterileLabel = product.sterile === true ? 'Стерильний' : product.sterile === false ? 'Нестерильний' : null;
  const sterileColor = product.sterile === true ? 'bg-green-50 text-green-700' : product.sterile === false ? 'bg-gray-100 text-gray-600' : '';

  return (
    <div className={`bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden ${
      isExpanded ? 'ring-2 ring-medical-blue/20 shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden">
          <GownIcon color={product.category === 'халати захисні' ? 'amber' : product.sterile === false ? 'gray' : 'blue'} />
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-medical-dark leading-snug mb-1">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-medical-gray">{product.description}</p>
            </div>
            <button
              onClick={onToggle}
              className={`flex-shrink-0 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                isExpanded
                  ? 'bg-gray-100 text-medical-dark'
                  : 'bg-medical-blue text-white hover:bg-primary-700'
              }`}
            >
              <span className="hidden sm:inline">{isExpanded ? 'Згорнути' : 'Обрати розмір'}</span>
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

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-medical-blue px-2.5 py-1 rounded-full text-xs font-medium">
              {product.sizes.length} розмірів
            </span>
            {product.lengths.length > 0 && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {product.lengths[0]}–{product.lengths[product.lengths.length - 1]} см
              </span>
            )}
            {sterileLabel && (
              <span className={`px-2.5 py-1 rounded-full text-xs ${sterileColor}`}>
                {sterileLabel}
              </span>
            )}
            <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-xs">
              {product.material}
            </span>
          </div>

          {isExpanded && (
            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-medical-dark mb-2">Оберіть розмір</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`px-3 py-2 rounded-lg border text-sm transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-blue-50 border-medical-blue ring-1 ring-medical-blue/30 text-medical-blue font-medium'
                          : 'bg-white border-gray-200 hover:border-medical-blue/50 text-medical-dark'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {product.lengths.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-medical-dark mb-2">Оберіть довжину (см)</label>
                  <div className="flex flex-wrap gap-2">
                    {product.lengths.map(len => (
                      <button
                        key={len}
                        onClick={() => setSelectedLength(selectedLength === len ? null : len)}
                        className={`px-3 py-2 rounded-lg border text-sm transition-all duration-200 ${
                          selectedLength === len
                            ? 'bg-blue-50 border-medical-blue ring-1 ring-medical-blue/30 text-medical-blue font-medium'
                            : 'bg-white border-gray-200 hover:border-medical-blue/50 text-medical-dark'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(selectedSize || selectedLength) && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-medical-dark">{product.name}</p>
                      <p className="text-xs text-medical-gray mt-1">
                        {selectedSize && `Розмір: ${selectedSize}`}
                        {selectedSize && selectedLength && ' · '}
                        {selectedLength && `Довжина: ${selectedLength} см`}
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
          )}
        </div>
      </div>
    </div>
  );
};

// ======================== KIT CARD ========================

const KitCard: React.FC<{
  kit: KitProduct;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ kit, isExpanded, onToggle }) => {
  const shortName = parseKitShortName(kit.fullName);
  const hasDetails = kit.fullName.length > shortName.length + 5;

  return (
    <div className={`bg-white rounded-lg border transition-all duration-200 ${
      isExpanded ? 'border-medical-blue/30 shadow-md' : 'border-gray-200 hover:border-gray-300'
    }`}>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 text-medical-gray flex-shrink-0">
                {kit.sku}
              </span>
            </div>
            <p className="text-sm font-medium text-medical-dark leading-snug">
              {shortName}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1 bg-medical-blue text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-primary-700 transition-colors"
            >
              Запит на ціну
            </Link>
            {hasDetails && (
              <button
                onClick={onToggle}
                className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-medical-gray hover:bg-gray-100 transition-colors"
              >
                <span className="hidden sm:inline">{isExpanded ? 'Згорнути' : 'Детальніше'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {isExpanded && hasDetails && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-medical-gray leading-relaxed whitespace-pre-wrap">
              {kit.fullName}
            </p>
            <Link
              to="/contact"
              className="sm:hidden inline-flex items-center gap-2 bg-medical-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors mt-3"
            >
              Запит на ціну
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// ======================== KIT GROUP SECTION ========================

const KitGroupSection: React.FC<{
  group: KitGroup;
  expandedKits: Set<string>;
  onToggleKit: (sku: string) => void;
  isGroupExpanded: boolean;
  onToggleGroup: () => void;
  color: string;
}> = ({ group, expandedKits, onToggleKit, isGroupExpanded, onToggleGroup, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden">
          <KitIcon color={color} />
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-medical-dark leading-snug mb-1">
                {group.name}
              </h3>
            </div>
            <button
              onClick={onToggleGroup}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                isGroupExpanded
                  ? 'bg-gray-100 text-medical-dark'
                  : 'bg-medical-blue text-white hover:bg-primary-700'
              }`}
            >
              <span className="hidden sm:inline">{isGroupExpanded ? 'Згорнути' : 'Переглянути'}</span>
              <span className="sm:hidden">{isGroupExpanded ? 'Згорнути' : 'Відкрити'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 ${isGroupExpanded ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-medical-blue px-2.5 py-1 rounded-full text-xs font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {group.products.length} комплектів
            </span>
          </div>

          {isGroupExpanded && (
            <div className="mt-4 space-y-2">
              {group.products.map(kit => (
                <KitCard
                  key={kit.sku}
                  kit={kit}
                  isExpanded={expandedKits.has(kit.sku)}
                  onToggle={() => onToggleKit(kit.sku)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ======================== TAB TYPE ========================

type ActiveTab = 'clothing' | 'kits';

// ======================== MAIN PAGE ========================

const OdyagPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('clothing');

  // Clothing filters
  const [clothingSearch, setClothingSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sterileFilter, setSterileFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [expandedClothing, setExpandedClothing] = useState<Set<string>>(new Set());

  // Kit filters
  const [kitSearch, setKitSearch] = useState('');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [expandedKits, setExpandedKits] = useState<Set<string>>(new Set());

  const toggleClothing = (id: string) => {
    setExpandedClothing(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleKit = (sku: string) => {
    setExpandedKits(prev => {
      const next = new Set(prev);
      if (next.has(sku)) next.delete(sku); else next.add(sku);
      return next;
    });
  };

  // Filtered clothing
  const filteredClothing = useMemo(() => {
    return clothingProducts.filter(p => {
      if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
      if (sterileFilter === 'так' && p.sterile !== true) return false;
      if (sterileFilter === 'ні' && p.sterile !== false) return false;
      if (sizeFilter !== 'all' && !p.sizes.includes(sizeFilter)) return false;
      if (materialFilter !== 'all' && p.material !== materialFilter) return false;
      if (clothingSearch.trim()) {
        const q = clothingSearch.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.material.toLowerCase().includes(q);
      }
      return true;
    });
  }, [clothingSearch, categoryFilter, sterileFilter, sizeFilter, materialFilter]);

  // Filtered kits
  const filteredKitGroups = useMemo(() => {
    let groups = kitGroups;
    if (subcategoryFilter !== 'all') {
      groups = groups.filter(g => g.id === subcategoryFilter);
    }
    if (kitSearch.trim()) {
      const q = kitSearch.toLowerCase();
      groups = groups.map(g => ({
        ...g,
        products: g.products.filter(p =>
          p.sku.toLowerCase().includes(q) || p.fullName.toLowerCase().includes(q)
        ),
      })).filter(g => g.products.length > 0);
    }
    return groups;
  }, [kitSearch, subcategoryFilter]);

  const totalFilteredKits = filteredKitGroups.reduce((sum, g) => sum + g.products.length, 0);

  const resetClothingFilters = () => {
    setClothingSearch('');
    setCategoryFilter('all');
    setSterileFilter('all');
    setSizeFilter('all');
    setMaterialFilter('all');
  };

  const resetKitFilters = () => {
    setKitSearch('');
    setSubcategoryFilter('all');
  };

  const hasClothingFilters = clothingSearch || categoryFilter !== 'all' || sterileFilter !== 'all' || sizeFilter !== 'all' || materialFilter !== 'all';
  const hasKitFilters = kitSearch || subcategoryFilter !== 'all';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white">Хірургічний одяг</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Хірургічний одяг та комплекти</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            Професійний хірургічний одяг та готові операційні комплекти для різних напрямків хірургії — від халатів та шапочок до спеціалізованих наборів для кардіології, ортопедії, офтальмології та інших.
          </p>
          <div className="flex items-center gap-6 mt-6 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {clothingProducts.length} видів одягу
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {totalKits} комплектів
            </span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex gap-1 bg-gray-200 rounded-xl p-1 max-w-md">
          <button
            onClick={() => setActiveTab('clothing')}
            className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'clothing'
                ? 'bg-white text-medical-dark shadow-sm'
                : 'text-medical-gray hover:text-medical-dark'
            }`}
          >
            Одяг
          </button>
          <button
            onClick={() => setActiveTab('kits')}
            className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'kits'
                ? 'bg-white text-medical-dark shadow-sm'
                : 'text-medical-gray hover:text-medical-dark'
            }`}
          >
            Комплекти
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              {activeTab === 'clothing' ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                    {hasClothingFilters && (
                      <button onClick={resetClothingFilters} className="text-sm text-medical-blue hover:underline flex items-center gap-1">
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
                        value={clothingSearch}
                        onChange={e => setClothingSearch(e.target.value)}
                        placeholder="Назва або матеріал..."
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Категорія</label>
                    <div className="space-y-1">
                      <button
                        onClick={() => setCategoryFilter('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          categoryFilter === 'all' ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                        }`}
                      >
                        Всі категорії
                      </button>
                      {filterOptions.categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setCategoryFilter(cat)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors capitalize ${
                            categoryFilter === cat ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sterility */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Стерильність</label>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSterileFilter('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          sterileFilter === 'all' ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                        }`}
                      >
                        Всі
                      </button>
                      {filterOptions.sterility.map(s => (
                        <button
                          key={s}
                          onClick={() => setSterileFilter(s)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            sterileFilter === s ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {s === 'так' ? 'Стерильний' : 'Нестерильний'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Розмір</label>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSizeFilter('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          sizeFilter === 'all' ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                        }`}
                      >
                        Всі розміри
                      </button>
                      {filterOptions.sizes.map(s => (
                        <button
                          key={s}
                          onClick={() => setSizeFilter(s)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            sizeFilter === s ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Матеріал</label>
                    <div className="space-y-1">
                      <button
                        onClick={() => setMaterialFilter('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          materialFilter === 'all' ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                        }`}
                      >
                        Всі матеріали
                      </button>
                      {filterOptions.materials.map(m => (
                        <button
                          key={m}
                          onClick={() => setMaterialFilter(m)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            materialFilter === m ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                    {hasKitFilters && (
                      <button onClick={resetKitFilters} className="text-sm text-medical-blue hover:underline flex items-center gap-1">
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
                        value={kitSearch}
                        onChange={e => setKitSearch(e.target.value)}
                        placeholder="Артикул або назва..."
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Subcategory */}
                  <div>
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Спеціалізація</label>
                    <div className="space-y-1">
                      <button
                        onClick={() => setSubcategoryFilter('all')}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          subcategoryFilter === 'all' ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                        }`}
                      >
                        Всі спеціалізації
                      </button>
                      {kitGroups.map(g => (
                        <button
                          key={g.id}
                          onClick={() => setSubcategoryFilter(g.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            subcategoryFilter === g.id ? 'bg-medical-blue text-white font-medium' : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {g.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* How-to hint */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-xs text-medical-blue font-semibold mb-1">Як замовити?</p>
                <p className="text-xs text-medical-gray leading-relaxed">
                  {activeTab === 'clothing'
                    ? 'Оберіть виріб → натисніть «Обрати розмір» → оберіть параметри → натисніть «Запит на ціну»'
                    : 'Оберіть спеціалізацію → натисніть «Переглянути» → оберіть комплект → натисніть «Запит на ціну»'}
                </p>
              </div>
            </div>
          </aside>

          {/* Product area */}
          <div className="flex-1">
            {activeTab === 'clothing' ? (
              <>
                {/* Results bar */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-medical-gray text-sm">
                    <span className="font-semibold text-medical-dark">{filteredClothing.length}</span> виробів
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categoryFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {categoryFilter}
                        <button onClick={() => setCategoryFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                    {sterileFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {sterileFilter === 'так' ? 'Стерильний' : 'Нестерильний'}
                        <button onClick={() => setSterileFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                    {sizeFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {sizeFilter}
                        <button onClick={() => setSizeFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                    {materialFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {materialFilter}
                        <button onClick={() => setMaterialFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                  </div>
                </div>

                {filteredClothing.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-md p-16 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-medical-gray text-lg mb-2">Виробів не знайдено</p>
                    <p className="text-gray-400 text-sm mb-6">Спробуйте змінити параметри фільтрів</p>
                    <button onClick={resetClothingFilters} className="bg-medical-blue text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm">
                      Скинути фільтри
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredClothing.map(product => (
                      <ClothingCard
                        key={product.id}
                        product={product}
                        isExpanded={expandedClothing.has(product.id)}
                        onToggle={() => toggleClothing(product.id)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Results bar */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-medical-gray text-sm">
                    <span className="font-semibold text-medical-dark">{filteredKitGroups.length}</span>
                    {' '}категорій · <span className="font-semibold text-medical-dark">{totalFilteredKits}</span> комплектів
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subcategoryFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {kitGroups.find(g => g.id === subcategoryFilter)?.name}
                        <button onClick={() => setSubcategoryFilter('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                    {kitSearch && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        «{kitSearch}»
                        <button onClick={() => setKitSearch('')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                  </div>
                </div>

                {filteredKitGroups.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-md p-16 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-medical-gray text-lg mb-2">Комплектів не знайдено</p>
                    <p className="text-gray-400 text-sm mb-6">Спробуйте змінити параметри фільтрів</p>
                    <button onClick={resetKitFilters} className="bg-medical-blue text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm">
                      Скинути фільтри
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredKitGroups.map(group => (
                      <KitGroupSection
                        key={group.id}
                        group={group}
                        expandedKits={expandedKits}
                        onToggleKit={toggleKit}
                        isGroupExpanded={expandedGroups.has(group.id)}
                        onToggleGroup={() => toggleGroup(group.id)}
                        color={subcategoryColors[group.id] || 'blue'}
                      />
                    ))}
                  </div>
                )}
              </>
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

export default OdyagPage;
