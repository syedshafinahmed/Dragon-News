import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaSquareFacebook } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Find Us on</h2>
      <div className=''>
        <div className='join join-vertical w-full'>
          <button className='btn bg-base-100 justify-start join-item'><FaSquareFacebook></FaSquareFacebook> Facebook</button>
          <button className='btn bg-base-100 justify-start join-item'><FaInstagram></FaInstagram> Instagram</button>
          <button className='btn bg-base-100 justify-start join-item'><FaTwitter></FaTwitter> Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;