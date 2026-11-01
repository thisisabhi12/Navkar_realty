import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Maximize, 
  ArrowRight, 
  Filter, 
  RotateCcw, 
  ShieldCheck, 
  Check, 
  ExternalLink,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PROPERTIES_DATA, VADODARA_LOCALITIES } from '../data/properties';

export default function FeaturedListings({ 
  searchFilters, 
  onSelectProperty,
  onOpenConsultation 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocality, setSelectedLocality] = useState('All Locations');
  const [selectedBhk, setSelectedBhk] = useState('all');
  const [sortOption, setSortOption] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'area'

  // Sync incoming search filters from Hero search bar if present
  React.useEffect(() => {
    if (searchFilters) {
      if (searchFilters.category) setSelectedCategory(searchFilters.category);
      if (searchFilters.location) setSelectedLocality(searchFilters.location);
    }
  }, [searchFilters]);

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'buy' && prop.category !== 'buy' && prop.category !== 'villa') return false;
        if (selectedCategory === 'rent' && prop.category !== 'rent') return false;
        if (selectedCategory === 'commercial' && prop.category !== 'commercial') return false;
        if (selectedCategory === 'villa' && prop.category !== 'villa') return false;
      }

      // Locality filter
      if (selectedLocality !== 'All Locations') {
        const normSelected = selectedLocality.toLowerCase().replace(/[^a-z0-9]/g, '');
        const normPropLoc = (prop.location || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const normAddress = (prop.fullAddress || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!normPropLoc.includes(normSelected) && !normSelected.includes(normPropLoc) && !normAddress.includes(normSelected)) {
          return false;
        }
      }

      // BHK filter
      if (selectedBhk !== 'all') {
        if (selectedBhk === '2' && !(prop.bhk === 2 || (prop.bhkOptions && prop.bhkOptions.includes(2)))) return false;
        if (selectedBhk === '3' && !(prop.bhk === 3 || (prop.bhkOptions && prop.bhkOptions.includes(3)))) return false;
        if (selectedBhk === '4' && !(prop.bhk >= 4 || (prop.bhkOptions && prop.bhkOptions.some(b => b >= 4)))) return false;
        if (selectedBhk === 'commercial' && prop.category !== 'commercial') return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return 0; // default featured
    });
  }, [selectedCategory, selectedLocality, selectedBhk, sortOption]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedLocality('All Locations');
    setSelectedBhk('all');
    setSortOption('featured');
  };

  return (
    <section id="listings" className="py-16 sm:py-24 bg-[var(--theme-bg-section-alt)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1 text-xs font-bold text-brand-800">
            <Sparkles className="w-3.5 h-3.5 text-brand-700" />
            <span>Curated Vadodara Real Estate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202923] tracking-tight font-display">
            Featured Properties in Vadodara
          </h2>
          <p className="text-base text-[#66716A] font-normal">
            Handpicked premium residences, sky villas, and prime commercial corridors with complete RERA compliance and clear titles, managed by Navkar Realty under the VS Group umbrella.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="bg-[#F0F6F0] border border-[#DCE5DD] rounded-2xl p-4 sm:p-5 mb-10 shadow-sm transition-colors">
          
          {/* Top Row: Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DCE5DD]">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Listings' },
                { id: 'buy', label: 'For Sale (Buy)' },
                { id: 'rent', label: 'Rental Homes' },
                { id: 'villa', label: 'Luxury Villas' },
                { id: 'commercial', label: 'Commercial Spaces' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-brand-700 text-white shadow-sm'
                      : 'bg-white text-[#66716A] hover:bg-brand-50 hover:text-brand-800 border border-[#DCE5DD]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            {(selectedCategory !== 'all' || selectedLocality !== 'All Locations' || selectedBhk !== 'all' || sortOption !== 'featured') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Bottom Row: Granular Filters (Locality, BHK, Sort) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            
            {/* Locality Dropdown */}
            <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-[#DCE5DD]">
              <MapPin className="w-4 h-4 text-brand-700 flex-shrink-0" />
              <div className="w-full">
                <label htmlFor="filter-locality" className="text-[10px] font-bold uppercase tracking-wider text-[#66716A] block">Locality</label>
                <select
                  id="filter-locality"
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#202923] focus:outline-none cursor-pointer"
                >
                  {VADODARA_LOCALITIES.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* BHK Dropdown */}
            <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-[#DCE5DD]">
              <Bed className="w-4 h-4 text-brand-700 flex-shrink-0" />
              <div className="w-full">
                <label htmlFor="filter-bhk" className="text-[10px] font-bold uppercase tracking-wider text-[#66716A] block">Bedrooms / BHK</label>
                <select
                  id="filter-bhk"
                  value={selectedBhk}
                  onChange={(e) => setSelectedBhk(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#202923] focus:outline-none cursor-pointer"
                >
                  <option value="all">All Configurations</option>
                  <option value="2">2 BHK Apartments</option>
                  <option value="3">3 BHK Luxury Homes</option>
                  <option value="4">4 & 5 BHK Luxury Villas & Homes</option>
                  <option value="commercial">Commercial / Showrooms</option>
                </select>
              </div>
            </div>

            {/* Sorting */}
            <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-[#DCE5DD]">
              <Filter className="w-4 h-4 text-brand-700 flex-shrink-0" />
              <div className="w-full">
                <label htmlFor="filter-sort" className="text-[10px] font-bold uppercase tracking-wider text-[#66716A] block">Sort Order</label>
                <select
                  id="filter-sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#202923] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured / Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>

          {/* Results Summary Counter */}
          <div className="mt-3 pt-2 text-xs font-medium text-[#66716A] flex justify-between items-center">
            <span>
              Showing <strong className="text-[#202923]">{filteredProperties.length}</strong> verified properties in Vadodara
            </span>
            <span className="text-brand-800 font-semibold flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-brand-700" />
              100% Title Verified & GujRERA Listed
            </span>
          </div>

        </div>

        {/* Property Cards Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No properties match your exact filters</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We have private off-market listings across Vasna Road, Diwalipura, and Alkapuri. Let our property advisors find it for you.
            </p>
            <div className="mt-5 flex justify-center space-x-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors"
              >
                Reset All Filters
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-4 py-2 bg-brand-700 hover:bg-brand-800 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Request Custom Search
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#DCE5DD] shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Card Media Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={property.mainImage}
                    alt={`${property.title} in ${property.location}, Vadodara`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="bg-brand-800/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {property.badge}
                    </span>
                    <span className="bg-white/95 backdrop-blur-md text-[#202923] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                      {property.possession}
                    </span>
                  </div>

                  {/* Bottom Price & Category Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                    <div>
                      <span className="text-[11px] text-[#DCEBDD] font-semibold uppercase tracking-wider block">
                        {property.category === 'rent' ? 'Monthly Lease' : 'Guaranteed Price'}
                      </span>
                      <p className="text-xl sm:text-2xl font-black font-display drop-shadow-md">
                        {property.priceDisplay}
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-white/90">
                      {property.superArea}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center text-xs font-bold text-brand-800 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-brand-700" />
                      <span>{property.location}, Vadodara</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#202923] group-hover:text-brand-700 transition-colors line-clamp-1 font-display">
                      {property.title}
                    </h3>

                    {/* Subtitle / Type */}
                    <p className="text-xs text-[#66716A] mt-0.5 line-clamp-1">
                      {property.type} • {property.fullAddress}
                    </p>
                  </div>

                  {/* Key Specs Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#DCE5DD] text-[#202923] text-xs font-medium">
                    {property.bhk > 0 ? (
                      <div className="flex items-center space-x-1.5">
                        <Bed className="w-4 h-4 text-brand-700 flex-shrink-0" />
                        <span>{property.bhkDisplay || `${property.bhk} BHK`}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1.5">
                        <Maximize className="w-4 h-4 text-brand-700 flex-shrink-0" />
                        <span>Commercial</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-1.5">
                      <Bath className="w-4 h-4 text-brand-700 flex-shrink-0" />
                      <span>{property.bathrooms} Baths</span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <Maximize className="w-4 h-4 text-brand-700 flex-shrink-0" />
                      <span className="truncate">{property.superArea}</span>
                    </div>
                  </div>

                  {/* Amenities Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {property.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-brand-50/70 border border-brand-100/70 text-[#202923] px-2.5 py-1 rounded-md"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-[11px] font-semibold bg-brand-100 text-brand-900 px-2 py-1 rounded-md">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-2 flex items-center space-x-2">
                    <button
                      type="button"
                      id={`view-details-${property.id}`}
                      onClick={() => onSelectProperty(property.id)}
                      className="flex-1 bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center space-x-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/919173946161?text=Hello%20Navkar%20Realty,%20I%20am%20inquiring%20about%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)},%20Vadodara)`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Quick Inquiry on WhatsApp"
                      className="bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200 p-2.5 rounded-xl transition-colors flex items-center justify-center"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
