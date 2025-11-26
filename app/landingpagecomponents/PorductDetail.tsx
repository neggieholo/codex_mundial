'use client'

import React from 'react';
import Image from 'next/image';
import { EquipmentItem as Product } from '@/app/utlis/interfaces';
import Link from 'next/link';

interface Props {
  product: Product;
}

const ProductDetailClient: React.FC<Props> = ({ product }) => {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8">
        <div className="w-[70%] mx-auto my-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {/* Product Image */}
          <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.item}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Name & Category */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.item}
          </h1>
          <p className="text-lg text-red-600 dark:text-red-400 font-medium mb-4">
            {product.category}
          </p>

          {/* Notes / Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
            {product.notes}
          </p>

          {/* Contact / Buy Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:sales@example.com?subject=Inquiry about ${encodeURIComponent(
                product.item
              )}`}
              className="px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Contact to Buy
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end mx-auto mt-8 py-2 px-8">
            <Link href="/products" className="flex items-center text-secondary hover:underline">
                ← Back to Products
            </Link>
        </div>      
      </div>
  );
};

export default ProductDetailClient;
