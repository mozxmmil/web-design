import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

const About = () => {
  return (
    <div  className="w-full text-black bg-[#CDEA68]   rounded-tl-3xl rounded-tr-3xl p-20">
      <h1 className="font-[Neue Montreal] text-[4vw] leading-[4.5vw]  -tracking-[.06em]  font-normal ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className=" w-full border-t-2 flex  border-b-2 border-zinc-400 mt-14 pt-3 px-10 pb-20 text-[1.2vw] ">
        <div className=" w-1/2 ">
          <h1>What you can expect:</h1>
        </div>
        <div className=" w-[40%] px-20 pb-5 leading-[1.5vw] flex justify-end flex-col gap-6 tracking- ">
          <div>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </div>
          <div>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </div>
        </div>
        <div className=" w-[10%] flex items-center gap-1  justify-center ">
          <FaInstagram />
          <FaFacebook />
          <FaSnapchat />
        </div>
      </div>
      <div className="Readme py-5 flex justify-start">
        <div className="leftdiv w-1/2 ">
          <h1 className="font-medium text-[55.4667px] font-[Neue Montreal]">
            Our approach:
          </h1>
          <button className=" mt-5 flex gap-10 items-center justify-center border-2 border-black bg-black text-white px-10 py-4  rounded-full ">
            Read More
            <div className="bg-white w-3 h-3 rounded-full"></div>
          </button>
        </div>
        <div className="rightdiv w-1/2 h-[60vh] bg-purple-600 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
