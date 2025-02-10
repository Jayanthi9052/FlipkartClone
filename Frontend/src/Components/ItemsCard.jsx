import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../App'; // ✅ Import context
import Card from './Card';
import Navbar from './Navbar';

const ItemsCard = () => {
  const { category } = useParams(); // ✅ Get category from URL
  const { categoryData } = useContext(CategoryContext); // ✅ Use context

  const categoryProducts = categoryData[category] || []; // ✅ Get products for category

  return (
    <div>
      <Navbar/>
      <h1 className="text-2xl font-bold text-center">{category} Products</h1>
      <div className="flex flex-wrap gap-[0.7rem] justify-center">
        {categoryProducts.map((item, index) => (
          <Card key={index} items={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsCard;
