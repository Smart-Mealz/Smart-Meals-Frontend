import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SingleMeal from "./pages/SingleMeal";
import AllMeals from "./pages/AllMeals";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/meal" element={<SingleMeal />} />
          <Route path="/meals" element={<AllMeals />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cart-page" element={<CartPage/>} />
          <Route path="checkout" element={<Checkout/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
