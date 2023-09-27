import AboutContainer from "../about/AboutContainer";
import ContactContainer from "../contact/ContactContainer";
import LocationsContainer from "../locations/LocationsContainer";
import ProductListContainer from "../productList/ProductListContainer";

const Home = () => {
  return (
    <main>
      <section className="bg-orange-main h-[935px] w-max[1920px] flex justify-around	items-center">
        <div className="w-[1220px]">
          <h1 className="text-5xl text-left leading-snug  text-white font-black pb-10 w-[850px]">
            TÚ COMIDA FAVORITA AL ALCANCE DE TÚ MANO
          </h1>
          <button className="bg-gray-main text-white text-sm h-10 w-32 font-black hover:bg-white hover:text-gray-main rounded-sm transition-all hover:-translate-y-2">
            VER MENÚ
          </button>
        </div>
      </section>
      <section className="flex justify-around bg-white-gray w-max[1920px]">
        <ProductListContainer />
      </section>
      <section className="flex justify-around  bg-white w-max[1920px]">
        <AboutContainer />
      </section>
      <section className="flex justify-around  bg-gray-second w-max[1920px]">
        <LocationsContainer />
      </section>
      <section className="flex justify-around  bg-orange-main w-max[1920px]">
        <ContactContainer />
      </section>
    </main>
  );
};

//

export default Home;
