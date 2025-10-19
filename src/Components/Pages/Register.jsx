import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, password, email);
    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      })

  }
  return (
    <div className='flex justify-center mt-2 items-center w-11/12 mx-auto'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type='submit' className="btn btn-neutral mt-4">Register</button>
            <p className='text-center pt-3 font-medium'>Already have an account? <Link className='text-secondary' to='/auth/login'> Login</Link> </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;