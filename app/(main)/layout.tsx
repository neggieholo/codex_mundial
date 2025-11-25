import "../globals.css";
import Navbar from "../landingpagecomponents/Navbar";
import MobileNavbar from "../landingpagecomponents/mobile/MobNavbar";
import { headers } from "next/headers";
import { isMobile } from "../landingpagecomponents/mobile/ismobile";
import Footer from "../landingpagecomponents/Footer";
import NavBarCopy from "../utlis/NavBarCopy";
import MobNavCopy from "../utlis/MobNavCopy";


export default async function MainLayout({ children }: { children: React.ReactNode }) {
    // ✅ Await headers() because it’s async now
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);

    return (
        <div className="flex flex-col bg-base-200 min-h-screen">
            {mobileCheck ? <MobileNavbar /> : <Navbar />}
            <main>
                {mobileCheck ? <MobNavCopy /> : <NavBarCopy />}
                {children}
            </main>
            <Footer />
        </div>
    );
}
