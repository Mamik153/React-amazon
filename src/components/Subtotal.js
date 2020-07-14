import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'


const Subtotal = () => {
    const [{ basket }] = useStateValue();
    return (

        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items) : <strong>{ 
                                                        new Intl.NumberFormat('en-IN', {
                                                        style: 'currency',
                                                        currency: 'INR'}).format(getBasketTotal(basket)) 
                                                    }</strong>
            </p>
            <small className='subtotal__gift'>
                <input type='checkbox' />This order contains a gift
            </small>
        
           
            <button className='subtotal__button'>Proceed to Buy</button>            
        </div>
    )
}

export default Subtotal
