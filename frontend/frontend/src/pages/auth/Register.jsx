import { useState } from "react";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      console.log(result);

      navigate("/login"); 
    } catch (error) {
      console.log("Register failed", error.message);
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-4 mx-auto bg-gray-200 rounded-sm shadow-sm grid grid-cols-1 gap-y-3"
      >
        <h1 className="text-xl font-semibold">Register</h1>
        <label className="flex flex-col">
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            className="border border-blue-800 rounded-sm py-1.5 px-3 outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            className="border border-blue-800 rounded-sm py-1.5 px-3 outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="border border-blue-800 rounded-sm py-1.5 px-3 outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="border border-blue-800 rounded-sm py-1.5 px-3 outline-none"
          />
        </label>
        <button
          className="bg-blue-800 rounded-md text-white hover:text-blue-800 px-6 py-2 hover:bg-white hover:font-semibold hover:border rounded-sm"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
