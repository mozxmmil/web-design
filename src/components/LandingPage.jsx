import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen  text-white pt-1 ">
      <div className="textstructure  mt-32 px-20 ">
        {["We Create", "eye-opening", "Presentations"].map((itme, index) => (
          <div className="masker  ">
            <div className="flex w-fit items-end overflow-hidden">
              {index === 1 && (
                <motion.div  initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className="mr-2 w-[8vw] overflow-hidden rounded-md h-[4.5vw] mb-2 relative top-0 bg-green-400"></motion.div>
              )}
              <h1 className="uppercase  leading-[5vw] text-8xl tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] font-semibold leading-none ">
                {itme}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex items-center justify-between px-20 py-7 ">
        {[
          "for public and private companies",
          "from the frist pitch to ipo",
        ].map((item, index) => (
          <p className=" capitalize leading-none tracking-tight font-light ">
            {item}
          </p>
        ))}
        <div className="button flex items-center gap-1">
          <div className="border-2 px-5 py-2 border-zinc-700 rounded-full flex items-center">
            <p className="uppercase ">start the project</p>
          </div>
          <div className="border-2 w-10 h-10 justify-center border-zinc-700 rounded-full flex items-center">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
