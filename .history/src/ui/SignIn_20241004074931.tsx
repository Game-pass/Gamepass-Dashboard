import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import Image from '../assets/img/login-pic.png';

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen p-4">
      {/* Left section with the image - occupies half of the screen */}
      <div className="w-1/2 h-full bg-black relative">
        <img
          src={Image}
          alt="login illustration"
          className="w-full h-full" 
        />
      </div>

      {/* Right section with the sign-in form - occupies the other half */}
      <div className="w-1/2 h-full bg-black flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-semibold">Sign In</h2>

           {/* Wallet Button with glow effect */}
           <button className="mt-6 w-100 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-lg focus:outline-none ring-2 ring-blue-500 ring-opacity-50 hover:shadow-xl transition duration-300">
            Sign In with Wallet
          </button>


          {/* Google Sign-In Button */}
          <div className="mt-6 flex justify-center">
            <button className="p-4 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none">
              <IoLogoGoogle className="text-red-500" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
