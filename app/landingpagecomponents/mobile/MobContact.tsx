'use client';

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4 sm:hidden">
      <div className="max-w-md mx-auto">

        {/* Header */}
        <header className="text-center mb-8 pb-4 border-b-4 border-primary">
          <h1 className="text-4xl font-extrabold text-primary dark:text-white">
            Contact Us
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Get in touch via email, phone, or WhatsApp
          </p>
        </header>

        {/* Contact Info */}
        <div className="space-y-6">

          {/* Email */}
          <section className="bg-secondary/10 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-primary pl-2">
              Email
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Reach us at:{" "}
              <a 
                href="mailto:info@codexmundial.com" 
                className="text-primary font-semibold underline"
              >
                info@codexmundial.com
              </a>
            </p>
          </section>

          {/* Phone */}
          <section className="bg-secondary/10 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-primary pl-2">
              Phone
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Call us at:{" "}
              <a 
                href="tel:+2349091501591" 
                className="text-primary font-semibold underline"
              >
                +234 909 150 1591
              </a>
            </p>
          </section>

          {/* WhatsApp */}
          <section className="bg-green-500 dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-2 text-dark">
              WhatsApp
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-base">
              Chat with us for quick responses:
            </p>
            <a 
              href="https://wa.me/2349091501591" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white text-green-600 font-bold py-3 rounded-xl shadow-md"
            >
              💬 Chat on WhatsApp
            </a>
          </section>

        </div>

        {/* Footer / Call to Action */}
        <footer className="mt-10 pt-6 text-center">
          <div className="p-4 bg-green-500/30 text-primary rounded-xl shadow-xl">
            <p className="text-xl font-bold">
              Ready to connect with us?
            </p>
            <p className="mt-2 text-base">We are happy to assist you with your medical supply needs.</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ContactPage;
