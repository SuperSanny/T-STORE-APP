import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <NavBar />
      <section className="container mx-auto py-1 px-4">
        <div className="flex flex-col items-center justify-center">
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/ytuosppc.json"
              trigger="hover"
              colors="primary:#748c70,secondary:#272f25"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">My Wishlist</h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-3 px-4">
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex flex-col shadow py-2 px-2 relative">
            <ProductCard />
            <button className="bg-primary-80 text-white absolute top-1 right-1  ">
              <RxCross2 className="hover:scale-110 text-2xl" />
            </button>
            <button className="btn login-btn py-2">Add to cart</button>
          </div>
          <div className="flex flex-col shadow py-2 px-2 relative">
            <ProductCard />
            <button className="bg-primary-80 text-white absolute top-1 right-1  ">
              <RxCross2 className="hover:scale-110 text-2xl" />
            </button>
            <button className="btn login-btn py-2">Add to cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
