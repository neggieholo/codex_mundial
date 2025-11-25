// components/DirectContactCTA_Mobile.tsx

import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Handshake } from 'lucide-react';
import { ArrowDown, FileCheck, PackageCheck, ClipboardCheck } from "lucide-react";

const PHONE_NUMBER = "+234 909 150 1591";
const WHATSAPP_LINK = "https://wa.me/2349091501591";

const DirectContactCTA_Mobile: React.FC = () => {
  return (
    <section className="w-full py-16 bg-blue-50 dark:bg-blue-900 px-6 sm:hidden">
      <div className="text-center">

        {/* Trust Icons */}
        <div className="flex justify-center space-x-5 mb-6 text-blue-600 dark:text-blue-300">
          <ShieldCheck className="w-9 h-9" />
          <Handshake className="w-9 h-9" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Confirm Availability & Place Order
        </h2>

        {/* Description */}
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
          No online checkout. We guide you personally to ensure correct equipment, warranty and installation support.
        </p>

        {/* Vertical Flow */}
        <div className="mt-10 flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-200">
          
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6" />
            <span className="font-medium">Contact Us</span>
          </div>

          <ArrowDown className="w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <ClipboardCheck className="w-6 h-6" />
            <span className="font-medium">Confirm Availability</span>
          </div>

          <ArrowDown className="w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <FileCheck className="w-6 h-6" />
            <span className="font-medium">Get Quotation & Warranty</span>
          </div>

          <ArrowDown className="w-6 h-6 text-blue-600" />

          <div className="flex items-center space-x-3">
            <PackageCheck className="w-6 h-6" />
            <span className="font-medium">Delivery / Installation</span>
          </div>

        </div>

        {/* Contact Buttons (Mobile-Friendly) */}
        <div className="mt-10 space-y-4">

          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="flex items-center justify-center w-full py-4 rounded-full shadow-lg text-blue-600 bg-white hover:bg-gray-100 transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now: {PHONE_NUMBER}
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 rounded-full shadow-lg text-white bg-green-500 hover:bg-green-600 transition transform hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Message via WhatsApp
          </a>

        </div>

        <p className="mt-5 text-xs text-gray-500 dark:text-gray-300">
          Open Monday–Saturday, 9AM–5PM
        </p>

      </div>
    </section>
  );
};

export default DirectContactCTA_Mobile;
