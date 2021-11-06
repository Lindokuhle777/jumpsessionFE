import React from 'react'
import Logo from './Logo'
import Button from './Button'

const Login = () => {
    return (
        <form>
            <Logo/>
            <h3>Welcom</h3>
            <div>
                <input type='email' 
                placeholder='Email' 
                />
            </div>

            <div>
                <input type='password' 
                placeholder='Password' 
                />
            </div>
            <div>
                <Button/>
            </div>
            

        </form>
    )
}

export default Login
