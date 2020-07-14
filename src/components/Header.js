import React from 'react'
import img from '../images/amazon_PNG11.png'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase'

const Header = () => {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to='/'>
                <img
                    className='header__logo'
                    src={img}
                    alt='logo'
                /> 
            </Link>

            <div className='header__search'>
                <input 
                    type='text'
                    className='header__searchInput'
                />
            <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__optionLineOne'>Hello{user && `, ${user.email}`}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {user && 
                    <Link to='/checkout' className='header__link'>
                        <div className='header__optionBasket'>
                            <ShoppingCartOutlinedIcon />
                            <span className='header__optionLineOne header__basketCount'>{ basket?.length }</span>
                        </div>
                    </Link>
                }
            </div>
                       
        </nav>
    )
}

export default Header
