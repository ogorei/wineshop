import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '../lib/utils'
import { useStateContext } from '../context/StateContext'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>ご購入ありがとうございます。</h2>
        <p className="email-msg">ご注文内容の確認、キャンセルは下記よりご連絡をお願い致します。</p>
        <p className="description">
        ご不明な点がございましたらご連絡ください
          <a href="mailto:order@koalamarket.com" className="email">
            order@sofia.co
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            ショッピングを続ける
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success