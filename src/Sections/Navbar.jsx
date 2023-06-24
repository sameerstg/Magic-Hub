import React, { useState } from "react";
import logo from "../Assets/Images/Logo.svg";
import burger from "../Assets/Images/Burger.svg";
import Drawer from "../Components/Drawer";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    //max-w-[1240px]
    <ul className="navbar h-52  text-white mx-auto laptop:max-w-[1300px] w-full">
      {/* <div className="flex  desktop:justify-around items-center "> */}
      <div className="flex justify-between px-10 items-center desktop:hidden">
        <div className="logo">
          <img className="h-20" src={logo} alt="" />
        </div>
        <div className="mobile-menu">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="text-white fill-current"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
              /
            </svg>
          </button>
        </div>
      </div>

      {showMenu ? (
        <Drawer showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : null}

      <div className="flex flex-row justify-between py-3 items-center">
        <div className="flex desktop:px-14 ">
          <img className="h-20 hidden desktop:flex" src={logo} alt="" />
          <div className="hidden desktop:flex  flex-col text-center">
            <h1 className=" px-2 text-3xl w-full font-bold text-[#060132]">
              Magic
            </h1>
            <h1 className=" px-2 text-3xl w-full font-bold text-[#060132]">
              Hub
            </h1>
          </div>
        </div>

        <div className="mr-10">
          <div className="flex items-center hidden desktop:flex">
            <li className="navbar-button  px-4 text-[#060132] underline">
              Home
            </li>
            <li className="navbar-button  px-4 text-[#060132] underline">
              About Us
            </li>
            <li className="navbar-button  px-4 text-[#060132] underline">
              Tokenomics
            </li>
            <li className="navbar-button  px-4 text-[#060132] underline">
              Buy/Sell
            </li>
            <li className="navbar-button  px-4 text-[#060132] underline">
              UseCases
            </li>
            <li className="navbar-button  px-4 text-[#060132] underline">
              RoadMap
            </li>
            <li className="buynow-button px-5 desktop:px-12 laptop:py-3 tablet:px-3 ">
              Buy Now
            </li>
          </div>
        </div>
      </div>
    </ul>
  );
}

export default Navbar;
