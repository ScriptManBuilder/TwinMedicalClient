import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { productGroups, ProductGroup, ProductVariant } from '../data/marlevaProducts';

// ======================== HELPERS ========================

function layersLabel(n: number): string {
  const lastTwo = n % 100;
  const lastOne = n % 10;
  if (lastTwo >= 11 && lastTwo <= 19) return `${n} шарів`;
  if (lastOne === 1) return `${n} шар`;
  if (lastOne >= 2 && lastOne <= 4) return `${n} шари`;
  return `${n} шарів`;
}

function packagingLabel(n: number): string {
  return n === 1 ? '1 шт.' : `№${n}`;
}

// ======================== SVG ICONS ========================

const GauzePadIcon: React.FC = () => (
  <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="180" fill="#EFF6FF" />
    <rect x="70" y="30" width="140" height="110" rx="6" fill="white" stroke="#BFDBFE" strokeWidth="1.5" />
    <line x1="70" y1="52" x2="210" y2="52" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="70" y1="74" x2="210" y2="74" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="70" y1="96" x2="210" y2="96" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="70" y1="118" x2="210" y2="118" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="105" y1="30" x2="105" y2="140" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="140" y1="30" x2="140" y2="140" stroke="#BFDBFE" strokeWidth="1" />
    <line x1="175" y1="30" x2="175" y2="140" stroke="#BFDBFE" strokeWidth="1" />
    <path d="M175 30 L210 65 L175 65 Z" fill="#DBEAFE" />
    <rect x="126" y="83" width="28" height="8" rx="2" fill="#3B82F6" opacity="0.35" />
    <rect x="136" y="73" width="8" height="28" rx="2" fill="#3B82F6" opacity="0.35" />
  </svg>
);

const SpongeIcon: React.FC = () => (
  <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="280" height="180" fill="#ECFDF5" />
    <circle cx="140" cy="90" r="55" fill="white" stroke="#D1FAE5" strokeWidth="2" />
    <circle cx="140" cy="90" r="44" fill="#F0FDF4" stroke="#A7F3D0" strokeWidth="1.5" />
    <circle cx="118" cy="74" r="5" fill="#34D399" opacity="0.6" />
    <circle cx="158" cy="68" r="4" fill="#34D399" opacity="0.5" />
    <circle cx="128" cy="102" r="4.5" fill="#34D399" opacity="0.6" />
    <circle cx="162" cy="98" r="5" fill="#34D399" opacity="0.5" />
    <circle cx="120" cy="112" r="3.5" fill="#34D399" opacity="0.6" />
    <circle cx="155" cy="115" r="4" fill="#34D399" opacity="0.5" />
    <circle cx="140" cy="78" r="3" fill="#34D399" opacity="0.4" />
    <circle cx="116" cy="68" r="14" fill="white" opacity="0.35" />
  </svg>
);

// ======================== VARIANT CONFIGURATOR ========================

const VariantConfigurator: React.FC<{ group: ProductGroup }> = ({ group }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedLayers, setSelectedLayers] = useState<number | null>(null);
  const [selectedSterile, setSelectedSterile] = useState<boolean | null>(null);
  const [selectedPackaging, setSelectedPackaging] = useState<number | null>(null);

  const hasLayers = group.availableLayers.length > 0;

  // Cascading filtered variants at each selection step
  const variantsForSize = useMemo(() => {
    if (!selectedSize) return group.variants;
    return group.variants.filter(v => v.size === selectedSize);
  }, [selectedSize, group.variants]);

  const availableLayers = useMemo(() => {
    const layers = variantsForSize
      .map(v => v.layers)
      .filter((l): l is number => l !== null);
    return Array.from(new Set(layers)).sort((a, b) => a - b);
  }, [variantsForSize]);

  const variantsForLayers = useMemo(() => {
    if (!hasLayers) return variantsForSize;
    if (selectedLayers === null) return variantsForSize;
    return variantsForSize.filter(v => v.layers === selectedLayers);
  }, [variantsForSize, selectedLayers, hasLayers]);

  const sterileOptions = useMemo(() => ({
    hasSterile: variantsForLayers.some(v => v.sterile),
    hasNonSterile: variantsForLayers.some(v => !v.sterile),
  }), [variantsForLayers]);

  const variantsForSterile = useMemo(() => {
    if (selectedSterile === null) return variantsForLayers;
    return variantsForLayers.filter(v => v.sterile === selectedSterile);
  }, [variantsForLayers, selectedSterile]);

  const availablePackaging = useMemo(() => {
    return Array.from(new Set(variantsForSterile.map(v => v.packaging))).sort((a, b) => a - b);
  }, [variantsForSterile]);

  const matchedVariant: ProductVariant | null = useMemo(() => {
    if (selectedPackaging === null) return null;
    return variantsForSterile.find(v => v.packaging === selectedPackaging) ?? null;
  }, [variantsForSterile, selectedPackaging]);

  // Reset downstream on selection changes
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setSelectedLayers(null);
    setSelectedSterile(null);
    setSelectedPackaging(null);
  };

  const handleLayersChange = (layers: number) => {
    setSelectedLayers(layers);
    setSelectedSterile(null);
    setSelectedPackaging(null);
  };

  const handleSterileChange = (sterile: boolean) => {
    setSelectedSterile(sterile);
    setSelectedPackaging(null);
  };

  const handleReset = () => {
    setSelectedSize(null);
    setSelectedLayers(null);
    setSelectedSterile(null);
    setSelectedPackaging(null);
  };

  // Determine step progress
  const stepsDone =
    (selectedSize !== null ? 1 : 0) +
    (!hasLayers || selectedLayers !== null ? 1 : 0) +
    (selectedSterile !== null ? 1 : 0) +
    (selectedPackaging !== null ? 1 : 0);

  const totalSteps = hasLayers ? 4 : 3;

  return (
    <div className="mt-5 space-y-5">
      {/* Progress indicator */}
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-medical-blue h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(stepsDone / totalSteps) * 100}%` }}
          />
        </div>
        <span className="text-xs text-medical-gray whitespace-nowrap">
          {stepsDone}/{totalSteps} обрано
        </span>
        {stepsDone > 0 && (
          <button onClick={handleReset} className="text-xs text-medical-blue hover:underline">
            Скинути
          </button>
        )}
      </div>

      {/* Step 1: Size */}
      <div>
        <label className="block text-sm font-semibold text-medical-dark mb-2">
          {group.category === 'sponge' ? 'Діаметр' : 'Розмір'}
        </label>
        <div className="flex flex-wrap gap-2">
          {group.availableSizes.map(size => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-200 ${
                selectedSize === size
                  ? 'bg-medical-blue text-white border-medical-blue shadow-sm'
                  : 'bg-white text-medical-dark border-gray-200 hover:border-medical-blue hover:text-medical-blue'
              }`}
            >
              {size} {!size.includes('м') && group.category !== 'sponge' ? 'см' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Layers (napkins only) */}
      {hasLayers && selectedSize && (
        <div>
          <label className="block text-sm font-semibold text-medical-dark mb-2">
            Кількість шарів
          </label>
          <div className="flex flex-wrap gap-2">
            {group.availableLayers.map(l => {
              const isAvailable = availableLayers.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => isAvailable && handleLayersChange(l)}
                  disabled={!isAvailable}
                  className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-200 ${
                    selectedLayers === l
                      ? 'bg-medical-blue text-white border-medical-blue shadow-sm'
                      : isAvailable
                      ? 'bg-white text-medical-dark border-gray-200 hover:border-medical-blue hover:text-medical-blue'
                      : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                  }`}
                >
                  {layersLabel(l)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Sterility */}
      {selectedSize && (!hasLayers || selectedLayers !== null) && (
        <div>
          <label className="block text-sm font-semibold text-medical-dark mb-2">
            Стерильність
          </label>
          <div className="flex gap-2">
            {[true, false].map(val => {
              const isAvailable = val ? sterileOptions.hasSterile : sterileOptions.hasNonSterile;
              const label = val ? 'Стерильна' : 'Нестерильна';
              return (
                <button
                  key={String(val)}
                  onClick={() => isAvailable && handleSterileChange(val)}
                  disabled={!isAvailable}
                  className={`px-4 py-1.5 rounded-lg text-sm border transition-all duration-200 ${
                    selectedSterile === val
                      ? val
                        ? 'bg-green-600 text-white border-green-600 shadow-sm'
                        : 'bg-gray-600 text-white border-gray-600 shadow-sm'
                      : isAvailable
                      ? 'bg-white text-medical-dark border-gray-200 hover:border-medical-blue'
                      : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 4: Packaging */}
      {selectedSterile !== null && (
        <div>
          <label className="block text-sm font-semibold text-medical-dark mb-2">
            Кількість в упаковці
          </label>
          <div className="flex flex-wrap gap-2">
            {availablePackaging.map(p => (
              <button
                key={p}
                onClick={() => setSelectedPackaging(p)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-all duration-200 ${
                  selectedPackaging === p
                    ? 'bg-medical-blue text-white border-medical-blue shadow-sm'
                    : 'bg-white text-medical-dark border-gray-200 hover:border-medical-blue hover:text-medical-blue'
                }`}
              >
                {packagingLabel(p)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result: Matched variant */}
      {matchedVariant && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono bg-white border border-blue-200 rounded px-2 py-0.5 text-medical-blue">
                  Арт. {matchedVariant.sku}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  matchedVariant.sterile
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {matchedVariant.sterile ? 'Стерильна' : 'Нестерильна'}
                </span>
              </div>
              <p className="text-sm text-medical-dark leading-snug truncate" title={matchedVariant.fullName}>
                {matchedVariant.fullName}
              </p>
              <p className="text-xs text-medical-gray mt-1">
                {matchedVariant.size}{group.category !== 'sponge' && !matchedVariant.size.includes('м') ? ' см' : ''}
                {matchedVariant.layers ? ` · ${layersLabel(matchedVariant.layers)}` : ''}
                {' · '}{packagingLabel(matchedVariant.packaging)}
                {' · '}{matchedVariant.gauzeType}
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

const ProductGroupCard: React.FC<{
  group: ProductGroup;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ group, isExpanded, onToggle }) => {
  const sizeRange = group.availableSizes.length > 1
    ? `${group.availableSizes[0]} — ${group.availableSizes[group.availableSizes.length - 1]}`
    : group.availableSizes[0] || '';

  return (
    <div className={`bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden ${
      isExpanded ? 'ring-2 ring-medical-blue/20 shadow-lg' : 'hover:shadow-lg'
    }`}>
      <div className="flex flex-col md:flex-row">
        {/* Product illustration */}
        <div className="w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden">
          {group.category === 'sponge' ? <SpongeIcon /> : <GauzePadIcon />}
        </div>

        {/* Card content */}
        <div className="flex-1 p-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-base font-bold text-medical-dark leading-snug mb-1">
                {group.name}
              </h3>
              <p className="text-sm text-medical-gray">{group.description}</p>
            </div>
            <button
              onClick={onToggle}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isExpanded
                  ? 'bg-gray-100 text-medical-dark'
                  : 'bg-medical-blue text-white hover:bg-primary-700'
              }`}
            >
              {isExpanded ? 'Згорнути' : 'Обрати варіант'}
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

            {group.availableSizes.length > 0 && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {group.category === 'sponge' ? 'Ø ' : ''}{sizeRange}{group.category !== 'sponge' && !sizeRange.includes('м') ? ' см' : ''}
              </span>
            )}

            {group.availableLayers.length > 0 && (
              <span className="bg-gray-100 text-medical-gray px-2.5 py-1 rounded-full text-xs">
                {group.availableLayers.join(', ')} шарів
              </span>
            )}

            {group.hasLoop && (
              <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium">
                З петлею
              </span>
            )}

            {group.hasXRayThread && (
              <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
                Р/к нитка
              </span>
            )}

            {group.isDental && (
              <span className="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full text-xs font-medium">
                Стоматологічна
              </span>
            )}

            {group.hasSterile && group.hasNonSterile && (
              <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs">
                Стер. / Нестер.
              </span>
            )}
            {group.hasSterile && !group.hasNonSterile && (
              <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs">
                Стерильна
              </span>
            )}
            {!group.hasSterile && group.hasNonSterile && (
              <span className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full text-xs">
                Нестерильна
              </span>
            )}
          </div>

          {/* Expanded: Variant Configurator */}
          {isExpanded && <VariantConfigurator group={group} />}
        </div>
      </div>
    </div>
  );
};

// ======================== CATEGORY FILTER ========================

type CategoryFilter = 'all' | 'servetka' | 'sponge';

const categoryOptions: Array<{ value: CategoryFilter; label: string }> = [
  { value: 'all', label: 'Всі категорії' },
  { value: 'servetka', label: 'Серветки' },
  { value: 'sponge', label: 'Спонжі' },
];

// ======================== MAIN PAGE ========================

const MarlevaProductia: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredGroups = useMemo(() => {
    return productGroups.filter(g => {
      if (categoryFilter !== 'all' && g.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.variants.some(v => v.sku.includes(q) || v.fullName.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, categoryFilter]);

  const totalVariants = filteredGroups.reduce((sum, g) => sum + g.variants.length, 0);

  const resetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
  };

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
            Широкий асортимент марлевої продукції медичного призначення — серветки, спонжі та спеціалізовані вироби.
          </p>
          <div className="flex items-center gap-6 mt-6 text-blue-100 text-sm">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {productGroups.length} категорій
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {productGroups.reduce((s, g) => s + g.variants.length, 0)}+ артикулів
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
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
                <label className="block text-sm font-semibold text-medical-dark mb-3">Тип продукції</label>
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
                  Оберіть категорію → натисніть «Обрати варіант» → сконфігуруйте потрібні параметри → натисніть «Запит на ціну»
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
                  <ProductGroupCard
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
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Потрібна консультація або оптова пропозиція?</h2>
          <p className="text-gray-300 text-lg mb-8">
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

export default MarlevaProductia;
