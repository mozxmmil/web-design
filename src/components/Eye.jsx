import React, { useEffect, useState } from "react";

const Eye = () => {
  const [finalValueOfEye, setFinalValueOfEye] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const midx = clientX - window.innerWidth / 2;
      const midy = clientY - window.innerHeight / 2;
      const Deltavalue = (Math.atan2(midy, midx) * 180) / Math.PI;
      setFinalValueOfEye(Deltavalue - 180);
    });

    
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden  ">
      <div data-scroll data-scroll-speed="-.7" className="w-full relative h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <dir className="  flex gap-10 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 flex items-center justify-center rounded-full">
            <div
              id="eyeouter"
              className=" eyeouter w-2/3 h-2/3  rounded-full bg-black relative"
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${finalValueOfEye}deg)`,
                }}
                className={`w-full h-10   absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]`}
              >
                <div className="w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100  flex items-center justify-center rounded-full">
            <div
              id="eyeouter"
              className=" eyeouter w-2/3 h-2/3 rounded-full bg-black relative"
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${finalValueOfEye}deg)`,
                }}
                className="w-full h-10  absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
              >
                <div className="w-10 h-10 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
        </dir>
      </div>
    </div>
  );
};

export default Eye;
