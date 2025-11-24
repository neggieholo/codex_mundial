import React from "react";
import Image from "next/image";
import MobileDropdownMenu from "./MobNavDropdown";

const MobileNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center bg-primary px-5 py-4 shadow-md z-50">
      {/* Left: Logo + App name */}
      <div className="flex items-center gap-2 text-2xl font-extrabold text-primary">
        <div className="relative w-8 h-8">
          <Image src="/logo.png" alt="Codex Mundial Ltd Logo" fill className="object-contain" />
        </div>
        <span className="text-white">Codex Mundial Ltd</span>
      </div>

      {/* Right: Mobile dropdown */}
      <MobileDropdownMenu />
    </nav>
  );
};

export default MobileNavbar;
