import { useState, memo } from "react";
import LpNavBar from "./LpNavBar";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import MbNavBar from "./MbNavBar";

function NavBar() {
  const [manuControl, setManuControl] = useState(true);
  const handleManuControl = () => setManuControl(!manuControl);
  return (
    <div className="top-0 sticky bg-gray-200 p-4 sm:px-16 ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-comforter text-indigo-500 ">
          My Portfolio
        </h1>
        <div className=" h-16 flex space-x-4 items-center">
          <div className="hidden md:block  ">
            <LpNavBar></LpNavBar>
          </div>
          {manuControl && (
            <GiHamburgerMenu
              className=" text-3xl md:hidden "
              onClick={handleManuControl}
            />
          )}
        </div>
      </div>
      {!manuControl && <MbNavBar MobileViesUp={handleManuControl}></MbNavBar>}
    </div>
  );
}
export default memo(NavBar);
