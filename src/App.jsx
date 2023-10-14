import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
// import MainRoutes from "./routes/MainRoutes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={AppRoutes} />
      {/* <MainRoutes /> */}
    </>
  );
}

export default App;
