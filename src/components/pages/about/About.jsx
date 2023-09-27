import React from "react";

const About = () => {
  return (
    <div className="w-full h-[1000px] flex flex-row ">
      <div className="text-gray-main py-16 w-[960px] flex flex-col justify-start items-center text-left space-y-24">
        <h2 className="text-gray-main text-[40px] font-black  py-3 px-24  w-[600px]">
          SOBRE NOSOTROS
        </h2>
        <div className="flex flex-col">
          <p className="py-3 px-4 w-[440px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus quod odio dolorem harum excepturi. Enim, atque voluptate
            maxime autem minima incidunt nostrum ex sapiente pariatur similique
            magni quos possimus ut?
          </p>
          <p className="py-3 px-4 w-[440px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aliquam
            voluptate ipsam fugit? Quo accusamus quae fugiat ratione sapiente
            qui ex eaque esse, perspiciatis repellendus eligendi. Similique
            nulla ut delectus.
          </p>
          <p className="py-3 px-4 w-[440px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            nam amet fugit eius optio, sequi laudantium in nobis minus ex rem
            expedita voluptate ipsam provident at, consectetur dolores fugiat
            tempore?
          </p>
        </div>
      </div>
      <div className="w-[960px] h-[1000px]">
        <img
          className="w-full h-full"
          src="/src/assets/backgroundDos.png"
        ></img>
      </div>
    </div>
  );
};

export default About;
