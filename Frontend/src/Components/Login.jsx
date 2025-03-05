import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from '../assets/images/Flipkart_Logo_1.png'
import './styles.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const authenticateUser=async(e)=>{
    e.preventDefault()
    const data={
      email:email,
      password:password
    }
    try{
      const res=await axios.post(`https://flipkartclone-2-kz1p.onrender.com/authUser`,data);
      //console.log(res.data);
      if(res.data.message==="login successfull"){
        localStorage.setItem("user",JSON.stringify(data))
        toast.success("successfully logged in",{
          theme:"colored",
          closeOnClick:true,
          position:"top-right",
          pauseOnHover:true,
          hideProgressBar:true,
          draggable:true,
          autoClose:3000

        });
        //alert("successfully logged in");
        navigate('/');
      }
    }catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Invalid password",{
          theme:"colored",
          closeOnClick:true,
          position:"top-right",
          pauseOnHover:true,
          hideProgressBar:true,
          draggable:true
      });
        // alert("Invalid password");
      } else if (err.response && err.response.status === 404) {
        toast.error("User does not exist",{
          theme:"colored",
          closeOnClick:true,
          position:"top-right",
          pauseOnHover:true,
          // hideProgressBar:true,
          draggable:true,
          autoClose:3000

        })
        // alert("User does not exist");
        navigate('/Signup');
      } else {
        console.error(err);
        toast.error("Error Loging in,Plaese try after some time",{
          autoClose:3000,
          theme:"colored",
          position:"top-right",
          draggable:true,
          pauseOnHover:true,
          autoClose:3000


        })
        
      }
    }

  }


  return (
  <>
  <Navbar/>
  <section className="bg-[#dcdfe0] py-20 dark:bg-dark lg:py-[120px]">
  <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-8  text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <a
                  href="/#"
                  className="mx-auto inline-block max-w-[160px]"
                >
                  <img
                    src={logo}
                    alt="logo"
                  />
                </a>
              </div>
              <form>
                <InputBox type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    
                   />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="mb-10">
                  <button onClick={authenticateUser} className="w-full cursor-pointer rounded-md bg-gray-500 border-primary px-5 py-3 text-base font-medium transition hover:opacity-90">Submit</button>
                </div>
              </form>
              
              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
              >
                Forget Password?
              </a>
              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <span
                  onClick={()=>navigate('/Signup')}
                  className="text-primary hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Login;

const InputBox = ({ type, placeholder, name,value,onChange }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-black"
      />
    </div>
  );
};
