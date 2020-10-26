import React from 'react'
import { useStateValue } from '../ReactContextAPI/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
        <div className="checkout row">

            <div className="checkout__left col-12 col-md-9 mb-2">



                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>



            </div>
            {
                basket.length>0&&(
                    <div className="checkout__right col-12 col-md-3 mb-3">
                        <Subtotal/>
                    </div>
                )
            }
            </div>
            <div className="row">
                <div className="col-12">
                {
                    basket?.length == 0 ? (
                        <div>
                            <h2 className="checkout__title">Your shopping basket is empty</h2>
                            <p>You have no items in your basket .To buy one or more items, click "Add to basket" next to the item</p>

                        </div>
                    ) : (
                            <div>
                                <h2 className="checkout__title">Your Shopping Basket</h2>
                            </div>
                        )
                }
            </div>
            <div className="col-12">
                {
                    basket?.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}></CheckoutProduct>
                    ))
                }
             </div>   
            </div>
           </>

        

    )
}

export default Checkout
