import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const { user } =use(AuthContext);
  return (
    <div className='flex justify-between items-center'>
      <div className='w-1/3'>{user && user.email}</div>
      <div className='flex gap-x-5 text-accent w-2/5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-x-5'>
        <img src={userIcon} alt="" />
        <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;