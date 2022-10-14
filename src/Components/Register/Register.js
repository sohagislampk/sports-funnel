import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form action="" className='flex flex-col items-center gap-4 mt-5 '>
                <h1>Please Fill the form to Register</h1>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                <button type="submit" class="btn btn-primary w-full max-w-xs">Register</button>
            </form>
            <small>Already have an account ? <Link to={'/login'} className="text-info">Login</Link> here.</small>
        </div>
    );
};

export default Register;