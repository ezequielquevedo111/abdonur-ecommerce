import CardContainer from "../../common/card/CardContainer";

const ProductList = () => {
  return (
    <div className="h-[1750px] w-[1220px] py-16">
      <h2 className="text-gray-main text-[40px] font-black w-[850px]">
        NUESTRO MENÚ
      </h2>
      <div className="grid grid-cols-3 grid-rows-3 h-[1220px] justify-items-center items-center">
        <CardContainer />
      </div>
    </div>
  );
};

export default ProductList;
