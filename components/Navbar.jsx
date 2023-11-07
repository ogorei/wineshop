import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'
// import {koalaImg} from '../assets/koala.png'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <Image src="/logo.jpg" width="50" height="50" alt="logo" />
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart &&
        <Cart />
      }
    </div>
  )
}

export default Navbar