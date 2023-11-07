import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className='overlay'>
        <h3>{heroBanner.midText}</h3>
        <br/>
        <h1>{heroBanner.largeText1}</h1>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className='banner-button' type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner