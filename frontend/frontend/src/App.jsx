import { Routes, Route } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
