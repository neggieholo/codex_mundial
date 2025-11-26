'use client'

import React from 'react';
import Image from 'next/image';
import { EquipmentItem as Product } from '@/app/utlis/interfaces';
import Link from 'next/link';

interface Props {
  product: Product;
}

const ProductDetailMobile: React.FC<Props> = ({ product }) => {
  return (    
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-4 px-3">
        {/* Container */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4  mt-1">

          {/* Product Image */}
          <div className="relative w-full h-72 mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.item}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Name & Category */}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {product.item}
          </h1>
          <p className="text-sm text-red-600 dark:text-red-400 font-medium mb-3">
            {product.category}
          </p>

          {/* Notes / Description */}
          <div className="max-h-60 overflow-y-auto mb-4">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm">
              {product.notes}
            </p>
          </div>

          {/* Contact / Buy Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:sales@example.com?subject=Inquiry about ${encodeURIComponent(
                product.item
              )}`}
              className="w-full text-center px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Contact to Buy
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end mx-auto mt-5 py-2 px-6">
            <Link href="/products" className="flex items-center text-secondary hover:underline">
                ← Back to Products
            </Link>
        </div>
      </div>
  );
};

export default ProductDetailMobile;
