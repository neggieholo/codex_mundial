import React from 'react'
import { headers } from "next/headers";
import Login from '@/app/landingpagecomponents/mobile/MobLogin';
import LoginPage from '@/app/landingpagecomponents/Login'
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';

const page = async () => {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);
    return (
        <>
            {mobileCheck ? <Login /> : <LoginPage />}
        </>
    )
}

export default page