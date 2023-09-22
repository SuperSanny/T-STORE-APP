import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2">
          <h1 className="text-center text-lg font-bold mb-2">
            TRENDING CATEGORIES
          </h1>
          <div className="flex">
            <Link to="#">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1695095464.jpg"
                alt="Design of the Week"
              />
            </Link>
            <Link to="#">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1695095464.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg font-bold mb-2">
            TRENDING CATEGORIES
          </h1>
          <div className="flex flex-col">
            <div className="flex gap-5">
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg"
                    alt="Printed T-shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg"
                    alt="Oversize T-Shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg"
                    alt="Shorts"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg"
                    alt="Joggers"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg"
                    alt="Vests"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg"
                    alt="Full Sleeve T-Shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg"
                    alt="Printed T-shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png"
                    alt="Oversize T-Shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg"
                    alt="Shorts"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png"
                    alt="Joggers"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg"
                    alt="Vests"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
              <div>
                <Link to="#">
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg"
                    alt="Full Sleeve T-Shirt"
                  />
                  <h3 className="text-center text-md font-semibold mt-2"></h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
