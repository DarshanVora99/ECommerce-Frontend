import React from 'react'
import all_product from '../Components/Assets/all_product'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
  const {productId} = useParams();
    console.log(productId);
    const product = all_product.find((e)=> e.id === Number(productId));
    console.log(product);

  return (
    <div>
      <h1 className="text-center">Product Page</h1>
      
    </div>
  )
}

export default Product