'use client';

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 pb-6 border-b-4 border-primary">
          <h1 className="text-5xl font-extrabold text-primary dark:text-white">
            Contact Us
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
            Get in touch with us via email or phone
          </p>
        </header>

        {/* Contact Info */}
        <div className="space-y-8">

          <section className="bg-secondary/10 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary pl-3">
              Email
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              You can reach us at:{" "}
              <a href="mailto:info@codexmundial.com" className="text-primary font-semibold underline">
                info@codexmundial.com
              </a>
            </p>
          </section>

          <section className="bg-secondary/10 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-primary pl-3">
              Phone
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Call us at:{" "}
              <a href="tel:+2349091501591" className="text-primary font-semibold underline">
                +234 909 150 1591
              </a>
            </p>
          </section>
          <section className="bg-green-500 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-dark">
            WhatsApp
          </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                Chat with us on WhatsApp for quick responses:
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
        <footer className="mt-12 pt-8 text-center">
          <div className="p-6 bg-green-500/30 text-primary rounded-xl shadow-2xl">
            <p className="text-2xl font-bold">
              Ready to connect with us?
            </p>
            <p className="mt-3 text-xl">We are happy to assist you with your medical supply needs.</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ContactPage;
