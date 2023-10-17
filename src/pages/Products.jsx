import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import CollapseSection from "../components/CollapseSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  gatAllProducts,
  gatAllProductsWithCategory,
} from "../Redux/Slices/ProductSlice";
import { useParams } from "react-router-dom";
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
  let params = useParams();
  // const navigate = useNavigate();
  const id = params.id;
  // const [products, setProducts] = useState([]);
  // const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.productList);
  useEffect(() => {
    dispatch(gatAllProducts())
      .then(() => {
        // console.log("Products fetched successfully"); // Log success
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    const categoryId = id;
    dispatch(gatAllProductsWithCategory(categoryId))
      .then(() => {
        // console.log("Products With Category fetched successfully"); // Log success
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch, id]);
  const productData = [];
  for (let i = 0; i < productState.length; i++) {
    productData.push({
      key: i + 1,
      id: productState[i]._id,
      title: productState[i].name,
      image: productState[i].image[0],
      brand: "T-STORE",
      description: productState[i].description,
      color: productState[i].color,
      price: `${productState[i].price}`,
      original_price: productState[i].original_price,
      discount: productState[i].discount,
      size: productState[i].size,
    });
  }
  // console.log(productData);
  const items = [
    { label: "Home", url: "/" },
    { label: "Product", bold: true },
  ];
  return (
    <>
      <Meta title="Product" />
      <BreadCrumb items={items} />
      <div className="container mx-auto px-5 py-5">
        <div className="flex gap-3 text-2xl mb-3 mt-3">
          <h1 className="font-bold">Printed T Shirts for Men</h1>
          <h1 className="text-gray-400">({productData.length})</h1>
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
                defaultValue="popular"
                className="block py-0 px-0 w-50 text-sm text-gray-900 bg-transparent border-b-2 focus:outline-none"
              >
                <option value="popular">Popular</option>
                <option value="new">New</option>
                <option value="p-lh">Price: Low To High</option>
                <option value="p-hl">Price: High TO Low</option>
              </select>
            </div>
            <div className="mt-5 flex flex-wrap justify-around gap-5">
              {productState ? (
                productData.map((product) => (
                  <ProductCard
                    key={product.key}
                    id={product.id}
                    image={product.image}
                    slug={product.slug}
                    title={product.title}
                    brand={product.brand}
                    description={product.description}
                    price={product.price}
                    original_price={product.original_price}
                    discount={product.discount}
                    color={product.color}
                  />
                ))
              ) : (
                <>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
