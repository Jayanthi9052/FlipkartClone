import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cartdata, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const {updateCart}=useContext(CartContext)
  const user=localStorage.getItem("user")

  // Fetch Cart Data
  useEffect(() => {
    const getCartData = async () => {
      if(!user){
        toast.warn("Login to add items to cart",{
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        navigate("/Login");
        return;
      }

      try {
        const res = await axios.get("https://flipkartclone-2-kz1p.onrender.com/fetchCartData");
        const fetchedCartData = res?.data?.cartData || [];  
        // console.log(fetchedCartData);
        setCartData(fetchedCartData); 
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    };
    getCartData();
  }, []);

  // Calculate Total Price when cartdata changes
  useEffect(() => {
    const newTotal = cartdata.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartdata]); 

  // Check User Authentication before proceeding to payment
  const checkUser = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate('/Login');
    } else {
      navigate('/payment');
    }
  };
  
//delete all Cart Items
const deleteAllCartItems=async()=>{
  const res=await axios.delete("https://flipkartclone-2-kz1p.onrender.com/deleteAllCart");
  updateCart()
  toast.success("cart items deleted successfully",{
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
  // alert("cart items deleted successfully")
  setCartData([]);
}

//deleting particular item from cart
const deleteItem=async(id)=>{
  try {
    const res = await axios.delete("https://flipkartclone-2-kz1p.onrender.com/deleteItem", {
      data: { id },
    });

    if (res.status === 200) { 
      toast.success("Item deleted successfully",{
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      // alert("Item deleted successfully");
      updateCart()
      setCartData(prevCartData => prevCartData.filter(item => item._id !== id));
    }
  } catch (err) {
    console.error("Error deleting item:", err);
  }
}

  return (
    <div className='text-center'>
      <Navbar />
      <button onClick={deleteAllCartItems}>Delete All</button>
      
      {cartdata.length > 0 ? (
        cartdata.map((item, index) => (
          <div key={index} className="p-4 border-b flex flex-row relative">
            
            <div className='felx flex-row justify-between '>
            <button onClick={()=>deleteItem(item._id)} className='absolute right-5'>
            <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
            </button>
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            </div>
            <div className='ml-10'>
              <h4>{item.title}</h4>
              <h3>Price: ₹{item.price}</h3>
              <h5>Quantity: {item.quantity}</h5>
            </div>
          </div>
        ))
      ) : (
        <>
        <p>No items in cart</p>
        <button className='bg-slate-400 text-lg pl-3 pr-3' onClick={()=>navigate('/')}>Start Shopping</button>
        </>
        
      )}
      <h2>Total Price: ₹{total.toFixed(2)}</h2> {/* Display total price */}
      <button onClick={checkUser} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Proceed to Payment
      </button>
    </div>
  );
};

export default Cart;
