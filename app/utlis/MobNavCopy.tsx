import React from 'react'
import Image from "next/image";
import MobileDropdownMenu from '../landingpagecomponents/mobile/MobNavDropdown';

const MobNavCopy = () => {
  return (
      <nav className="flex justify-between items-center bg-base-100 px-5 py-4 shadow-md">
        {/* Left: Logo + App name */}
        <div className="flex items-center gap-2 text-2xl font-extrabold text-primary">
          <div className="relative w-8 h-8">
            <Image src="/logo.png" alt="Codex Mundial Ltd Logo" fill className="object-contain" />
          </div>
          <span>Codex Mundial Ltd</span>
        </div>
  
        {/* Right: Mobile dropdown */}
        <MobileDropdownMenu />
      </nav>
    );
}

export default MobNavCopy