import React from 'react'
import { headers } from "next/headers";
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';
import ContactPage from '@/app/landingpagecomponents/Contact';
import MobContactPage from '@/app/landingpagecomponents/mobile/MobContact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Codex Mundial",
  description: "Get in touch with Codex Mundial via email, phone, or WhatsApp. We provide quick support for your medical equipment needs.",
  keywords: [
    "contact Codex Mundial",
    "medical equipment support",
    "healthcare supplies contact",
    "phone and email medical supplier"
  ],
  authors: [{ name: "Codex Mundial", url: "https://codexmundial.com" }],
  openGraph: {
    title: "Contact Us - Codex Mundial",
    description: "Reach out to Codex Mundial for assistance with medical equipment and healthcare supplies via email, phone, or WhatsApp.",
    url: "https://codexmundial.com/contact",
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
            {mobileCheck ? <MobContactPage /> : <ContactPage />}
        </>
    )
}

export default page