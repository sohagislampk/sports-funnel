import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <form action="" className='flex flex-col items-center gap-4 mt-5 '>
                <h1>Please Enter Your Email and Password to Login</h1>
                <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                <button type="submit" class="btn btn-primary w-full max-w-xs">Login</button>
            </form>
            <small>Don't have an account ? <Link to={'/register'} className="text-info" >Register</Link> here.</small>
        </div>
    );
};

export default Login;