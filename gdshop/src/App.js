import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import {privateroute} from "./routing/privateroute";
import {openroute} from "./routing/openroute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route
              path="cart"
              element={
                <>
                  <cart />
                </>
              }
            />
            <Route
              path="my-orders"
              element={
                <privateRoute>
                  <Orders />
                </privateRoute>
              }
            />

            <Route
              path="my-profile"
              element={
                <privateroute>
                  <Profile />
                </privateroute>
              }
            />

            <Route path="checkout" element={<Checkout />} />

            <Route
              path="signup"
              element={
                <openroute>
                  <Signup />
                </openroute>
              }
            />

            <Route
              path="login"
              element={
                <openroute>
                  <Login />
                </openroute>
              }
            />

            <Route path="product/:id" element={<SingleProduct />} />

            <Route
              path="wishlist"
              element={
                <>
                  <WishList />
                </>
              }
            />

            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
