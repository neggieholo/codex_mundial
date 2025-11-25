'use client'

import React from 'react'
import Hero from './Hero';
import FeaturedProducts from './ProductSection';
import TrustAuthority from './TrustUsSection';
import DirectContactCTA from './DirectContactCTA';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <TrustAuthority />
      <DirectContactCTA />
    </>
  )
}

export default LandingPage