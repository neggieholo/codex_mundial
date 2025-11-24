import React from "react";
import { headers } from "next/headers";
import { isMobile } from "../landingpagecomponents/mobile/ismobile";
import MobileLandingPage from "../landingpagecomponents/mobile/MoblandingPage";
import LandingPage from "../landingpagecomponents/landingpage";

export default async function Page() {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);

    return mobileCheck ? <MobileLandingPage /> : <LandingPage />;
}
