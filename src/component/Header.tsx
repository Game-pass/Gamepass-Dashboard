import React, { useState } from 'react';
import Logo from "../assets/img/logo.png";
import Search from "../assets/icons/search.png";
// import Shortcut from "../assets/icons/shortcut.png";
import Mode from "../assets/icons/mode.png";
import Notification from "../assets/icons/notification.png";
import Menu from "../assets/icons/menu.png";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#0c1131]">
      {/* Left (Logo) */}
      <div className="flex items-left">
        <div className="text-white text-lg font-bold flex items-center cursor-pointer">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* Center (Search Box) */}
      <form
        className=" relative flex items-center w-1/2"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Search anything on Gamepass"
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-4 py-2 w-full rounded-full bg-[#1F2937] text-white focus:outline-none cursor-pointer"
        />
        {/* Search Icon Inside Input on the Right */}
        <img src={Search} alt="Search Icon" className="absolute right-4 w-7 h-7 cursor-pointer" />
      </form>

      {/* Right (Icons) */}
      <div className="flex space-x-4 items-center">
        <img src={Mode} alt="Mode Icon" className="w-10 h-10 cursor-pointer" />
        <img src={Notification} alt="Notification Icon" className="w-10 h-10 cursor-pointer" />
        <img src={Menu} alt="Menu Icon" className="w-10 h-10 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
