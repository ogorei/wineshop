import React, { useState, useContext } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const [index, setIndex] = useState(0)
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext()

  const handleBuyNow = () => {
    onAdd(product, qty)
    setShowCart(true)
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          {/* carousel */}
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index ?
                  'small-image selected-image' :
                  'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold'>{name}</h1>
          <h4 className='my-2'>詳細</h4>
          <p>{details}</p>
          <p className="font-bold">{price.toLocaleString()} 円</p>
          <div>
            <div className="flex items-center">数量：
              <span className="mx-2 bg-red-500 text-white bold" onClick={decQty}><AiOutlineMinus/></span>
              <span className="">{qty}</span>
              <span className="mx-2 bg-green-500 text-white bold" onClick={incQty}><AiOutlinePlus/></span>
            </div>
          </div>
          <div className="flex">
            <button type="button" className="border m-2 p-2" onClick={() => onAdd(product, qty)}>カートに追加</button>
            <button type="button" className="bg-red-900 text-white border m-2 p-2" onClick={handleBuyNow}>購入する</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>関連商品</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  return {
    props: { product, products }
  }
}

export default ProductDetails