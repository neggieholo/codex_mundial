import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 bg-base-100 shadow-md flex flex-col justify-between items-center z-50">
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
                <Link href="/" className="hover:bg-white hover:text-primary font-medium p-1">Home</Link>
                <Link href="/products" className="hover:bg-white hover:text-primary font-medium p-1">Products</Link>
                <Link href="/aboutUs" className="hover:bg-white hover:text-primary font-medium p-1">About Us</Link>
                {/* <div className="dropdown dropdown-hover p-1 hover:bg-white hover:text-primary">
                    <label tabIndex={0} className="font-medium cursor-pointer">
                        About Us
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 text-primary rounded-box w-56"
                    >
                        <li>
                        <Link href="/about/company">Company</Link>
                        </li>
                        <li>
                        <Link href="/about/team">Team</Link>
                        </li>
                        <li>
                        <Link href="/about/mission">Mission</Link>
                        </li>
                        <li>
                        <Link href="/about/careers">Careers</Link>
                        </li>
                    </ul>
                </div> */}
                <a href="/contactUs" className="hover:bg-white hover:text-primary font-medium p-1">Contact</a>
            </div>
        </nav>
    );
}
