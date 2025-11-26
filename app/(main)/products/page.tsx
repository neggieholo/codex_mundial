import React from 'react'
import { headers } from "next/headers";
import ProductsPage from '@/app/landingpagecomponents/ProductsPage';
import MobProductsPage from '@/app/landingpagecomponents/mobile/MobProductspage';
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';
import type { Metadata } from 'next';

// page.tsx for Products page
export const metadata : Metadata = {
  title: "Medical Equipment & Supplies - Codex Mundial",
  description: "Explore high-quality medical equipment and supplies at Codex Mundial. Browse trusted devices and instruments for hospitals, clinics, and labs.",
  keywords: [
    "medical equipment",
    "medical supplies",
    "hospital equipment",
    "laboratory instruments",
    "healthcare devices",
    "Codex Mundial"
  ],
  authors: [{ name: "Codex Mundial", url: "https://codexmundial.com" }],
  openGraph: {
    title: "Medical Equipment & Supplies - Codex Mundial",
    description: "Discover premium medical equipment and supplies for hospitals, clinics, and labs. Shop trusted healthcare devices at Codex Mundial.",
    url: "https://codexmundial.com/products",
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
            {mobileCheck ? <MobProductsPage /> : <ProductsPage />}
        </>
    )
}

export default page