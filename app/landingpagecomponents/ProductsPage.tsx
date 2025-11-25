'use client'
import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
// Assuming you have defined the Product interface and imported your data
import { EquipmentInventory } from '../utlis/EquipmentInventory';
import { EquipmentItem as Product } from '../utlis/interfaces';
import Image from 'next/image';

const ITEMS_PER_PAGE = 9;

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // --- LOGIC 1: GET UNIQUE CATEGORIES ---
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    EquipmentInventory.forEach(item => categories.add(item.category));
    return Array.from(categories).sort();
  }, []);

  // Set all categories selected on initial load
  React.useEffect(() => {
    setSelectedCategories(allCategories);
  }, [allCategories]);

  // --- LOGIC 2: FILTERING AND SEARCHING ---
  const filteredProducts = useMemo(() => {
  // First, filter by selected categories
  let result = EquipmentInventory.filter(item =>
    selectedCategories.includes(item.category)
  );

  // Then, filter by search term
  if (searchTerm.trim() !== '') {
    const lowerCaseSearch = searchTerm.toLowerCase();
    result = result.filter(
      item =>
        item.item.toLowerCase().includes(lowerCaseSearch) ||
        item.notes.toLowerCase().includes(lowerCaseSearch)
    );
  }
  return result;
}, [selectedCategories, searchTerm]);

  // --- LOGIC 3: PAGINATION ---
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    setCurrentPage(1); // Reset page on filter change
    if (isChecked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page on search
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };
  
  // Renders the Product Card
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 flex flex-col">
      <div className="relative h-40 mb-3">
        {/* Placeholder image. Use Next.js <Image> component in production */}
        <Image
          src={product.imageUrl}
          alt={product.item}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
        {product.item}
      </h3>
      <p className="text-sm text-red-600 dark:text-red-400 font-medium mt-1">
        {product.category}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
        {product.notes}
      </p>
      <a href={`/products/${product.id.toString()}`} 
         className="mt-4 text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150">
        View
      </a>
    </div>
  );


  // --- COMPONENT RENDER ---
  return (   
        <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 pt-8 overflow-hidden">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Search Bar (Full Width) */}
                <div className="mb-8 relative max-w-4xl mx-auto">
                <input
                    type="text"
                    placeholder="Search equipment by name or feature (e.g., 'anti-rust', 'centrifuge')"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full py-3 pl-12 pr-10 border border-gray-300 dark:border-gray-700 rounded-full shadow-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                {searchTerm && (
                    <button 
                    onClick={clearSearch} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1"
                    aria-label="Clear search"
                    >
                    <X className="h-5 w-5" />
                    </button>
                )}
                </div>
                
                {/* 2. Main Two-Column Layout (Spans 70% of screen) */}
                <div className="w-[70%] mx-auto flex space-x-8 mb-16">
                
                {/* Column 1: Filter Checkboxes (Smaller Column - approx 30% of 70% width) */}
                <div className="w-1/4 sticky top-4 self-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2">
                    Filter by Category
                    </h2>
                    <div className="space-y-3">
                    {allCategories.map(category => (
                        <div key={category} className="flex items-center">
                        <input
                            id={category}
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={(e) => handleCategoryChange(category, e.target.checked)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor={category} className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {category} ({EquipmentInventory.filter(i => i.category === category).length})
                        </label>
                        </div>
                    ))}
                    </div>
                    {selectedCategories.length < allCategories.length && (
                    <button 
                        onClick={() => setSelectedCategories(allCategories)}
                        className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                        Select All
                    </button>
                    )}
                </div>

                {/* Column 2: Product Grid (Larger Column - approx 70% of 70% width) */}
                <div className="w-3/4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Showing {filteredProducts.length} Results
                    </h2>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                    <div className="mb-8 flex justify-end items-center space-x-4">
                        <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        aria-label="Previous page"
                        >
                        <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        Page {currentPage} of {totalPages}
                        </span>

                        <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 disabled:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        aria-label="Next page"
                        >
                        <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                    )}
                    
                    {/* The 3-column Product Grid */}
                    {paginatedProducts.length > 0 ? (
                        <div className="grid grid-cols-3 gap-6">
                        {paginatedProducts.map(product => (
                            <ProductCard key={product.item} product={product} />
                        ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No equipment found matching your search and filter criteria.
                            </p>
                        </div>
                    )}

                    
                </div>
                </div>
            </div>
        </div>
  );
};

export default ProductsPage;