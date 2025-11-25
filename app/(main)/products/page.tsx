import React from 'react'
import { headers } from "next/headers";
import ProductsPage from '@/app/landingpagecomponents/ProductsPage';
import MobProductsPage from '@/app/landingpagecomponents/mobile/MobProductspage';
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';

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