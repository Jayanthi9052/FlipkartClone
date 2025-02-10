import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingCartIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/images/Flipkart_Logo_1.png';
import './styles.css';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };

  
  return (
    <header className="bg-white Navbar">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Logo</span>
            <img className="h-8 w-auto" src={logo} alt="Company Logo" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500">
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Show Login if user is NOT logged in */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
          {!user ? (
            <>
            <button 
            className=" relative  px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100"
            onClick={() => { setOpen(false); navigate('/Cart'); }}
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-900" />
            {/* {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartQuantity}
                </span>
              )}
             */}
          </button>
            
            <button 
              className="signin text-white bg-blue-500 p-1.5 px-4 rounded-md transition duration-200 ease-in-out"
              onClick={() => navigate('/Login')}
            >
              Login
            </button>
            </>
            
          ) : null}
        </div>

        {/* Shopping Cart Button */}
        {user && (
          <button className="relative hidden lg:flex ml-6" onClick={() => navigate('/Cart')}>
            <ShoppingCartIcon className="h-6 w-6 text-gray-900" />
            <h5></h5>
          </button>
        )}

        {/* Three Dots Button (Profile & Logout) */}
        {user && (
          <div 
            className="relative hidden lg:flex ml-6"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="text-gray-900">
              <Bars3Icon className="h-6 w-6" />
            </button>

            {/* Dropdown for Three Dots Button */}
            {isHovered && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 space-y-2">
                <button 
                  className="text-gray-900 p-2 rounded-md hover:bg-gray-100 w-full text-left"
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </button>
                <button 
                  className="text-gray-900 p-2 rounded-md hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog as="div" className="lg:hidden" open={open} onClose={setOpen}>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-64 bg-white px-6 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Company Logo</span>
              <img className="h-8 w-auto" src={logo} alt="Company Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="mt-6 space-y-4">
            {user ? (
              <>
                
                <button 
                  className="block w-full text-left px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100"
                  onClick={() => { setOpen(false); navigate('/profile'); }}
                >
                  Profile
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button 
                className="block w-full text-left px-4 py-2 text-gray-900 rounded-md hover:bg-gray-100"
                onClick={() => { setOpen(false); navigate('/Login'); }}
              >
                Login
              </button>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
