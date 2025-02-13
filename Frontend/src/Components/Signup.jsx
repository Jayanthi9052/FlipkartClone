import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/Flipkart_Logo_1.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();

  const [username, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUserData=async()=>{

    
    //console.log('ggv g')
    const payload={
        username:username,
        mobile:mobile,
        email:email,
        password:password

    }
    console.log(payload)

    try {
      const response = await axios.post("https://flipkartclone-2-kz1p.onrender.com/addUser", payload);
      alert("User registered successfully");
      localStorage.setItem("user",JSON.stringify(response.data))
      navigate('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("User already exists");
      } else {
        console.log("error", err);
        alert("Registration failed");
      }
    }
    setName("")
    setEmail("")
    setMobile("")
    setPassword("")

  }

  

  return (
    <>
      <Navbar />
      <section className="signInPage bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                  <a href="/#" className="mx-auto inline-block max-w-[160px]">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div>
                  <InputBox
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <InputBox
                    type="text"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="mobile"
                    required
                  />
                  <InputBox
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                  <InputBox
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                  <div className="mb-10">
                    <button
                      onClick={postUserData}
                      className="w-full cursor-pointer rounded-md bg-gray-500 border-primary px-5 py-3 text-base font-medium transition hover:opacity-90"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <a
                  href="/#"
                  className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline dark:text-white"
                >
                  Forget Password?
                </a>
                <p className="text-base text-body-color dark:text-dark-6">
                  <span className="pr-0.5">Already have an account!!!</span>
                  <span
                    onClick={() => navigate("/Login")}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    Sign in
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

export default Signup;

const InputBox = ({ type, placeholder, name, value, onChange }) => {
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
