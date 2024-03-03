import React from "react";
import { motion, useAnimation } from "framer-motion";

const FeaturedSection = () => {
  const card = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    card[index].start({ y: "0" });
  };
  const handleHoverend = (index) => {
    card[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 ">
      <div className="px-10">
        <h1 className="text-7xl  leading-[55px] font-[Neu_Montreal] pb-20">
          Featured Projects
        </h1>
      </div>
      <div className=" card  px-20 flex gap-10 items-center justify-center border-t-2 pt-10 w-full ">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverend(0)}
          className="left w-1/2 relative h-[75vh]  "
        >
          <h1 className="absolute  leading-none tracking-tight left-[95%] -translate-x-1/2 flex  overflow-hidden -translate-y-1/2 w-[6.5vw] text-6xl top-1/2">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={card[0]}
                transition={{ ease: [0.45, 0, 0.55, 1], duration: index * 0.3 }}
                className="inline-block 
                "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="leftImageContaier w-full h-full  ">
            <div className="w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverend(1)}
          className="Right w-1/2 h-[75vh] relative "
        >
          <h1 className="absolute  leading-none tracking-tight right-[95%] -translate-x-1/2 flex overflow-hidden  -translate-y-1/2 w-[6.5vw] text-6xl top-1/2">
            {"YISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={card[1]}
                transition={{
                  ease: [0.45, 0, 0.55, 1],
                  duration: index * 0.3,
                }}
                className="inline-block "
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="leftImageContaier w-full h-full ">
            <div className="w-full h-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedSection;
