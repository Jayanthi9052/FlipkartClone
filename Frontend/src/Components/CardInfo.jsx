import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const CardInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const { items } = location.state;
    const [cartQuantity,setCartQuantity]=useState("")


    const addToCart = async () => {
        const cartData = {
            title: items.title,
            image: items.image,
            price: items.price,
            quantity: quantity
        };
        try {
            await axios.post("https://flipkartclone-2-kz1p.onrender.com/addToCart", cartData);
            alert("Successfully added to cart");
        } catch (err) {
            console.error("Error adding to cart:", err.response ? err.response.data : err.message);
            alert("Error adding to cart");
        }
        
    };
    // useEffect(()=>{
    //     const cartFunction=async()=>{
         
    //         const res=await axios.get("http://localhost:4000/fetchCartData")
    //         const data=res?.data?.cartData
    //         //console.log(data)
    //         const totalQuantity = data.reduce((acc, item) => acc + item.quantity, 0);
    //         setCartQuantity(totalQuantity);
    //         console.log(cartQuantity)
    //     }
    //     cartFunction();
    //   },[]);
      

    return (
        <>
        <Navbar/>
        <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mx-auto my-10 border border-gray-200'>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={items.image} alt={items.title} className='w-60 h-60 object-contain rounded-lg' />
            </div>
            
            <div className='w-full md:w-1/2 flex flex-col justify-between p-4'>
                <h1 className='text-xl font-semibold text-gray-800'>{items.title}</h1>
                <p className='text-gray-600 text-sm mt-2'>{items.description}</p>
                <h2 className='text-lg font-bold text-gray-900 mt-3'>₹{items.price}</h2>
                <div className='flex items-center space-x-2 mt-2'>
                    <span className='text-yellow-500 text-lg'>⭐ {items.rating.rate}</span>
                    <span className='text-gray-500 text-sm'>({items.rating.count} reviews)</span>
                </div>

                <div className='flex items-center mt-4 space-x-4'>
                    <button 
                        className='px-3 py-1 bg-gray-200 rounded-md text-lg' 
                        onClick={() => setQuantity(quantity < 20 ? quantity + 1 : quantity)}
                    >
                        +
                    </button>
                    <span className='text-lg font-semibold'>{quantity}</span>
                    <button 
                        className='px-3 py-1 bg-gray-200 rounded-md text-lg' 
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
                    >
                        -
                    </button>
                </div>

                {/* Add to Cart Button */}
                <button 
                    className='mt-5 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300'
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
        </>
    );
};

export default CardInfo;
