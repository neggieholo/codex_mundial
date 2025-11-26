'use client';

import React from 'react';

const MobAboutUsPage: React.FC = () => {
  return (
    <div
      id="AboutUs"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-6 pb-12 px-4 sm:px-6"
    >
      {/* Header */}
      <header className="max-w-3xl mx-auto mb-8 text-center border-b border-blue-200 dark:border-blue-800 pb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-blue-300">
          About Codex Mundial
        </h1>
      </header>

      {/* Content Wrapper */}
      <div className="max-w-3xl mx-auto space-y-10">

        {/* Mission & Vision */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 border-b pb-2 text-secondary dark:text-white">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
            We founded <strong>Codex Mundial Ltd.</strong> with a single, crucial mission: to be
            the most trusted and efficient supplier of essential medical equipment
            and consumables for healthcare providers in <strong>Nigeria</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Our vision is simple: to ensure every patient receives care supported
            by reliable, high-quality medical tools, without the delays and
            uncertainty often associated with large national or international
            procurement.
          </p>
        </section>

        {/* Who We Are */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 border-b pb-2 text-secondary dark:text-white">
            Who We Are
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
            We are a <strong>small, dedicated team</strong> of professionals committed to bridging
            the gap between quality medical supplies and local healthcare needs.
            Unlike massive distributors, we specialize in <strong>personalized service</strong> and
            <strong> rapid response</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
            We understand that in healthcare, time and quality are non-negotiable.
            That&apos;s why we focus on maintaining a lean, efficient inventory of
            essential items across key categories, including:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            <li><strong>Diagnostics & Monitoring</strong> (BP monitors, glucose meters)</li>
            <li><strong>Critical Care & Respiratory</strong> (Oxygen Concentrators, Suction Machines)</li>
            <li><strong>Laboratory & Scientific</strong> (Centrifuge parts, Reagents)</li>
            <li><strong>Patient Care & Furniture</strong> (Hospital Beds, Exam Couches)</li>
          </ul>
        </section>

        {/* Commitment to Quality */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 border-b pb-2 text-secondary dark:text-white">
            Our Commitment to Quality and Reliability
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
            For <strong>Codex Mundial Ltd.</strong>, quality is our guarantee.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4 text-sm sm:text-base">
            <li>
              <strong>Verified Inventory:</strong> All products—from a simple plain vacutainer to an
              Anaesthesia machine—are sourced directly from reputable manufacturers and verified
              for international standards.
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> Fully registered and compliant with national and
              regional health authorities.
            </li>
            <li>
              <strong>Inventory Security:</strong> Cold chain protection for sensitive reagents and
              secure logistics handling.
            </li>
          </ul>

          {/* Certificate Placeholder */}
          <div className="mt-4 p-4 border border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-2">
              Certification & Assurance
            </h3>
            <div className="text-gray-600 dark:text-gray-400 italic mb-3 text-sm sm:text-base">
              [Image of Compliance Certifications]
            </div>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              <li>Current <strong>GDP Certificate</strong> ensuring supply chain integrity.</li>
              <li>Processes adhere to <strong>ISO 9001 Quality Management Standards</strong>.</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 border-b pb-2 text-secondary dark:text-white">
            Why Choose Codex Mundial Ltd.?
          </h2>
          <ol className="list-decimal pl-5 sm:pl-6 text-gray-700 dark:text-gray-300 space-y-2 text-sm sm:text-base">
            <li><strong>Personalized Service:</strong> Direct interaction with decision-makers who
              understand your local challenges.</li>
            <li><strong>Efficiency and Speed:</strong> Fast delivery of essential items without long
              waiting times.</li>
            <li><strong>Core Product Focus:</strong> Deep expertise in key items like BP monitors,
              microscopes, and hospital beds.</li>
          </ol>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white rounded-xl p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl font-semibold mb-3">
            Ready to start a partnership built on trust and reliability?
          </p>
          <button className="bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold uppercase hover:bg-gray-100 transition shadow-md text-sm sm:text-base">
            Contact Us
          </button>
        </section>

      </div>
    </div>
  );
};

export default MobAboutUsPage;
