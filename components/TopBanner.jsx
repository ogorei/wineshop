import React from 'react'
import Link from 'next/link'
import Menu from './Menu';

const TopBanner = () => {
  return (
    <div className="top-banner-container">
    <img className='hidden md:flex' src='https://i.gyazo.com/1129710955975adba16f219332e12754.png'/>
    <img className='md:hidden' src='https://i.gyazo.com/febee7084a8ad7a80d31ca98279498e3.png'/>
  </div>
  )
}

export default TopBanner;