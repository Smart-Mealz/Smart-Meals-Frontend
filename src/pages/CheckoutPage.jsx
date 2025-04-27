import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // For showing toast notifications
import Header from '../components/Header';

const CheckoutPage = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        phone: '',
        email: '',
        region: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Form validation states
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        phone: '',
        email: '',
        region: '',
    });

    const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };

        // First Name Validation
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
            valid = false;
        }

        // Last Name Validation
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
            valid = false;
        }

        // Country Validation
        if (!formData.country) {
            newErrors.country = 'Country is required';
            valid = false;
        }

        // Street Address Validation
        if (!formData.streetAddress) {
            newErrors.streetAddress = 'Street address is required';
            valid = false;
        }

        // Phone Validation
        const phoneRegex = /^[0-9]{10}$/; // Basic phone number validation
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (10 digits)';
            valid = false;
        }

        // Email Validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        // Region Validation
        if (!formData.region) {
            newErrors.region = 'Region is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!validateForm()) {
            toast.error('Please fill in all the required fields correctly!');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                'https://smart-meals-backend.onrender.com/api/v1/orders',
                {
                    ...formData,
                    cartSubtotal: cartTotal,
                }
            );
            const { message, finalTotal, orderDetails } = response.data;

            toast.success(message); // Show success message via toast
            navigate(`/order/${orderDetails.id}`);
        } catch (err) {
            toast.error('There was an error placing your order. Please try again.');
            setLoading(false);
        }
    };

    return (

        <>
            <Header />
            <div className="p-6">
                <h2 className="text-2xl font-bold">Checkout</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Form for collecting user data */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Billing & Shipping Info</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>

                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                                    <input
                                        type="text"
                                        name="region"
                                        placeholder="Region"
                                        value={formData.region}
                                        onChange={handleInputChange}
                                        required
                                        className="border p-2 rounded w-full"
                                    />
                                    {errors.region && <p className="text-red-500 text-sm">{errors.region}</p>}
                                </div>

                                <input
                                    type="text"
                                    name="streetAddress"
                                    placeholder="Street Address"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    required
                                    className="border p-2 rounded w-full"
                                />
                                {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="border p-2 rounded w-full"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="border p-2 rounded w-full"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            {/* Order Summary */}
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-2">Order Summary</h4>
                                <div className="space-y-2">
                                    {cart.map((item) => (
                                        <div key={item.mealkitId} className="flex justify-between">
                                            <p>{item.title} x {item.quantity}</p>
                                            <p>${item.price * item.quantity}</p>
                                        </div>
                                    ))}
                                    <div className="flex justify-between font-semibold">
                                        <p>Total</p>
                                        <p>${cartTotal}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    type="submit"
                                    className={`bg-orange-500 text-white px-6 py-2 rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Place Order'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Order Details */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
                        <div className="space-y-2">
                            <p><strong>Total items: </strong>{cart.length}</p>
                            <p><strong>Subtotal: </strong>${cartTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
