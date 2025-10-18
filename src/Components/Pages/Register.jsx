import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className='flex justify-center mt-2 items-center w-11/12 mx-auto'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className='text-center pt-3 font-medium'>Already have an account? <Link className='text-secondary' to='/auth/login'> Login</Link> </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;