import React from 'react'
import './Product.css'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useStateValue } from '../StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>Rs</small>
                    <strong> {price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><StarOutlinedIcon style={{color: 'yellow'}} /></p>
                        ))
                    }
                </div>
            </div>
            
            <img 
                src={image}
                alt=''
            />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
