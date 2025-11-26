// app/layout.tsx
import "./globals.css";
import { headers } from "next/headers";
import { isMobile } from "./landingpagecomponents/mobile/ismobile"
import CookieBanner from "./landingpagecomponents/CookieBanner";
import CookieBannerMobile from "./landingpagecomponents/mobile/MobCookieBanner";
import { Geist, Geist_Mono } from "next/font/google";
import ToastProvider from "./utlis/ToastProvider";
import type { Metadata } from "next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// app/layout.tsx
export const metadata: Metadata = {
  title: "Codex Mundial",
  description: "Codex Mundial provides high-quality medical equipment and healthcare supplies for hospitals, clinics, and laboratories.",
  keywords: [
    "medical equipment",
    "healthcare supplies",
    "hospital equipment",
    "medical devices",
    "laboratory instruments",
    "Codex Mundial"
  ],
  authors: [{ name: "Codex Mundial", url: "https://codexmundial.com" }],
  openGraph: {
    title: "Codex Mundial",
    description: "Premium provider of medical equipment and healthcare supplies for hospitals, clinics, and labs.",
    url: "https://codexmundial.com",
    siteName: "Codex Mundial",
    locale: "en_US",
    type: "website",
  },
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-200 text-base-content`}
            >
                {children}
                {mobileCheck ? <CookieBannerMobile /> : <CookieBanner />}
                <ToastProvider />
            </body>
        </html>
    );
}
