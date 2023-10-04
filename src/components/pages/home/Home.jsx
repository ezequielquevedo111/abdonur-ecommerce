import AboutContainer from "../about/AboutContainer";
import ContactContainer from "../contact/ContactContainer";
import LocationsContainer from "../locations/LocationsContainer";
import ProductListContainer from "../productList/ProductListContainer";

const Home = () => {
  return (
    <main>
      <section className="bg-orange-main h-[935px] max-w-[1920px] flex justify-around	items-center">
        <div className="w-[1220px]">
          <h1 className="text-5xl text-left leading-snug  text-white font-black pb-10 w-[850px]">
            TÚ COMIDA FAVORITA AL ALCANCE DE TÚ MANO
          </h1>
          <a
            href="#productList"
            className="flex justify-center items-center bg-gray-main text-white text-sm h-10 w-32 font-black hover:bg-white 
            hover:text-gray-main rounded-sm transition-all hover:scale-x-105"
          >
            VER MENÚ
          </a>
        </div>
      </section>
      <section
        id="productList"
        className="flex justify-around bg-white-gray max-w-[1920px]"
      >
        <ProductListContainer />
      </section>
      <section
        id="about"
        className="flex justify-around  bg-white max-w-[1920px]"
      >
        <AboutContainer />
      </section>
      <section
        id="locations"
        className="flex justify-around  bg-orange-main max-w-[1920px]"
      >
        <LocationsContainer />
      </section>
      <section
        id="contact"
        className="flex justify-around  bg-white-gray max-w-[1920px]"
      >
        <ContactContainer />
      </section>
    </main>
  );
};

//

export default Home;
