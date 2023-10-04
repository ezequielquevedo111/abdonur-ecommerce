import React from "react";

const About = () => {
  return (
    <div className="w-full h-[1000px] grid  sm:grid-cols-1 sm:grid-rows-2 xl:grid-cols-1 xl:grid-rows-2 2xl:grid-cols-2 2xl:grid-rows-1">
      <div className="flex flex-col space-y-6 space-x-8">
        <h2 className="text-gray-main text-[40px] font-black uppercase py-10 pl-[30px] self-center">
          Sobre nosotros
        </h2>
        <p className="self-center w-[350px] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          quod, enim atque architecto eaque laboriosam numquam error earum,
          laudantium optio neque dolorum ipsum voluptas quam iste tenetur
          voluptates accusantium placeat!
        </p>
        <p className="self-center w-[350px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          quod, enim atque architecto eaque laboriosam numquam error earum,
          laudantium optio neque dolorum ipsum voluptas quam iste tenetur
          voluptates accusantium placeat!
        </p>
        <p className="self-center w-[350px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          quod, enim atque architecto eaque laboriosam numquam error earum,
          laudantium optio neque dolorum ipsum voluptas quam iste tenetur
          voluptates accusantium placeat!
        </p>
      </div>

      <div className="w-full row-span-2">
        <img
          className=" h-full object-cover"
          src="/src/assets/backgroundDos.png"
        ></img>
      </div>
    </div>
  );
};

export default About;
