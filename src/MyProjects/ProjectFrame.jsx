function SkillFrame({ image, heading }) {
  return (
    <div className="border-2 border-gray-300 p-4 space-y-4 flex justify-center flex-col items-center">
      <img src={image} />
      <h1 className="font-bold">{heading}</h1>
    </div>
  );
}
export default SkillFrame;
