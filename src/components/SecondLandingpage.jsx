import { motion } from "framer-motion";
import React from "react";

const SecondLandingpage = () => {
  return (
    <div

      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full  bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl overflow-hidden
      "
    >
      <div className="border-t-2 border-b-2 border-zinc-400 px-10 py-10 flex pr-10 items-center whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          duration
          className="text-[10vw] font-['Test Founders Grotesk X-Cond SmBd'] uppercase leading-none font-bold "
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          duration
          className="text-[10vw] font-['Test Founders Grotesk X-Cond SmBd'] uppercase leading-none font-bold "
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default SecondLandingpage;
