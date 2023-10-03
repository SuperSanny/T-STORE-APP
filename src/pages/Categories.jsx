import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gatAllCategory } from "../Redux/Slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const items = [{ label: "Home", url: "/" }, { label: "Categories" }];
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.category.categoryList);
  useEffect(() => {
    dispatch(gatAllCategory())
      .then(() => {
        console.log("Category fetched successfully"); // Log success
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [dispatch]);
  const categoryData = [];
  for (let i = 0; i < categoryState.length; i++) {
    categoryData.push({
      key: i + 1,
      id: categoryState[i]._id,
      name: categoryState[i].name,
    });
  }
  return (
    <>
      <Meta title="Product" />
      <BreadCrumb items={items} />
      <section className="container mx-auto w-10/12">
        <div className="py-3">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {categoryData.map((data, index) => (
              <Link key={index} to={`${data.id}`}>
                <div className="shadow py-3 leading-6 px-3 w-80 text-sm font-semibold border-t-2 border-r-2 border-green-900 hover:border-l-2 hover:border-b-2 hover:border-t-0 hover:border-r-0">
                  {data.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
