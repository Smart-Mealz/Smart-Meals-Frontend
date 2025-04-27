import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MealPlan from "./pages/MealPlan";
import SingleMeal from "./pages/SingleMeal";
import AllMeals from "./pages/AllMeals";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CartPage from "./pages/CartPage"; 
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/meal-plan" element={<MealPlan />} />
            <Route path="/meal" element={<SingleMeal />} />
            <Route path="/meals" element={<AllMeals />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/checkout" element={<CheckoutPage />} /> 

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
