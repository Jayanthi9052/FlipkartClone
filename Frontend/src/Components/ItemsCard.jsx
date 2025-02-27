import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../App'; // ✅ Import context
import Card from './Card';
import Navbar from './Navbar';

const ItemsCard = () => {
  const { category } = useParams(); // ✅ Get category from URL
  const { categoryData } = useContext(CategoryContext); // ✅ Use context
  const [selectedSubCategory,setSubCategory]=useState('')

  const categoryProducts = categoryData[category] || []; // ✅ Get products for category

  const filteredProducts=selectedSubCategory?categoryProducts.filter((item)=>item.sub_category===selectedSubCategory):categoryProducts


  return (
    <div className='relative'>
      <Navbar/>
      <select className='absolute right-3 pb-2 pt-2 pl-2 pr-2'
      onChange={(e)=>setSubCategory(e.target.value) } value={selectedSubCategory}
      >
        <option value="">Filter</option>
        <option value="mens">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
      <h1 className="text-2xl font-bold text-center mt-4 mb-2">{category} Products</h1>
      <div className="flex flex-wrap gap-[0.7rem] justify-center">
        {filteredProducts.map((item, index) => (
          <Card key={index} items={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsCard;
