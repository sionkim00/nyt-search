const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";

  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900"></div>
    </div>
  );
};

export default Loader;
