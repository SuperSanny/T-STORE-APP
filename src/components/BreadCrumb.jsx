/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <>
      <div className="breadcrumb py-4 mb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-start mb-0">
                <Link to="/" className="link-color">
                  Home&nbsp;
                </Link>
                /&nbsp;{title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
