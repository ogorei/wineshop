import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <div>
          <p className='sofia'>SOFIA°</p>
          <p>世界のお酒の専門店</p>
          </div>
        </Link>
      </div>

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