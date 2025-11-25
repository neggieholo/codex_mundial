// components/TrustSection.tsx

import React from 'react';
import { CheckCircle, Shield, Truck, DollarSign, Headphones } from 'lucide-react';

interface TrustPoint {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: string;
  highlight?: boolean;
}

const trustPoints: TrustPoint[] = [
  {
    icon: CheckCircle,
    title: 'Certified & Compliant',
    description: 'FDA, CE, ISO, and NAFDAC/SON approved equipment.',
    link: '/certifications',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Warranty & Support',
    description: '1-year warranty with local technical support.',
    link: '/warranty',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast delivery to major cities and remote clinics.',
    link: '/delivery-policy',
  },
  {
    icon: DollarSign,
    title: 'Flexible Procurement',
    description: 'Leasing, installment payments & B2B options.',
    link: '/financing',
  },
];

const TrustSectionMobile: React.FC = () => {
  return (
    <section className="w-full py-14 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Why Healthcare Providers <br className="sm:hidden" />
            <span className="text-blue-600">Trust Us</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Certified equipment, reliable logistics, and ongoing medical support — tailored for Nigerian hospitals and clinics.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:space-y-0">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 
              ${point.highlight ? 'border-blue-600' : 'border-gray-200 dark:border-gray-700'}
              bg-white dark:bg-gray-800`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left">
                <div className="p-3 mx-auto sm:mx-0 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <point.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-2 sm:mt-0 text-lg font-semibold text-gray-900 dark:text-white">
                  {point.title}
                </h3>
              </div>

              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                {point.description}
              </p>

              {point.link && (
                <a
                  href={point.link}
                  className="mt-3 inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile-Friendly Social Proof */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Trusted by Leading Healthcare Institutions
          </h3>

          <div className="flex flex-wrap justify-center gap-3 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            <span>LUTH</span>
            <span>Abuja Clinics</span>
            <span>State Ministry of Health</span>
            <span>Private Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSectionMobile;
