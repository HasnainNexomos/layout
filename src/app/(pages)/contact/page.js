"use client";
import React, { useState } from "react";

const UserRegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkPasswordStrength = (password) => {
    if (password.length > 8) {
      setPasswordStrength("Strong");
    } else if (password.length > 4) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!email) newErrors.email = "E-mail is required";
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-[6%] bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Registration Form</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">First Name *</label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={validateFields}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Last Name *</label>
          <input
            type="text"
            placeholder="Smith"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={validateFields}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">E-mail *</label>
          <input
            type="email"
            placeholder="youremail@domain.com"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateFields}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Username *</label>
          <input
            type="text"
            placeholder="john"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateFields}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Password *</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={password}
            onChange={handlePasswordChange}
            onBlur={validateFields}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Confirm Password *</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={validateFields}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div
          className={`py-2 text-center rounded-md ${
            passwordStrength === "Strong"
              ? "bg-green-300"
              : passwordStrength === "Medium"
              ? "bg-yellow-300"
              : "bg-red-300"
          }`}
        >
          {passwordStrength}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};
export default UserRegistrationForm;