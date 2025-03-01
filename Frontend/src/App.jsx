import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ItemsCard from "./Components/ItemsCard";
import CardInfo from "./Components/CardInfo";
import Cart from "./Components/Cart";
import SearchPage from "./Components/SearchPage";
import Payment from './Components/Payment';

export const CategoryContext = createContext();
export const CartContext = createContext(); 

const App = () => {
  // Category Data
  const [categoryData, setCategoryData] = useState({});
  
  // Cart Data
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Fetch products
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("https://flipkartclone-2-kz1p.onrender.com/products_data");
        const productData = response?.data?.fetchProduts || [];
        
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
  
  // Fetch cart data
  const fetchCartData = async () => {
    try {
      const response = await axios.get("https://flipkartclone-2-kz1p.onrender.com/fetchCartData");
      const fetchedCart = response?.data?.cartData || [];
      setCart(fetchedCart);
      setCartCount(fetchedCart.reduce((total, item) => total + parseInt(item.quantity), 0));
    } catch (error) {
      console.log(`Error fetching cart: ${error}`);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  // Function to update cart
  const updateCart = async () => {
    await fetchCartData(); 
  };

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      <CartContext.Provider value={{ cart, cartCount, updateCart }}> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ItemCards/:category" element={<ItemsCard />} />
            <Route path="/CardInfo" element={<CardInfo />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          {/* ToastContainer for displaying toasts */}
          <ToastContainer position="top-right" autoClose={3000}  />
        </BrowserRouter>
      </CartContext.Provider>
    </CategoryContext.Provider>
  );
};

export default App;
