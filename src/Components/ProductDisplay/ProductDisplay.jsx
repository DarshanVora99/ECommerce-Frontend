import React, { useContext } from 'react'
import './ProductDisplay.css'
import all_product from '../Assets/all_product';
import { useParams } from 'react-router-dom';
import { ShopContex } from '../../Contex/ShopContex';

const ProductDisplay = (props) => {
    
    const {productId} = useParams();
    
    const product = all_product.find((e)=> e.id === Number(productId));
    

    const {addToCart} = useContext(ShopContex);

  return (
    <div className='productdisplay'>
       
       
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">

            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            </div>

            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
            
        </div>


        {/* Displaying Product details  */}
        <div className="productdisplay-right">
            <h1>{product.name}</h1>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    $ {product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                $ {product.new_price}
                </div>
            </div>

            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis cum asperiores.
            </div>
            <div className="prodcutdisplay-right-size">
                <h1>Select Size</h1>
                <div className="prodcutdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} >Add To Cart</button>

            <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
        </div>
    </div>
  )
}

export default ProductDisplay