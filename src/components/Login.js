import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../Firebase'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch(err => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className='login'>
           <Link to='/'>
               <img 
               className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
                alt='logo'
               />
           </Link>
           <div className='login__container'>
               <h1>Sign In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input 
                        value={email}
                        type='email' 
                        placeholder='Enter your email' 
                        required
                        onChange={e => setEmail(e.target.value)}
                    />

                   <h5>Password</h5>
                   <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        type='password' 
                        placeholder='Enter your email' 
                        required 
                    />

                   <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
               </form>
               <p>
                   By signing-in you agree to Amazon's Conditions of Use & Sale. 
                   Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
               </p>
               <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login
