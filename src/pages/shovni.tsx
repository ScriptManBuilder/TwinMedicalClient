import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { suturGroups, SuturGroup, SuturVariant } from '../data/shovniProducts';
import {
  equipmentProducts,
  equipmentSubcategories,
  EquipmentProduct,
  totalEquipmentProducts,
} from '../data/equipmentProducts';

// ======================== IMAGE CAROUSEL ========================

const ImageCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Set<number>>(new Set());

  const validImages = images.filter((_, i) => !imgError.has(i));

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleError = (index: number) => {
    setImgError(prev => new Set(prev).add(index));
  };

  if (validImages.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group overflow-hidden bg-white">
      <img
        src={images[current]}
        alt={`${alt} — ${current + 1}`}
        className="w-full h-full object-contain transition-opacity duration-300"
        onError={() => handleError(current)}
        loading="lazy"
      />
      {images.length > 1 && (
        <>
          {/* Left arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-medical-gray hover:text-medical-blue rounded-full w-8 h-8 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Попереднє фото"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-medical-gray hover:text-medical-blue rounded-full w-8 h-8 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            aria-label="Наступне фото"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-medical-blue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
          {/* Label */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {current === 0 ? 'Фото' : 'Розміри'}
          </div>
        </>
      )}
    </div>
  );
};

// ======================== EQUIPMENT PRODUCT CARD ========================

const EquipmentCard: React.FC<{
  product: EquipmentProduct;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ product, isExpanded, onToggle }) => {
  const subcatName = equipmentSubcategories.find(s => s.id === product.subcategory)?.name || '';
  const shortDesc = product.description.length > 180
    ? product.description.slice(0, 180).replace(/\s+\S*$/, '') + '…'
    : product.description;

  return (
    <div className={`bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden ${
      isExpanded ? 'ring-2 ring-medical-blue/20 shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="flex flex-col md:flex-row">
        {/* Image Carousel */}
        <div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
          <ImageCarousel images={product.images} alt={product.name} />
        </div>

        {/* Card content */}
        <div className="flex-1 p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-medical-dark leading-snug mb-1">
                {product.name}
              </h3>
              <span className="inline-block bg-blue-50 text-medical-blue px-2 py-0.5 rounded-full text-xs font-medium mb-2">
                {subcatName}
              </span>
            </div>
            <button
              onClick={onToggle}
              className={`flex-shrink-0 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                isExpanded
                  ? 'bg-gray-100 text-medical-dark'
                  : 'bg-medical-blue text-white hover:bg-primary-700'
              }`}
            >
              <span className="hidden sm:inline">{isExpanded ? 'Згорнути' : 'Детальніше'}</span>
              <span className="sm:hidden">{isExpanded ? 'Згорнути' : 'Деталі'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Short description when collapsed */}
          {!isExpanded && (
            <p className="text-xs sm:text-sm text-medical-gray leading-relaxed mt-1">{shortDesc}</p>
          )}

          {/* Full description when expanded */}
          {isExpanded && (
            <div className="mt-4 space-y-4">
              <p className="text-sm text-medical-dark leading-relaxed">{product.description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-medical-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Запит на ціну
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ======================== SVG ICON ========================

const NeedleIcon: React.FC<{ color?: string }> = ({ color = 'blue' }) => {
  const colors: Record<string, { bg: string; border: string; accent: string; light: string }> = {
    blue: { bg: '#EFF6FF', border: '#BFDBFE', accent: '#3B82F6', light: '#DBEAFE' },
    green: { bg: '#ECFDF5', border: '#D1FAE5', accent: '#10B981', light: '#D1FAE5' },
    purple: { bg: '#F5F3FF', border: '#DDD6FE', accent: '#8B5CF6', light: '#EDE9FE' },
    amber: { bg: '#FFFBEB', border: '#FDE68A', accent: '#F59E0B', light: '#FEF3C7' },
    teal: { bg: '#F0FDFA', border: '#99F6E4', accent: '#14B8A6', light: '#CCFBF1' },
    rose: { bg: '#FFF1F2', border: '#FECDD3', accent: '#F43F5E', light: '#FFE4E6' },
    cyan: { bg: '#ECFEFF', border: '#A5F3FC', accent: '#06B6D4', light: '#CFFAFE' },
    gray: { bg: '#F9FAFB', border: '#D1D5DB', accent: '#6B7280', light: '#E5E7EB' },
    indigo: { bg: '#EEF2FF', border: '#C7D2FE', accent: '#6366F1', light: '#E0E7FF' },
    lime: { bg: '#F7FEE7', border: '#D9F99D', accent: '#84CC16', light: '#ECFCCB' },
    emerald: { bg: '#ECFDF5', border: '#A7F3D0', accent: '#059669', light: '#D1FAE5' },
    sky: { bg: '#F0F9FF', border: '#BAE6FD', accent: '#0EA5E9', light: '#E0F2FE' },
    fuchsia: { bg: '#FDF4FF', border: '#F5D0FE', accent: '#D946EF', light: '#FAE8FF' },
    orange: { bg: '#FFF7ED', border: '#FED7AA', accent: '#F97316', light: '#FFEDD5' },
  };
  const c = colors[color] || colors.blue;

  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="280" height="180" fill={c.bg} />
      {/* Thread spool */}
      <ellipse cx="200" cy="100" rx="30" ry="40" fill="white" stroke={c.border} strokeWidth="1.5" />
      <ellipse cx="200" cy="100" rx="15" ry="20" fill={c.light} stroke={c.accent} strokeWidth="1" opacity="0.7" />
      {/* Thread line */}
      <path d="M170 100 Q140 60 110 80 Q80 100 70 70" stroke={c.accent} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Needle */}
      <path d="M70 70 Q55 40 65 25" stroke={c.accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="65" cy="23" r="2" fill={c.accent} />
      {/* Thread wraps on spool */}
      <path d="M175 80 Q200 75 225 80" stroke={c.accent} strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M175 90 Q200 85 225 90" stroke={c.accent} strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M175 110 Q200 115 225 110" stroke={c.accent} strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M175 120 Q200 125 225 120" stroke={c.accent} strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
};

// ======================== CATEGORY COLORS ========================

const categoryColors: Record<string, string> = {
  polyglycolide: 'purple',
  'polyglycolide-needle': 'purple',
  'polyglycolide-lactide': 'fuchsia',
  catgut: 'amber',
  'catgut-needle': 'amber',
  'catgut-chromic': 'orange',
  polyamide: 'blue',
  'polyamide-meditec': 'indigo',
  silk: 'gray',
  polypropylene: 'sky',
  polyester: 'emerald',
  capron: 'lime',
  'capron-sterile': 'green',
  polydioxanone: 'teal',
};

// ======================== VARIANT SELECTOR ========================

const VariantSelector: React.FC<{ group: SuturGroup }> = ({ group }) => {
  const [selectedVariant, setSelectedVariant] = useState<SuturVariant | null>(null);

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
                    {v.usp && (
                      <span className="text-xs bg-blue-50 text-medical-blue px-1.5 py-0.5 rounded">
                        USP {v.usp}
                      </span>
                    )}
                    {v.length && (
                      <span className="text-xs bg-gray-50 text-medical-gray px-1.5 py-0.5 rounded">
                        {v.length}
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
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  selectedVariant.absorbable
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {selectedVariant.absorbable ? 'Розсмоктувальний' : 'Нерозсмоктувальний'}
                </span>
                {selectedVariant.needle !== 'без голки' && selectedVariant.needle && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-700">
                    З голкою
                  </span>
                )}
              </div>
              <p className="text-sm text-medical-dark leading-snug" title={selectedVariant.fullName}>
                {selectedVariant.fullName}
              </p>
              <p className="text-xs text-medical-gray mt-1">
                {selectedVariant.usp && `USP ${selectedVariant.usp}`}
                {selectedVariant.length && ` · ${selectedVariant.length}`}
                {selectedVariant.needle && ` · ${selectedVariant.needle}`}
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

const SuturGroupCard: React.FC<{
  group: SuturGroup;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ group, isExpanded, onToggle }) => {
  const uspRange = group.availableUSP.length > 1
    ? `USP ${group.availableUSP[0]} — ${group.availableUSP[group.availableUSP.length - 1]}`
    : group.availableUSP[0] ? `USP ${group.availableUSP[0]}` : '';

  const color = categoryColors[group.materialType] || 'blue';

  return (
    <div className={`bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden ${
      isExpanded ? 'ring-2 ring-medical-blue/20 shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="flex flex-col md:flex-row">
        {/* Product illustration */}
        <div className="w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden">
          <NeedleIcon color={color} />
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

            {uspRange && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {uspRange}
              </span>
            )}

            <span className={`px-2.5 py-1 rounded-full text-xs ${
              group.absorbable
                ? 'bg-green-50 text-green-700'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {group.absorbable ? 'Розсмоктувальний' : 'Нерозсмоктувальний'}
            </span>
          </div>

          {/* Expanded: Variant Selector */}
          {isExpanded && <VariantSelector group={group} />}
        </div>
      </div>
    </div>
  );
};

// ======================== CATEGORY FILTER ========================

type CategoryFilter = 'all' | 'absorbable' | 'non-absorbable';
type ActiveTab = 'sutures' | 'equipment';

// ======================== MAIN PAGE ========================

const ShovniPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('sutures');

  // ---- Suture state ----
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  // ---- Equipment state ----
  const [eqSearchQuery, setEqSearchQuery] = useState('');
  const [eqSubcategory, setEqSubcategory] = useState('all');
  const [expandedEquipment, setExpandedEquipment] = useState<Set<string>>(new Set());

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleEquipment = (id: string) => {
    setExpandedEquipment(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const categoryOptions: Array<{ value: CategoryFilter; label: string }> = [
    { value: 'all', label: 'Всі матеріали' },
    { value: 'absorbable', label: 'Розсмоктувальні' },
    { value: 'non-absorbable', label: 'Нерозсмоктувальні' },
  ];

  const filteredGroups = useMemo(() => {
    return suturGroups.filter(g => {
      if (categoryFilter === 'absorbable' && !g.absorbable) return false;
      if (categoryFilter === 'non-absorbable' && g.absorbable) return false;
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
  }, [searchQuery, categoryFilter]);

  const filteredEquipment = useMemo(() => {
    return equipmentProducts.filter(p => {
      if (eqSubcategory !== 'all' && p.subcategory !== eqSubcategory) return false;
      if (eqSearchQuery.trim()) {
        const q = eqSearchQuery.toLowerCase();
        return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      }
      return true;
    });
  }, [eqSearchQuery, eqSubcategory]);

  const totalVariants = filteredGroups.reduce((sum, g) => sum + g.variants.length, 0);

  const resetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
  };

  const resetEqFilters = () => {
    setEqSearchQuery('');
    setEqSubcategory('all');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-medical-blue to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-white">Шовні матеріали та обладнання</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Шовні матеріали та хірургічне обладнання
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            {activeTab === 'sutures'
              ? 'Хірургічні шовні матеріали — розсмоктувальні та нерозсмоктувальні: полігліколід, кетгут, поліамід, шовк, поліпропілен, поліестер, капрон, полідіоксанон.'
              : 'Степлери, троакари, ранорозширювачі, лігатурні затискачі, гемозатискачі та ультразвукове хірургічне обладнання iScalpel.'}
          </p>
          <div className="flex items-center gap-6 mt-6 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {activeTab === 'sutures'
                ? `${suturGroups.length} категорій`
                : `${totalEquipmentProducts} товарів`}
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {activeTab === 'sutures'
                ? `${suturGroups.reduce((s, g) => s + g.variants.length, 0)}+ артикулів`
                : `${equipmentSubcategories.length - 1} підкатегорій`}
            </span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-16 sm:top-20 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('sutures')}
              className={`relative px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-colors duration-200 ${
                activeTab === 'sutures'
                  ? 'text-medical-blue'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span className="hidden sm:inline">Шовні матеріали</span>
                <span className="sm:hidden">Нитки</span>
              </span>
              {activeTab === 'sutures' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`relative px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-colors duration-200 ${
                activeTab === 'equipment'
                  ? 'text-medical-blue'
                  : 'text-medical-gray hover:text-medical-blue'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="hidden sm:inline">Степлери та хірургічне обладнання</span>
                <span className="sm:hidden">Обладнання</span>
              </span>
              {activeTab === 'equipment' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-medical-blue"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ========== SUTURES TAB ========== */}
          {activeTab === 'sutures' && (
            <>
              {/* Sidebar */}
              <aside className="w-full lg:w-72 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28 sm:top-32">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                    {(searchQuery || categoryFilter !== 'all') && (
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

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Тип матеріалу</label>
                    <div className="space-y-2">
                      {categoryOptions.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => setCategoryFilter(opt.value)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            categoryFilter === opt.value
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
                <div className="flex items-center justify-between mb-6">
                  <p className="text-medical-gray text-sm">
                    <span className="font-semibold text-medical-dark">{filteredGroups.length}</span>
                    {' '}категорій · <span className="font-semibold text-medical-dark">{totalVariants}</span> артикулів
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categoryFilter !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {categoryOptions.find(o => o.value === categoryFilter)?.label}
                        <button onClick={() => setCategoryFilter('all')} className="hover:text-primary-700 ml-1">×</button>
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
                      <SuturGroupCard
                        key={group.id}
                        group={group}
                        isExpanded={expandedGroups.has(group.id)}
                        onToggle={() => toggleGroup(group.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* ========== EQUIPMENT TAB ========== */}
          {activeTab === 'equipment' && (
            <>
              {/* Sidebar */}
              <aside className="w-full lg:w-72 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28 sm:top-32">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-medical-dark">Фільтри</h2>
                    {(eqSearchQuery || eqSubcategory !== 'all') && (
                      <button
                        onClick={resetEqFilters}
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
                        value={eqSearchQuery}
                        onChange={e => setEqSearchQuery(e.target.value)}
                        placeholder="Назва товару..."
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Subcategory filter */}
                  <div>
                    <label className="block text-sm font-semibold text-medical-dark mb-3">Підкатегорія</label>
                    <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                      {equipmentSubcategories.map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => setEqSubcategory(sub.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            eqSubcategory === sub.id
                              ? 'bg-medical-blue text-white font-medium'
                              : 'text-medical-gray hover:bg-gray-100'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* How-to hint */}
                  <div className="mt-6 bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-medical-blue font-semibold mb-1">Фото та розміри</p>
                    <p className="text-xs text-medical-gray leading-relaxed">
                      Наведіть на фото товару та використовуйте стрілки для перегляду фото та таблиці розмірів
                    </p>
                  </div>
                </div>
              </aside>

              {/* Equipment products */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-medical-gray text-sm">
                    <span className="font-semibold text-medical-dark">{filteredEquipment.length}</span>
                    {' '}товарів
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {eqSubcategory !== 'all' && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        {equipmentSubcategories.find(s => s.id === eqSubcategory)?.name}
                        <button onClick={() => setEqSubcategory('all')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                    {eqSearchQuery && (
                      <span className="inline-flex items-center gap-1 bg-blue-100 text-medical-blue px-3 py-1 rounded-full text-xs font-medium">
                        «{eqSearchQuery}»
                        <button onClick={() => setEqSearchQuery('')} className="hover:text-primary-700 ml-1">×</button>
                      </span>
                    )}
                  </div>
                </div>

                {filteredEquipment.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-md p-16 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-medical-gray text-lg mb-2">Товари не знайдені</p>
                    <p className="text-gray-400 text-sm mb-6">Спробуйте змінити параметри фільтрів</p>
                    <button onClick={resetEqFilters} className="bg-medical-blue text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm">
                      Скинути фільтри
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredEquipment.map(product => (
                      <EquipmentCard
                        key={product.id}
                        product={product}
                        isExpanded={expandedEquipment.has(product.id)}
                        onToggle={() => toggleEquipment(product.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

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

export default ShovniPage;
