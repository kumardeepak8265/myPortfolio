import React, { memo } from "react";
import { BiCaretUp } from "react-icons/bi";
import { Link } from "react-scroll";

function MbNavBar({ MobileViesUp }) {
  return (
    <div className=" w-full flex flex-col space-y-4 md:hidden mx-2">
      <Link
        offset={-500}
        onClick={MobileViesUp}
        spy={true}
        to="home"
        smooth={true}
      >
        Home
      </Link>
      <hr className="sm:hidden"></hr>
      <Link
        offset={-400}
        onClick={MobileViesUp}
        spy={true}
        to="skills"
        smooth={true}
      >
        SKILLS
      </Link>
      <hr className="sm:hidden"></hr>

      <Link
        spy={true}
        to="projects"
        offset={-500}
        smooth={true}
        onClick={MobileViesUp}
      >
        PROJECTS
      </Link>
      <hr className="sm:hidden"></hr>
      <Link onClick={MobileViesUp} spy={true} to="about" smooth={true}>
        ABOUT ME
      </Link>
      <hr className="sm:hidden"></hr>
      <BiCaretUp onClick={MobileViesUp} className="text-3xl self-center" />
    </div>
  );
}

export default memo(MbNavBar);
