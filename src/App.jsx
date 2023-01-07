import About from "./Components/About";
import { Footer } from "./Components/Footer";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./MyProjects/Projucts";
import NavBar from "./NavBar/NavBar";
function App() {
  return (
    <div className="overflow-y-scrool space-y-8">
      <NavBar />
      <div className=" p-4 sm:px-16">
        <Home />
        <Skills />
        <Projects />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
