import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  return (
    <div>
      <img className='w-full h-[350px] object-cover rounded-sm' src={news.image_url} alt="" />
      <h2 className='text-2xl font-bold text-primary py-5'>{news.title}</h2>
      <p className='text-accent pb-5 text-justify'>{news.details}</p>
      <Link className='btn btn-secondary' to={`/category/${news.category_id}`}> <FaBackward />Go Back</Link>
    </div>
  );
};

export default NewsDetailsCard;