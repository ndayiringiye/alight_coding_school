import { useState } from "react";

const Login = () => {
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
    console.log(formData);
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="w-1/2 p-4 mx-auto bg-gray-100 rounded-sm shadow-sm flex flex-col gap-y-3">
        <h1 className="text-xl font-semibold">Login</h1>
        <label className="flex flex-col">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="border border-blue-800 rounded-sm px-3 py-1.5 outline-none"
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
            className="border border-blue-800 rounded-sm px-3 py-1.5 outline-none"
          />
        </label>
        <button className="px-6 py-2 bg-blue-800 text-white hover:border hover:border-blue-800 hover:bg-white rounded-sm  hover:text-blue-800">Register</button>
      </form>
    </div>
  );
};

export default Login;