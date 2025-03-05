import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../App'; 
import MainCard from './MainCard';

const CategoryCard = () => {
  const navigate = useNavigate();
  const { categoryData } = useContext(CategoryContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; 
      } else {
        scrollContainer.scrollLeft += 1; 
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="bg-gray-180 p-4 rounded-md">
      <h1 className="text-2xl font-bold text-center mt-5 mb-5">Categories</h1>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-[0.7rem] overflow-x-scroll scrollbar-hide whitespace-nowrap px-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...Object.entries(categoryData), ...Object.entries(categoryData)].map(
            ([category, items], index) => (
              <div
                key={category + index} // Ensure unique keys when duplicating
                onClick={() => navigate(`/ItemCards/${category}`)} 
                className="cursor-pointer transform transition duration-300 hover:scale-105 min-w-[200px]"
              >
                <MainCard title={category} items={items[0]} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
