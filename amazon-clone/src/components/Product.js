import React from 'react'
import { useStateValue } from '../ReactContextAPI/StateProvider'
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase';

function Product({ id, title, price, rating, image }) {

    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();

    const addToBasket=()=>{
        if(user){
            dispatch({
                type:"ADD_TO_BASKET",
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating
                }
            })
        }else{
            history.push('/login');
        }
        
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="mt-2">{title}</p>
                <p className="product__price">
                    <small>₹ </small>
                    <strong>{price}</strong>

                </p>
                <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <span className="fa fa-star"></span>

                        ))
                }
            </div>
            </div>

            

            <img src={image} alt=""></img>
            <button onClick={addToBasket} className="mb-3">Add to basket</button>

        </div>
    )
}

export default Product
