import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id,productName, price, productImage} = props.data
    const { cartItems,addToCart, removeFromCart} = useContext(ShopContext)
    function remove(){
        removeFromCart(id)
    }
    function add(){
        addToCart(id)
    }

  return (
    <div className='cartItem'>
         <img src={productImage}/>
         <div className='description'>
            <p><b>
                {productName}
                </b></p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={remove} >-</button>
                    <input value={cartItems[id]}/>
                    <button onClick={() => addToCart(id)}>+</button>

                </div>

         </div>
    </div>
  )
}
