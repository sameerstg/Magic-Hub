import React from "react";

function Drawer({ setShowMenu, showMenu }) {
  return (
    <div className="bg-gray-700 w-[100%] h-full  z-10 absolute top-0 flex flex-col text-center justify-center">
      <div className="flex flex-row justify-around">
        <div className="menu-item">
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>

        <div className="menu-btn">
          {showMenu ? (
            <button onClick={() => setShowMenu(!showMenu)}> X </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
