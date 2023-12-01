import React, { useState }  from 'react'
import { client } from '../lib/client'

const Blog = ({ products }) => {
  const [isFolded, setIsFolded] = useState(true)
  const toggleFold = () => {
    setIsFolded(!isFolded);
  };

  return (
  
    <div>blog</div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default Blog;