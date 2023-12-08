import React, { useRef, } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('リダイレクト中...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">買い物かご</span>
          <span className="cart-num-items">({totalQuantities})</span>
        </button>

        {cartItems.length < 1 && (
          <div className="flex flex-col items-center">
            <AiOutlineShopping size={150} />
            <h3>買い物かごには商品が入っていません。</h3>
            <Link href="/">
              <button type="button" onClick={() => setShowCart(false)} className="btn">ご購入手続き</button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h4>{item.name}</h4>
                </div>
                  <h4>{item.price.toLocaleString()}円</h4>
                <div className="flex bottom">
                <div>
                  <div className="flex items-center">数量：
                    <span className="mx-2 bg-red-500 text-white bold" onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                    <span className="">{item.quantity}</span>
                    <span className="mx-2 bg-green-500 text-white bold" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                  </div>
                </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>小計: </h3>
              <h3>{totalPrice.toLocaleString()}円</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>Stripeで支払う</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart