import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { GrGoogle } from 'react-icons/gr';
import { TbBrandGithubFilled } from 'react-icons/tb';

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Login with</h2>
      <div className='space-y-3'>
        <button className='btn w-full btn-outline btn-secondary'> <GrGoogle size={20} />Login With Google</button>
        <button className='btn w-full btn-outline btn-primary'> <TbBrandGithubFilled size={20} />Login With GitHub</button>
      </div>
    </div>
  );
};

export default SocialLogin;