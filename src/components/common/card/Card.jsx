const Card = () => {
  return (
    <div
      className="w-[400px] h-[220px] rounded bg-white flex flex-row justify-center items-center shadow-md transition-all hover:shadow-xl hover:-translate-y-1
      hover:ease-in duration-300  relative after:bg-orange-main after:absolute after:h-[3px] after:w-0 after:bottom-0 after:top-00 after:left-0 
      hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    >
      <div className="flex flex-col items-start  m-1 gap-8">
        <p className="text-[18px]font-normal">Empanada Árabe</p>
        <p className="text-[14px] w-[220px] font-light">
          A base de carne de cordero, tomate y cebolla
        </p>
        <p className="text-[14px] font-normal pb-3">$300</p>
      </div>
      <div className="space-y-6 space-x-7">
        <img
          className="w-[110px] h-[90px] rounded object-cover"
          src="./src/assets/background.png"
          alt=""
        />
        <div className="flex items-center text-center bg-orange-second text-[14px] text-orange-text rounded h-[40px] w-[80px] justify-around">
          <button className="w-[26.6px] h-full hover:bg-white-gray rounded">
            -
          </button>
          <p className="w-[26.6px] h-max ">1</p>
          <button className="w-[26.6px] h-full hover:bg-white-gray rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
