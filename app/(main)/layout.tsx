import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "../landingpagecomponents/CookieBanner";
import CookieBannerMobile from "../landingpagecomponents/mobile/MobCookieBanner";
import Navbar from "../landingpagecomponents/Navbar";
import MobileNavbar from "../landingpagecomponents/mobile/MobNavbar";
import { headers } from "next/headers";
import { isMobile } from "../landingpagecomponents/mobile/ismobile";


export default async function MainLayout({ children }: { children: React.ReactNode }) {
    // ✅ Await headers() because it’s async now
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);

    return (
        <div className="flex flex-col bg-base-200 min-h-screen">
            {mobileCheck ? <MobileNavbar /> : <Navbar />}
            <main>{children}</main>
        </div>
    );
}
