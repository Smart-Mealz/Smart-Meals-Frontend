import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { useNavigate } from "react-router";
import { fetchMealkits } from "../api/api"; // Importing fetchMealkits from api.js

const MealKits = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: null,
    hasPrevPage: null,
  });

  // Function to fetch meals and handle pagination
  const getMeals = async (page = 1) => {
    try {
      const response = await fetchMealkits(page); // Fetch meals based on page number
      setMeals(response.mealkits); // Set meal kits
      setPagination({
        currentPage: response.pagination.currentPage,
        totalPages: response.pagination.totalPages,
        hasNextPage: response.pagination.hasNextPage,
        hasPrevPage: response.pagination.hasPrevPage,
      });
    } catch (err) {
      setError("Error fetching meal kits. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle page navigation (Next / Previous)
  const handlePageChange = (page) => {
    setLoading(true);
    getMeals(page); // Fetch meals for the selected page
  };

  // Effect to load meals initially
  useEffect(() => {
    getMeals(); // Fetch meals for the first page
  }, []);

  return (
    <section className="px-4 py-8 bg-gray-50">
      {loading ? (
        <p>Loading...</p> // Optionally replace with a spinner for better UX
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.mealkitId} {...meal} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="text-center mt-4">
            <p>Page {pagination.currentPage} of {pagination.totalPages}</p>
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrevPage}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition disabled:opacity-50"
            >
              Previous Page
            </button>
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNextPage}
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition disabled:opacity-50"
            >
              Next Page
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default MealKits;
