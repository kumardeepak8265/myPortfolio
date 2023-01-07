function Template({ image, heading, code, preview }) {
  return (
    <div className="border-2 border-gray-500 p-4 space-y-4 rounded-md flex justify-center flex-col items-center">
      <h1 className="font-bold">{heading}</h1>
      <img src={image} />
      <div className="flex items-center m-10 space-x-4">
        <a href={code} className="p-2 rounded-md bg-indigo-400">
          code
        </a>
        <a href={preview} className="p-2 rounded-md bg-yellow-400">
          preview
        </a>
      </div>
    </div>
  );
}
export default Template;
