import serverErrorPage from "../assets/images/Cloud hosting.gif";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const InternalServer = () => {
  return (
    <>
      <Meta title="Server Error" />
      <section className="container mx-auto">
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
          <div className="flex items-center justify-center">
            <img src={serverErrorPage} alt="server error page" />
          </div>
        </div>
      </section>
    </>
  );
};

export default InternalServer;
