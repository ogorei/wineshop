import React from 'react'
import Link from 'next/link'
import { MdCancel } from 'react-icons/md'

const Canceled = () => {

  return (
    <div className="success-wrapper">
      <div className="success">
        <p style={{color: 'red', fontSize: '40px'}}>
          <MdCancel />
        </p>
        <h2 style={{textAlign: 'center'}}>We were unable to process your order at this time.</h2>
        <p className="email-msg">Please try to input your credit card information again</p>
        <p className="description">
          Or proceed to the home page
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled