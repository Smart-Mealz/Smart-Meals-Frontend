import { BrowserRouter, Routes, Route } from "react-router";
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


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/meal" element={<SingleMeal />} />
          <Route path="/meals" element={<AllMeals />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
