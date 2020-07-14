import React from 'react'
import { useStateValue } from '../StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
    const [{ basket }] = useStateValue();
    //console.log(basket);
    return (
        <div className='checkout'>
            <h2 className='checkout__title'>Shopping Cart</h2>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping cart is empty</h2>
                </div>
            ): (
                <div>
                    {basket?.map((item) => {
                        return <CheckoutProduct key={item.id} {...item} />
                    })}
                </div>
            )}

        </div>
    )
}

export default Checkout
