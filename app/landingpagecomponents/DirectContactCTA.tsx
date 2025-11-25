// components/DirectContactCTA.tsx

import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Handshake } from 'lucide-react';
import { ArrowRight, FileCheck, PackageCheck, ClipboardCheck } from "lucide-react";

// Contact details (modify easily)
const PHONE_NUMBER = "+234 909 150 1591";
const WHATSAPP_LINK = "https://wa.me/2349091501591";

const DirectContactCTA: React.FC = () => {
  return (
    <section className="w-full py-20 bg-blue-50 dark:bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Trust Badge Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-blue-600 dark:text-blue-300">
          <ShieldCheck className="w-10 h-10" />
          <Handshake className="w-10 h-10" />
        </div>

        {/* Main Message */}
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Confirm Availability & Place Your Order
        </h2>

        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          This is not an online checkout store. We guide you personally to ensure
          you get the right medical equipment with full support, warranty, and installation guidance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center text-gray-700 dark:text-gray-200 space-y-6 sm:space-y-0 sm:space-x-6 mt-10">
          
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6" />
            <span className="font-medium">Contact Us</span>
          </div>

          <ArrowRight className="hidden sm:block w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <ClipboardCheck className="w-6 h-6" />
            <span className="font-medium">Confirm Availability</span>
          </div>

          <ArrowRight className="hidden sm:block w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <FileCheck className="w-6 h-6" />
            <span className="font-medium">Get Quotation & Warranty Info</span>
          </div>

          <ArrowRight className="hidden sm:block w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <PackageCheck className="w-6 h-6" />
            <span className="font-medium">Delivery / Installation Arranged</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent font-medium rounded-full shadow-lg text-blue-600 bg-white hover:bg-gray-100 transition duration-150 ease-in-out transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now: {PHONE_NUMBER}
          </a>

          {/* WhatsApp Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent font-medium rounded-full shadow-lg text-white bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Message via WhatsApp
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
          Available Mon–Sat, 9AM to 5PM | Bulk orders & installation support available.
        </p>
      </div>
    </section>
  );
};

export default DirectContactCTA;
