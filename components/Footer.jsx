import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <p>© ソフィア°お酒のお取り寄せ専門店</p>
      <p className="flex flex-row">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer