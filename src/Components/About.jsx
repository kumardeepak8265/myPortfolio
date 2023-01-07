import { ImGithub } from "react-icons/im";
import { SiNetlify } from "react-icons/si";
function About() {
  return (
    <div
      id="about"
      data-aos="fade-up-left"
      className="flex flex-col justify-center items-center space-y-4 h-80 border-2 border-yellow-500"
    >
      <h1 className="text-6xl">about me</h1>
      <h1>Contact no= 8265848632</h1>
      <h1> Email id = kumardeepak6830@gmail.com</h1>
      <div className="flex space-x-8">
        <a href="https://github.com/kumardeepak8265" target="-blank">
          <ImGithub className="text-yellow-500 text-4xl" />
        </a>
        <a
          href="https://app.netlify.com/teams/kumardeepak8265/overview"
          target="-blank"
        >
          <SiNetlify className="text-indigo-500  text-4xl" />
        </a>
      </div>
    </div>
  );
}
export default About;
