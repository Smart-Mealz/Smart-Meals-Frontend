import React from "react";
import Mealkit from "../components/Mealkit";
import jollof from "../assets/images/jollof.png";
import stirfry from "../assets/images/stirfry.png"
import mealkit4 from "../assets/images/mealkit4.png";
import salad from "../assets/images/salad.png";
import green3 from "../assets/images/green3.png";
import kit from "../assets/images/kit.png";
import mealkit from "../assets/images/mealkit.png";
import { useNavigate } from "react-router";



const Mealskit = () => {
  const navigate = useNavigate();
  const meals = [
    {
      image: jollof,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: stirfry,
      tag: "CRAFT",
      title: "Balsamic Green Salad with Mashed Potatoes",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: mealkit4,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: salad,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: green3,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: kit,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: mealkit,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    {
      image: jollof,
      tag: "CRAFT",
      title: "Jollof Rice With Pasley Grilled Chicken",
      description: "with Spicy Mayo, Peanuts & Cucumber-Cabb",
      time: "15-MINS",
    },

    
  ];

  const handleMoreMeals = () => {
    navigate("/all-meals");
  };
  
  return (
    <section className="px-4 py-8 bg-gray-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal, idx) => (
        <Mealkit key={idx} {...meal} />
      ))}
    </div>
    <div className="text-center mt-10">
      <button 
      onClick={handleMoreMeals}
      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition">
        Swipe for more meal kits
      </button>
    </div>
  </section>
  )
  

};

export default Mealskit;
