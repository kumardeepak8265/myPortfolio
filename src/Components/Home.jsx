function Home() {
  return (
    <div
      id="home"
      className="sm:p-6 h-full 
      flex  flex-col sm:flex-row  justify-center items-center mb-10 "
    >
      <div className="sm:w-3/4 p-8">
        <img
          className=" w-full h-full object-cover "
          // src="https://cdn.discordapp.com/attachments/943172350139052092/1060609449947058216/IMG_20230105_225249.png"
          src="https://cdn.discordapp.com/attachments/943172350139052092/1061334867050238054/IMG_20230107_225416.png"
        />
      </div>
      <div className="sm:w-3/4 space-y-8 ">
        <h1 className="text-4xl font-bold ">
          Hy! i Am <br></br>
          <span className="text-yellow-300">Deepak</span>
        </h1>
        <p className="text-gray-500">
          I am a frontend developer , i have make multiple assigment,because i
          never giveup,
        </p>
        <button className="p-2 bg-yellow-500 text-white rounded-full">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
}
export default Home;
