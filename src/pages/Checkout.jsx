import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Fake cart items (replace with real cart later)
  const cartItems = [
    { id: 1, name: "Chicken Stir Fry", quantity: 2, price: 15.99 },
    { id: 2, name: "Vegetarian Pasta", quantity: 1, price: 12.99 },
  ];

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log("Order Placed!", { address, paymentMethod });
    // Here you would redirect to a success page or call an API
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.quantity * item.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-semibold text-lg">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleOrderSubmit} className="space-y-6">
          {/* Shipping Address */}
          <div>
            <label className="block mb-2 font-medium">Shipping Address</label>
            <textarea
              className="w-full border p-2 rounded-md"
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-2 font-medium">Payment Method</label>
            <select
              className="w-full border p-2 rounded-md"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          {/* Confirm Order Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
          >
            Confirm Order
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
