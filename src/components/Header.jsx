import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./Navbar";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleIsFixed = () =>
      window.scrollY >= 1 ? setIsFixed(true) : setIsFixed(false);

    window.addEventListener("scroll", handleIsFixed);

    return () => {
      window.removeEventListener("scroll", handleIsFixed);
    };
  }, [isFixed]);
  return (
    <>
      <header
        className={`w-full top-0 text-center bg-[#5a6d57] text-white text-xs md:text-sm font-semibold z-50 ${
          isFixed ? "fixed" : ""
        }`}
      >
        <div className="container mx-auto">
          <p className="py-2">Enjoy Free Shipping On All Orders</p>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
