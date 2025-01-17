import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
export const Product = (props) => {
    const {id,productName, price, productImage} = props.data
    const {addToCart,cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <img src={productImage} />
        <div className='description'>
            
            <p>
                <b>{productName}
                <p>${price}</p></b>
                {/* <button>+</button>
                <button>-</button>
                <input type="number" /> */}
            </p>

        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
