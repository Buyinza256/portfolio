import React from "react";
import { motion } from "framer-motion";
import portfologo from '../assets/vectors/834.png'

function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="min-h-[100vh] bg-gray-50 relative w-full"
    >
      <div className="absolute top-[10%] flex w-full justify-center items-center ">
        <div className="w-[55%]">
          <div className="relative left-1 bg-black w-[35%] h-[28px] rounded-[30px] text-white font-bold text-center">
            Welcome to my Portfolio
          </div>
          <h1 className="text-black lg:text-[3.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="w-full flex justify-start px-4 py-2"><ul className="flex gap-4">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul></div>

          <button className="bg-[--primary-color] py-2 px-4 font-bold left-1 relative rounded-sm text-2xl">Explore</button>
        </div>

        <div className="w-[45%]">
          <img src={portfologo} alt="/" className="rounded-l-2xl" />
        </div>
      </div>

      {/* Your Banner content here */}
    </motion.div>
  );
}

export default Banner;
