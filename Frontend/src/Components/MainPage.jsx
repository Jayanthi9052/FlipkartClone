import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import './styles.css'
import Carousel from './Carousel';
import CategoryCard from './FetchCategoryCard';


const MainPage = () => {
  const [Items,setItems]=useState(null);
  // useEffect(()=>{
  //   const fetchItems=async()=>{
  //     try{
  //     const response=await axios.get("http://localhost:4000/Items");
  //     console.log(response)
  //     setItems(response.data.mergedItems)
  //     }catch(error){
  //       console.error("Error fetching Items:", error);
  //     }
  //   };
  //   fetchItems();
  // },[]);
  return (
    <div className='mainPage'>
      <Navbar />
      <Carousel/>
      <CategoryCard/>

      
      
      
      {/* <div className="container mx-auto p-4">

        <h1 className="text-2xl font-bold text-center mb-6">Categories</h1>

        {Items ? (
          <div className="category">
          Clothing Box
          <div className="category-box" >
            <h2>Clothing</h2>
            <img src="https://i.pinimg.com/originals/04/0d/96/040d969fbd91b30e964b26bd47182a1d.jpg" alt="Clothing" />
          </div>
        
          Accessories Box
          <div className="category-box">
            <h2>Accessories</h2>
            <img src={Items.Accessories.image} alt="Accessories" />
          </div>
        
          Electronic Box
          <div className="category-box">
            <h2>Electronic</h2>
            <img src={Items.Electronic.image} alt="Electronic" />
          </div>
        
          Food Box
          <div className="category-box">
            <h2>Food</h2>
            <img src={Items.Food.image} alt="Food" />
          </div>
        </div>
        
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div> */}
      
    </div>
  )
}

export default MainPage