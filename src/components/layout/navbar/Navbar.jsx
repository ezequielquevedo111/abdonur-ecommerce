import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white space-x-7">
      <Link
        to="/checkout"
        className="font-medium transition hover:text-gray-main uppercase relative after:bg-gray-main after:absolute after:h-[2.5px] after:w-0 after:bottom-0 after:top-6 after:left-0 
        hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        mi orden
      </Link>
      <a
        href="#locations"
        className="font-medium transition delay-75 hover:text-gray-main uppercase relative after:bg-gray-main after:absolute after:h-[2.5px] after:w-0 after:bottom-0 after:top-6 after:left-0 
        hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        sucursales
      </a>
      <a
        href="#about"
        className="font-medium transition delay-75 hover:text-gray-main uppercase relative after:bg-gray-main after:absolute after:h-[2.5px] after:w-0 after:bottom-0 after:top-6 
        after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        nosotros
      </a>
      <a
        href="#contact"
        className="font-medium transition delay-75 hover:text-gray-main uppercase relative after:bg-gray-main after:absolute after:h-[2.5px] after:w-0 after:bottom-0 after:top-6 
        after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        contacto
      </a>
    </nav>
  );
};

export default Navbar;
