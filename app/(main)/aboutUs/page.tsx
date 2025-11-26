import React from 'react'
import { headers } from "next/headers";
import AboutUsPage from '@/app/landingpagecomponents/AboutUs';
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';
import MobAboutUsPage from '@/app/landingpagecomponents/mobile/MobAboutUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Codex Mundial",
  description: "Learn more about Codex Mundial, a trusted provider of medical equipment and supplies for hospitals, clinics, and laboratories.",
  keywords: [
    "about Codex Mundial",
    "medical equipment company",
    "healthcare supplies provider",
    "hospital equipment",
    "medical devices"
  ],
  authors: [{ name: "Codex Mundial", url: "https://codexmundial.com" }],
  openGraph: {
    title: "About Us - Codex Mundial",
    description: "Discover our mission and values at Codex Mundial, your trusted source for medical equipment and healthcare supplies.",
    url: "https://codexmundial.com/about",
    siteName: "Codex Mundial",
    locale: "en_US",
    type: "website",
  },
};


const page = async () => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);
    return (
        <>
            {mobileCheck ? <MobAboutUsPage /> : <AboutUsPage />}
        </>
    )
}

export default page