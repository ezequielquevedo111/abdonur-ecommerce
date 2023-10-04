import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <main className="w-max[1920px] h-[1000px]">
      <section className="bg-white">
        <div className="flex flex-col justify-center items-center h-[800px]">
          <h1 className="text-gray-main text-5xl leading-snug text-center font-black py-10 ">
            TU ORDEN SE ENCUENTRA VACÍA, VE AL INICIO PARA COMPLETAR LA MISMA.
          </h1>
          <Link
            to="/"
            className="bg-gray-main text-white text-center py-[10px] text-sm h-10 w-32 font-black hover:bg-white-gray hover:text-gray-main rounded-sm transition-all  hover:scale-105"
          >
            IR AL INICIO
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
