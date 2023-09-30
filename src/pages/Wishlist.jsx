import Meta from "../components/Meta";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const authState = useSelector((state) => state.auth);
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
          {authState.isLoggedIn ? (
            <div>
              <h1 className="text-4xl font-semibold">My Wishlist</h1>
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-2xl font-semibold">{`You don't have any items in wishlist.`}</h1>
                <p>Log in to sync your list.</p>
                <Link
                  to="/login"
                  className="btn login-btn w-1/3 md:w-1/6 mx-auto mb-3 py-2"
                >
                  LOG IN
                </Link>
              </div>
              <div className="flex gap-2 w-11/12 mx-auto py-3 mb-3">
                <div className="text-center">
                  <Link to="#">
                    <img
                      src="https://media.boohoo.com/i/boohoo/bmm54800_orange_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
                      alt="CROCHET KNITTED TANK"
                    />
                    <h3 className="text-center text-xs font-semibold hover:underline mt-2">
                      CROCHET KNITTED TANK
                    </h3>
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="#">
                    <img
                      src="https://media.boohoo.com/i/boohoo/bmm02540_bark_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
                      alt="SLIM MAN SHORT SLEEVE PIQUE POLO"
                    />
                    <h3 className="text-center text-xs font-semibold hover:underline mt-2">
                      SLIM MAN SHORT SLEEVE PIQUE POLO
                    </h3>
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="#">
                    <img
                      src="https://media.boohoo.com/i/boohoo/bmm60028_black_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
                      alt="OVERSIZED HOMME GRAPHIC T-SHIRT"
                    />
                    <h3 className="text-center text-xs font-semibold hover:underline mt-2">
                      OVERSIZED HOMME GRAPHIC T-SHIRT
                    </h3>
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="#">
                    <img
                      src="https://media.boohoo.com/i/boohoo/bmm54198_white_xl?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"
                      alt="OVERSIZED HOMME PRINT TANK"
                    />
                    <h3 className="text-center text-xs font-semibold hover:underline mt-2">
                      OVERSIZED HOMME PRINT TANK
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {authState.isLoggedIn ? (
        <section className="container mx-auto py-3 px-4">
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="flex flex-col relative">
              <ProductCard />
              <button className="bg-primary-80 text-white absolute top-1 right-1  ">
                <RxCross2 className="hover:scale-110 text-2xl" />
              </button>
              <button className="btn login-btn py-2">Add to cart</button>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Wishlist;
