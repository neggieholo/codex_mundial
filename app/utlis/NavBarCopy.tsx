import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const NavBarCopy = () => {
  return (
    <nav className="w-full bg-base-100 shadow-md flex flex-col justify-between items-center">
            <div className="flex items-center gap-3 text-3xl font-extrabold text-primary w-full 
            justify-end p-3 bg-linear-to-r from-base-100 to-secondary/50 relative">
                <div className="absolute left-0 top-0 h-full flex items-center p-2 w-[5%]">                    
                    <Image className='object-cover'
                        src="/logo.png" alt="Codex Mundial Logo" fill />
                </div>
                <div className='w-[95%]'>               
                    <Link href="/" className="hover:text-primary">Codex Mundial Limited</Link>
                </div>
            </div>
            <div className="hidden md:flex flex-1 justify-end bg-primary text-white space-x-8 text-lg w-full py-1 px-2 border-b-4 border-secondary">
                <a href="#features" className="hover:text-primary font-medium">Home</a>
                <a href="#how-it-works" className="hover:text-primary font-medium">Products</a>
                <a href="#pricing" className="hover:text-primary font-medium">About Us</a>
                <a href="#contact" className="hover:text-primary font-medium">Contact</a>
            </div>
        </nav>
  )
}

export default NavBarCopy