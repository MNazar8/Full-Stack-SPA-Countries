import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../assets/images/beach.jpg"
import image2 from "../../assets/images/venice.jpg"
import image3 from "../../assets/images/mountain.jpg"


function Landing() {

  return (
    <div className=' h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 flex flex-row'>
      <div className=" w-1/2 flex justify-center self-center">
        <div className="">
          <a className="" />
          <h1 className=' text-darkGreen font-flighty text-8xl'>
            It's time to start <br />
            your adventure!
          </h1>
          <p className=" font-RobotoLight tracking-wider mb-7">
            Discover new experiences and places <br />
            to visit around the world in this<br />
            amazing website.
          </p>
          <button className=" relative bg-lightGreen py-6 px-6 rounded-none font-bold text-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-lightPink">
            <NavLink to="/home" className=" block w-full h-full text-white">
              Go
            </NavLink>
            <div className="absolute inset-0 bg-lightPink transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
      </div>
      <div className=" w-1/2 flex m-0-auto">
        <div className=" flex flex-1 m-0 transition-all duration-500 overflow-hidden hover:flex-grow-2 group">
          <img src={image1} alt="" className=" w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" />
          <h2 className=" absolute z-10 bg-slate-200 self-center -rotate-90 font-Roboto font-semibold text-3xl translate-x-8 tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-500">Discover</h2>
        </div>
        <div className=" flex flex-1 m-0 transition-all duration-500 overflow-hidden hover:flex-grow-2 group">
          <img src={image2} alt="" className=" w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" />
          <h2 className=" absolute z-10 bg-slate-200 self-center -rotate-90 font-Roboto font-semibold text-3xl translate-x-8 tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-500">Explore</h2>
        </div>
        <div className=" flex flex-1 m-0 transition-all duration-500 overflow-hidden hover:flex-grow-2 group">
          <img src={image3} alt="" className=" w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-500" />
          <h2 className=" absolute z-10 bg-slate-200 self-center -rotate-90 font-Roboto font-semibold text-3xl translate-x-8 tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-500">Travel</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
