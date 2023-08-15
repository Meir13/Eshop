import { useEffect, useReducer } from "react";
import axios from "axios";
import Products from "../Components/Products";
import "./HomePage.css";
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from "../Reducers/Actions";
import { homePageReducer, initialState } from "../Reducers/HomePageReducer";
import Loading from "../Components/shared/Loading";
import MessageBox from "../Components/MessageBox";
import Title from "../Components/shared/Title";

function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer(
    homePageReducer,
    initialState
  );

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: GET_REQUEST });
      try {
        const res = await axios.get("/products");
        dispatch({ type: GET_SUCCESS, payload: res.data });
      } catch (error) {
        dispatch({ type: GET_FAIL, payload: error.message });
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Title title="Home"></Title>
      <h1>Products</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger" />
        ) : (
          <Products products={products}></Products>
        )}
      </div>
    </>
  );
}
export default HomePage;
