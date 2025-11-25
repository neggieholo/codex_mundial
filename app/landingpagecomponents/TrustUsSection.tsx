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
    description: 'All equipment is FDA, CE, ISO, and locally (NAFDAC/SON) certified for safe medical use.',
    link: '/certifications',
    highlight: true,
  },
  {
    icon: Shield,
    title: '1-Year Warranty',
    description: 'Enjoy full warranty, maintenance support, and access to genuine spare parts.',
    link: '/warranty',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Secure delivery to Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu & more.',
    link: '/delivery-policy',
  },
  {
    icon: DollarSign,
    title: 'Flexible Procurement',
    description: 'Leasing, installment payments, and corporate purchase options available.',
    link: '/financing',
  },
];

const TrustSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Why Healthcare Providers <span className="text-blue-600">Trust Us</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            Reliable, certified, and compliant medical equipment—backed by service and support you can trust.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md hover:shadow-xl p-6 transition border-t-4 ${
                point.highlight ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{point.title}</h3>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">{point.description}</p>

              {point.link && (
                <a
                  href={point.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800"
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Trusted by Health Institutions Across Nigeria
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-500 dark:text-gray-400 text-sm">
            <span>Lagos University Teaching Hospital (LUTH)</span>
            <span>Abuja Clinic Group</span>
            <span>State Ministry of Health</span>
            <span>Private Research Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
