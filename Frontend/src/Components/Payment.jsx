import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchCart = async () => {
      try {
        // Fetch cart data from API
        const response = await axios.get("https://flipkartclone-2-kz1p.onrender.com/fetchCartData");

        // Extract cart data from response
        const cartItems = response?.data?.cartData || [];  

        // console.log(cartItems); // Debugging

        setCart(cartItems); // Set the cart state
        calculateTotal(cartItems); // Pass correct data to calculate total
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const handlePayment = () => {
    // Simulating a fake payment API response
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // 70% chance of success
      setPaymentStatus(isSuccess ? "Payment Successful!" : "Payment Failed. Try Again.");
    }, 1500);
  };

  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
      {cart.length === 0 ? (
        <>
        <p>Your cart is empty.</p>
        <button className='bg-slate-400 text-lg pl-3 pr-3' onClick={()=>navigate('/')}>Start Shopping</button>
        </>
        
        

      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b">
              <span>{item.title} (x{item.quantity})</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              {/* toFixed(2) currency in 2 decimal places  */}
            </div>
          ))}
          <div className="flex justify-between mt-4 font-bold">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePayment}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Pay Now
          </button>
        </div>
      )}
      {paymentStatus && <p className="mt-4 text-center font-semibold">{paymentStatus}</p>}
    </div>
    </>
  );
};

export default Payment;
