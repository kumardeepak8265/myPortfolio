import { Link } from "react-router-dom";

function NavBar({ showproject, showresume, showAbout }) {
  return (
    <div className=" flex space-x-6 justify-end p-6 bg-gray-200 top-0 sticky">
      <span className="grow"></span>
      <Link to="/">HOME</Link>
      <Link to="/project" onClick={showproject}>
        PROJECT
      </Link>
      <Link to="/resume" onClick={showresume}>
        RESUME
      </Link>
      <Link to="/about" onClick={showAbout}>
        ABOUT
      </Link>
    </div>
  );
}
export default NavBar;
