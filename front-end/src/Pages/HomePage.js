import { useEffect, useState } from "react";
import axios from "axios";
import Products from "../Components/Products";
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = (await axios.get("/products")).data;
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        <Products products={products}></Products>
      </div>
    </>
  );
}
export default HomePage;
