import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ItemsCard from "./Components/ItemsCard";
import CardInfo from "./Components/CardInfo";
import Cart from "./Components/Cart";
import SearchPage from "./Components/SearchPage";

export const CategoryContext = createContext();
export const CartContext = createContext(); // ✅ Create Cart Context

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
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("https://flipkartclone-2-kz1p.onrender.com/fetchCartData");
        const fetchedCart = response?.data?.cartData || [];
        setCart(fetchedCart);
        setCartCount(fetchedCart.reduce((total, item) => total + item.quantity, 0));
      } catch (error) {
        console.log(`Error fetching cart: ${error}`);
      }
    };

    fetchCartData();
  }, []);

  // Function to update cart
  const updateCart = (newCart) => {
    setCart(newCart);
    setCartCount(newCart.reduce((total, item) => total + item.quantity, 0));
  };
  console.log(cart)

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      <CartContext.Provider value={{ cart, cartCount, updateCart }}> {/* ✅ Provide Cart Context */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ItemCards/:category" element={<ItemsCard />} />
            <Route path="/CardInfo" element={<CardInfo />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </CategoryContext.Provider>
  );
};

export default App;
