import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../App'; 
import Card from './Card';
import MainCard from './MainCard';

const CategoryCard = () => {
  const navigate = useNavigate();
  const { categoryData } = useContext(CategoryContext); 
  // console.log(categoryData)

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5 mb-5">Categories</h1>
      <div className="flex flex-wrap gap-[0.7rem] justify-center text-center">
        {Object.entries(categoryData).map(([category, items]) => (
          <div
            key={category}
            onClick={() => navigate(`/ItemCards/${category}`)} 
            className="cursor-pointer"
          >
            <MainCard title={category} items={items[0]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
