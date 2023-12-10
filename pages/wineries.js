import React, { useState }  from 'react'
import { client } from '../lib/client'
import Collage from './page-components/Collage'

const Wineries = ({ wineries }) => {
  return (
   <>
   <p>comming soon</p>
   </>
  )
}
{/* <>
<div className="products-heading">
  <h2>Wineries</h2>
  <p></p>
</div>

<div className="products-container">
  {products?.map((product) => (
    <Product key={product._id} product={product} />
  ))}
</div>
</> */}

export const getServerSideProps = async () => {
  const query = '*[_type == "wineries"]'
  const wineries = await client.fetch(query)

  return {
    props: { wineries}
  }
}

export default Wineries;