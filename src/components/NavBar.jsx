import React, { useState } from "react";

function NavBar() {
    const [logo, setLogo] = useState(false)
    const [nav, setNav] = useState(false)

  return (
    <div className="w-full bg-[--primary-color] h-20 px-4 absolute z-10 text-black flex items-center justify-between">
     
        <div>
          <h4 className={logo ? "hidden" : "block"}>Logo</h4>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-6 ">
          <li className="hover:underline cursor-pointer ">Home</li>
          <li className="hover:underline cursor-pointer ">About</li>
          <li className="hover:underline cursor-pointer ">Skills</li>
          <li className="hover:underline cursor-pointer ">Projects</li>
        </ul>

        <div className="md:hidden z-10">
            <h4>Menu</h4>
        </div>

         {/* Mobile Menu */}
      <div className={nav ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col text-black" : "absolute left-[-100%]"}>
        <ul>
          <h1>Egret.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book Trip</li>
          <div className="flex flex-col ">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex my-6 justify-between">
            {/* <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" /> */}
            <h4>Facebook</h4>
            <h4>Twitter</h4>
            <h4>Youtube</h4>
            <h4>Instagram</h4>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
