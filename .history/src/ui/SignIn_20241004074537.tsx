import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import Image from '../assets/img/login-pic.png'; // Update this path according to your image location

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left section with the image - occupies half of the screen */}
      <div className="w-1/2 h-full bg-black relative">
        <img
          src={Image}
          alt="login illustration"
          className="w-full h-full object-cover" // Full width, height and cover the space
        />
      </div>

      {/* Right section with the sign-in form - occupies the other half */}
      <div className="w-1/2 h-full bg-black flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-white font-semibold">Sign In</h2>

          {/* Wallet Button */}
          <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-md hover:shadow-lg focus:outline-none">
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
