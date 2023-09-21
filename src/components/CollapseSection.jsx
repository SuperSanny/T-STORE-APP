/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CollapseSection = ({ title, content }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };
  return (
    <>
      <div className="flex flex-col border-b-2 py-2 space-y-1">
        <Link
          className="bg-transparent border-0 flex items-center justify-between"
          onClick={toggleCollapse}
        >
          <h4 className="text-md font-medium">{title}</h4>
          {isCollapsed ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </Link>
        {!isCollapsed && (
          <div className="text-sm text-gray-500 ">
            {content.map((item, index) => (
              <p key={index} className="hover:bg-gray-100 py-1 ms-3 ps-2 w-4/5">
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CollapseSection;
