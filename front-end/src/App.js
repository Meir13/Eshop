import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./Pages/CartPage";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import PaymentPage from "./Pages/PaymentPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <ToastContainer position="bottom-center" limit={1} />

          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
