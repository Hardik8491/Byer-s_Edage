"use client"
import React, { useState } from 'react';

const ECommerceProfileForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phoneNumber: '',

    // Shipping Information
    shippingAddress: '',
    city: '',
    zipCode: '',

    // Billing Information
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',

    // Product Preferences
    favoriteCategory: '',
    preferredBrand: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="max-w-screen-md mx-auto p-4 bg-gray-300 border-2 border-blue-500 rounded" onSubmit={handleSubmit}>
      {/* Personal Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Personal Information</h2>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 mb-2 border-2 border-gray-200 rounded" />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-2 border-2 border-gray-200 rounded" />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 mb-4 border-2 border-gray-200 rounded" />
        </label>
      </div>

      {/* Shipping Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 mb-2 border-2 border-gray-200 rounded" />
        </label>
        {/* Add shipping information fields here */}
      </div>

      {/* Billing Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Billing Information</h2>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 mb-2 border-2 border-gray-200 rounded" />
        </label>
        {/* Add billing information fields here */}
      </div>

      {/* Product Preferences */}
     

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
        Save Profile
      </button>
    </form>
  );
};

export default ECommerceProfileForm;
