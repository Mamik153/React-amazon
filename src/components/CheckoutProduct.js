import React from 'react'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = ({ id, title, rating, image, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    //console.log(id, title, rating, image, price);
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                
                <p className='checkoutProduct__price'>
                    <strong>
                        {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR'}).format(price)}
                    </strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><StarOutlinedIcon style={{ color: 'yellow' }} /></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
