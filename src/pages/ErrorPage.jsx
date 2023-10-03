/* eslint-disable react/prop-types */
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const ErrorPage = (props) => {
  const { message, imgLink } = props;
  return (
    <>
      <Meta title={message} />
      <section className="container mx-auto px-4">
        <div className="py-3">
          <Link to="/" className="flex items-center">
            <lord-icon
              src="https://cdn.lordicon.com/kecapeqm.json"
              trigger="hover"
              colors="outline:#121331,primary:#4bb3fd"
              style={{ width: "32px", height: "32px" }}
            ></lord-icon>
            <span className="border-2 border-green-700 h-7 mx-2"></span>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              T-STORE
            </span>
          </Link>
        </div>
        <div className="px-5 py-5">
          <div className="flex items-center justify-center ">
            <img src={imgLink} alt="Error Page" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
