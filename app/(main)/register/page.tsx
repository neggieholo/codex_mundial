import React from 'react'
import { headers } from "next/headers";
import Register from '@/app/landingpagecomponents/Register';
import MobRegister from '@/app/landingpagecomponents/mobile/MobRegister';
import { isMobile } from '@/app/landingpagecomponents/mobile/ismobile';

const page = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <div>
      {mobileCheck ? <MobRegister /> : <Register />}
    </div>
  )
}

export default page