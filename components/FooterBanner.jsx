import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, buttonText, image, desc, product} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{largeText1}</h3>
        </div>
        <div className="right">
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner