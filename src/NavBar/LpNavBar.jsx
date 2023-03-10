import React, { memo } from "react";
import { Link } from "react-scroll";

function LpNavBar() {
  return (
    <div className=" flex sm:flex-row p-4  sm:space-x-8 ">
      <Link
        spy={true}
        offset={-150}
        to="home"
        smooth={true}
        className="hover:text-yellow-500  hover:font-bold cursor pointer"
      >
        Home
      </Link>

      <Link
        spy={true}
        offset={-150}
        to="skills"
        smooth={true}
        className="hover:text-yellow-500 hover:font-bold cursor pointer"
      >
        SKILLS
      </Link>

      <Link
        spy={true}
        to="projects"
        offset={-150}
        smooth={true}
        className="hover:text-yellow-500  hover:font-bold cursor pointer"
      >
        PROJECTS
      </Link>

      <Link
        spy={true}
        to="about"
        smooth={true}
        className="hover:text-yellow-500  hover:font-bold cursor pointer"
      >
        ABOUT ME
      </Link>
    </div>
  );
}
export default memo(LpNavBar);
