import MyProjects from "../MyProjects/MyProjucts";
import Skills from "./Skills";

function Home() {
  return (
    <div className="space-y-8">
      <div className="p-6 flex flex-row-reverse bg-green-500 mb-10">
        <div className="w-1/3">
          <img
            className=" w-full h-full object-cover rounded-full "
            src="https://cdn.discordapp.com/attachments/943172350139052092/1028346586700447855/original.jpg"
          />
        </div>
        <div className="w-3/4 space-y-4 ">
          <h1 className="text-2xl font-bold ">
            My name is Deepak <br></br>Full Wtack Web Dowloper
          </h1>
          <p className="text-gray-500">
            main 8 months sain coding he kar raha hu is bitch mana kitna
            assigment banay kuch assigment mahino chala or kuch weak sekhna ko
            bahout kuch mila or main ban bana full stack wed dowloper
          </p>
          <button className="p-2 bg-indigo-400 text-white rounded-md">
            DOWNLOAD RESUME
          </button>
        </div>
      </div>

      <Skills></Skills>
      <MyProjects></MyProjects>
    </div>
  );
}
export default Home;
