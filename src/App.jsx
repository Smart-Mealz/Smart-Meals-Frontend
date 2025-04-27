import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
