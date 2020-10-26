import React from 'react'
import { useStateValue } from '../ReactContextAPI/StateProvider'

function CheckoutProduct({ id, title, price, rating, image }) {
    const [{basket},dispatch]=useStateValue();

    console.log(id);
const removeFromBasket=()=>{
 dispatch({
     type:"REMOVE_FROM_BASKET",
     id:id
 })
}

    return (
        <div className="checkout__product row mb-3">
            <div className="col-12 col-md-4">
            <img src={image} className="checkoutProduct__image"/>

            </div>
            <div className="col-12 col-md-7">
            <div className="checkoutProduct__info">
                <p className="checckoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating mb-3">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <span className="fa fa-star"></span>

                        ))
                }
            </div>
            <button className="checkoutProduct__button mb-3s" onClick={removeFromBasket}>Remove from basket</button>
            </div>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
