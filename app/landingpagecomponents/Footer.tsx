// components/Footer.tsx

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  // Define main navigation links
  const navigation = {
    solutions: [
      { name: 'Lab Equipment', href: '/category/lab' },
      { name: 'Diagnostic Tools', href: '/category/diagnostics' },
      { name: 'Hospital Furniture', href: '/category/furniture' },
      { name: 'Surgical Supplies', href: '/category/surgical' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Quality Commitment', href: '/commitment' },
      { name: 'Certifications', href: '/certifications' },
      { name: 'Support & Warranty', href: '/support' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Shipping Policy', href: '/shipping' },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 xl:gap-4">
          
          {/* Column 1: Logo & Company Intro */}
          <div className="space-y-4 col-span-2 xl:col-span-1">
            <h3 className="text-2xl font-bold text-primary">
              CODEX<span className="text-white">MUNDIAL LTD.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Nigeria&apos;s trusted partner for certified medical equipment and professional support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">
              Equipment Categories
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-gray-400 hover:text-white transition duration-150">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold tex tracking-wider uppercase">
              Our Company
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-base text-gray-400 hover:text-white transition duration-150">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Information (Crucial for Sales) */}
          <div className="col-span-2 xl:col-span-1 space-y-4">
            <h3 className="text-sm font-semibold tex tracking-wider uppercase">
              Contact & Hours
            </h3>
            <div className="space-y-3">
                <p className="flex items-center text-gray-400">
                    <Phone className="h-5 w-5 mr-3 tex shrink-0" />
                    <span className="font-bold text-lg hover:text-white transition duration-150">
                        +234 800 123 4567
                    </span>
                </p>
                <p className="flex items-center text-gray-400">
                    <Mail className="h-5 w-5 mr-3 tex shrink-0" />
                    sales@codexmundial.com.ng
                </p>
                <p className="flex items-center text-gray-400">
                    <Clock className="h-5 w-5 mr-3 tex shrink-0" />
                    Mon - Sat: 9:00 AM - 5:00 PM
                </p>
            </div>
          </div>

          {/* Column 5: Location/Legal */}
          {/* <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-red-500 tracking-wider uppercase">
                Location & Legal
            </h3>
            <ul role="list" className="mt-4 space-y-3">
                <li className="flex items-start text-gray-400">
                    <MapPin className="h-5 w-5 mr-3 text-red-500 shrink-0 mt-1" />
                    <p className='text-base'>
                        Suite 101, Medical Plaza,<br />
                        Victoria Island, Lagos, Nigeria
                    </p>
                </li>
                {navigation.legal.map((item) => (
                    <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-400 hover:text-white transition duration-150">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
          </div> */}
          
        </div>

        <div className="mt-8 pt-1 flex justify-center space-x-4">
            {navigation.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                <a
                    href={item.href}
                    className="text-base text-gray-400 hover:text-white transition duration-150"
                >
                    {item.name}
                </a>
                {/* Add separator unless it’s the last item */}
                {index !== navigation.legal.length - 1 && (
                    <span className="text-gray-600">|</span>
                )}
                </React.Fragment>
            ))}
        </div>


        {/* Separator and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} Codex Mundial Ltd. All Rights Reserved. Serving the Nigerian Healthcare Sector.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;