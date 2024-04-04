import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContex = createContext(null);

const getDefaultCart = ()=>{
    // Key repersents ProductId , Value represents the no of that product added in cart
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
    }
    return cart;
}

const ShopContexProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemID)=>{
        console.log("Item id in addtocart is ", itemID);
        
        
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID] + 1 }));
        console.log("Added to cart ");
        console.log(cartItems);
    }
    
    const removeFromCart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID-1]}));
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price*(cartItems[item]);

            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems= ()=>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems+=cartItems[item];

            }
            
        }
        return totalItems;
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

    console.log(cartItems);
    return (
        <ShopContex.Provider value={contextValue}>
            {props.children}
        </ShopContex.Provider>
    )
}

export default ShopContexProvider