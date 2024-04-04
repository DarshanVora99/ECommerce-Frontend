// In this page we will render shop category like men women kids 
import React from 'react';
import './CSS/ShopCategory.css';

import all_product from '../Components/Assets/all_product';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  // category
  return (
    <div className='shop-category'>
      <img className = 'shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-products">



        {all_product.map((item, i) => {
          if (item.category === props.category) {


            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
          }
          else {
            return null;
          }

        })}

      </div>
    </div>
  )
}

export default ShopCategory