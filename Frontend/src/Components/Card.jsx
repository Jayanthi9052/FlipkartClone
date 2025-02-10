import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ items }) => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate('/CardInfo' ,{state:{items}})} className="flex flex-col gap-3 w-[13rem] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-40 object-cover " src={items?.image} alt={items?.title} />

      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 dark:text-white text-center">
          {items?.title}
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
          {items?.price}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
          {items?.description?.slice(0, 60)}...
        </p>
      </div>
    </div>
  );
};

export default Card;
