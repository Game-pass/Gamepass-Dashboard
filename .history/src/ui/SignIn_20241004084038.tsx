import React from 'react';
import Image from '../assets/img/login-pic.png';
import { useNavigate } from "react-router-dom";




const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleWalletSignIn = () => {
    // Here you can add wallet authentication logic if needed
    navigate("/login"); // Redirect to login page

  return (
    <div className="flex h-screen p-4">
      <div className="w-1/2 h-full bg-black relative">
        <img
          src={Image}
          alt="login illustration"
          className="w-full h-full" 
        />
      </div>

      <div className="w-1/2 h-full bg-black flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-semibold">Sign In</h2>

           {/* Wallet Button with glow effect */}
           <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-28 py-3 rounded-full text-lg shadow-lg focus:outline-none ring-2 ring-blue-500 ring-opacity-50 hover:shadow-xl transition duration-300">
            Sign In with Wallet
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
