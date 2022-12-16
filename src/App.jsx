import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";

import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
function App() {
  return (
    <div className="overflow-y-scrool">
      <NavBar></NavBar>

      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/project" element={<Project></Project>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/resume" element={<Resume></Resume>} />
      </Routes>
    </div>
  );
}

export default App;
