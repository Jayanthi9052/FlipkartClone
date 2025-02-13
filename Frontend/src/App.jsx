import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ItemsCard from "./Components/ItemsCard";
import CardInfo from "./Components/CardInfo";
import Cart from "./Components/Cart";

export const CategoryContext = createContext(); 

const App = () => {
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("https://flipkartclone-2-kz1p.onrender.com/products_data");
        const productData = response?.data?.fetchProduts;
        //console.log(productData)

        const Categories = productData.reduce((hashmap, item) => {
          if (!hashmap[item.category]) {
            hashmap[item.category] = [];
          }
          hashmap[item.category].push(item);
          return hashmap;
        }, {});

        setCategoryData(Categories); 
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };

    fetchProductData();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ItemCards/:category" element={<ItemsCard />} /> 
          <Route path="/CardInfo" element={<CardInfo/>}/>
          <Route path="/Cart" element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
};

export default App;
