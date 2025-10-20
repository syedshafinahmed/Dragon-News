import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out Successfully!");
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className='flex justify-between items-center'>
      <div className='w-1/3'></div>
      <div className='flex gap-x-5 text-accent w-2/5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-x-5'>
        <img className='w-11 rounded-full'
          src={`${user ? user.photoURL : userIcon}`} alt="" />
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button> : <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
        }
      </div>
    </div >
  );
};

export default Navbar;