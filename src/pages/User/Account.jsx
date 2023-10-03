import Meta from "../../components/Meta";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import posterImg from "../../assets/images/Design inspiration.gif";
const Account = () => {
  const list = [
    {
      herf: "/orders",
      title: "My Orders",
      icon: <FaAngleRight />,
      description: "View, modify and track orders",
    },
    {
      herf: "/payments",
      title: "My Payments",
      icon: <FaAngleRight />,
      description: "View, modify payment methods",
    },
    {
      herf: "/addresses",
      title: "My Addresses",
      icon: <FaAngleRight />,
      description: "Edit, add or remove addresses",
    },
    {
      herf: "/profile",
      title: "My Profile",
      icon: <FaAngleRight />,
      description: "Edit personal info, chagne password",
    },
  ];
  return (
    <>
      <Meta title="My Account" />
      <section className="container mx-auto py-5 px-5 mb-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-xl md:text-3xl font-semibold">My Account</h1>
          <p className="w-20 md:w-28 border-b-2 border-[#5a6d57]"></p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-10">
          {list.map((list) => (
            <Link key={list.herf} to={list.herf}>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-medium flex gap-2 items-center px-2">
                  {list.title}
                  {list.icon}
                </h3>
                <p className="text-xs text-gray-400 font-medium px-2">
                  {list.description}
                </p>
                <p className="border-b-2 border-[#5a6d57] ml-1.5"></p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex md:flex-row flex-col gap-10 items-center justify-around">
          <div className="order-last md:order-first">
            <Link
              to="/"
              className="py-3 px-10 font-medium border-2 border-[#272f25] hover:bg-[#272f25] hover:text-white"
            >
              Continue Shopping
            </Link>
          </div>
          <div className="py-5 px-5">
            <img src={posterImg} alt="Poster" className="w-96 h-96" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
