import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5'; // Google icon

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black">
      {/* Left section with the images and text */}
      <div className="w-full bg- relative">
        <div className="grid grid-cols-2 gap-2 p-10">
          {/* Grid Image blocks */}
          <div className="bg-[url('/assets/images/image1.png')] bg-cover bg-center rounded-lg h-64"></div>
          <div className="bg-[url('/assets/images/image2.png')] bg-cover bg-center rounded-lg h-64"></div>
          <div className="bg-[url('/assets/images/image3.png')] bg-cover bg-center rounded-lg h-64"></div>
          <div className="bg-[url('/assets/images/image4.png')] bg-cover bg-center rounded-lg h-64"></div>
        </div>
        {/* Text Section */}
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold">GamePass</h1>
          <p className="mt-4 text-lg">
            GamePass helps developers store players’ game-states, assets and more, 
            you focus on building and let us manage states and data.
          </p>
        </div>
      </div>

      {/* Right section with the sign-in form */}
      <div className="w-full lg:w-2/5 bg-black flex flex-col items-center justify-center">
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
