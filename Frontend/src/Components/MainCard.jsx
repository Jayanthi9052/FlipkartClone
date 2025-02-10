import React from 'react';

const MainCard = ({ items }) => {
  return (
    <div className="flex flex-col gap-3 w-[13rem] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-40 object-cover " src={items?.image} alt={items?.title} />

      <div className="">
        <h5 className="text-lg mb-2 font-bold text-gray-900 dark:text-white text-center">
          {items?.category}
        </h5>
      </div>
    </div>
  );
};

export default MainCard;
