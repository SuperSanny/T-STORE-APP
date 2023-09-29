/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="breadcrumb py-1 px-3">
          <div className="flex gap-3">
            {items.map((item, index) => (
              <div key={index} className="col-span-12">
                <p className="text-left mb-0">
                  {item.url ? (
                    <Link to={item.url} className="text-blue-500 link-color">
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={`text-gray-500 ${
                        item.bold ? "primary-80 font-semibold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {index < items.length - 1 && <>&emsp;/</>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
