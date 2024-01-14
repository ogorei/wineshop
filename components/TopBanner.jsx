import React from 'react'
import Link from 'next/link'
import Menu from './Menu';

const TopBanner = () => {
  return (
    <div className="top-banner-container">
    <img className='hidden md:flex' src='https://i.gyazo.com/bb277dd126b2a55ff79e178243c426e0.jpg'/>
    <img className='md:hidden' src='https://i.gyazo.com/a3f903bba4a0a344c78da3c14d61b00c.jpg'/>
  </div>
  )
}

export default TopBanner;