import { Link } from "react-router-dom";
import ImgSlider from "../components/Slider/ImgSlider";
import EffectCard from "../components/Slider/EffectCard";
import ImgLoopSlider from "../components/Slider/ImgLoopSlider";
import Images from "../constant/Images";
const Home = () => {
  const loopSliderImg = [
    {
      link: "#",
      src: Images.design2,
      alt: "",
    },
    {
      link: "#",
      src: Images.design1,
      alt: "",
    },
    {
      link: "#",
      src: Images.design3,
      alt: "",
    },
    {
      link: "#",
      src: Images.design2,
      alt: "",
    },
    {
      link: "#",
      src: Images.design1,
      alt: "",
    },
    {
      link: "#",
      src: Images.design3,
      alt: "",
    },
    {
      link: "#",
      src: Images.design2,
      alt: "",
    },
    {
      link: "#",
      src: Images.design1,
      alt: "",
    },
    {
      link: "#",
      src: Images.design3,
      alt: "",
    },
  ];
  const sliderImg = [
    {
      alt: "",
      src: Images.design,
    },
    {
      alt: "",
      src: Images.design,
    },
    {
      alt: "",
      src: Images.design,
    },
    {
      alt: "",
      src: Images.design,
    },
    {
      alt: "",
      src: Images.design,
    },
    {
      alt: "",
      src: Images.design,
    },
  ];
  const effectCardImg = [
    {
      src: "https://images.unsplash.com/photo-1616006897093-5e4635c0de35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <>
      <div className="my-2">
        <ImgLoopSlider loopSliderImg={loopSliderImg} />
      </div>
      <div className="mx-auto">
        <div className="mb-2  bg-[#b8d8b320] py-5">
          <h1 className="text-center text-lg font-bold mb-2">
            TRENDING CATEGORIES
          </h1>
          <div className="flex justify-center">
            <Link to="#">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1695095464.jpg"
                alt="Design of the Week"
                className="rounded-l-md shadow-md"
              />
            </Link>
            <Link to="#">
              <img
                src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1695095464.jpg"
                alt=""
                className="rounded-r-md shadow-md"
              />
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-center text-lg font-bold mb-2 ">
            TRENDING CATEGORIES
          </h1>
          <div className="flex flex-wrap justify-center">
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
      <div className="bg-[#b8d8b320] py-5">
        <h1 className="text-center text-lg font-bold mb-2">BESTSELLERS</h1>
        <ImgSlider sliderImg={sliderImg} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-20 px-5 py-5">
        <EffectCard effectCardImg={effectCardImg} />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">This is Product Slider.</h1>
          <p className="text-xl font-medium text-gray-500">
            Here, You can select product by sliding (left to right) or (right to
            left)
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
