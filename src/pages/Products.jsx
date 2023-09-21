import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import CollapseSection from "../components/CollapseSection";
const collapseData = [
  {
    title: "Gender",
    content: ["Men", "Women", "Unisex"],
  },
  {
    title: "Sizes",
    content: ["XS", "S", "M", "L", "XL"],
  },
  {
    title: "Colors",
    content: ["Red", "Blue", "Green"],
  },
];
const Products = () => {
  return (
    <>
      <Meta title="Product" />
      <BreadCrumb title="Products" />
      <div className="container">
        <div className="flex gap-3 text-2xl mb-3 mt-3">
          <h1 className="font-bold">Printed T Shirts for Men</h1>
          <h1 className="text-gray-400">(1825)</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div>
              <h5 className="font-semibold text-xs text-gray-400">FILTERS</h5>
            </div>
            <div className="mt-5">
              {collapseData.map((data, index) => (
                <CollapseSection
                  key={index}
                  title={data.title}
                  content={data.content}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex py-2 gap-3">
              <h5 className="font-semibold text-xs text-gray-400">SORT BY: </h5>
              <select
                id="underline_select"
                className="block py-0 px-0 w-50 text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none"
              >
                <option selected value="popular">
                  Popular
                </option>
                <option value="new">New</option>
                <option value="p-lh">Price: Low To High</option>
                <option value="p-hl">Price: High TO Low</option>
              </select>
            </div>
            <div className="mt-5 flex flex-wrap gap-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
