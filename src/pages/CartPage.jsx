import React from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    // Calculate the total price of all items in the cart
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <Header />
            <div className="p-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                {cart.length === 0 ? (
                    <div className="text-center">
                        <p>Your cart is empty!</p>
                        <Link to="/meals">
                            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-400 transition">
                                Go to Meal Kits
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div key={item.mealkitId} className="flex items-center justify-between my-4 p-4 border-b">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Unit Price: {item.price}</p>
                                        <p className="font-bold">Sub Total: ${item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.mealkitId)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-6 text-right">
                            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                            <Link to="/checkout">
                                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400 transition">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartPage;
