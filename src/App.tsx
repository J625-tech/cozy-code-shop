import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import "./styles/global.scss";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import  Checkout  from "./pages/Checkout/Checkout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Admin from "./pages/Admin/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";

function App () {
  return (
    <AuthProvider>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </>
    </AuthProvider>
  )
}

export default App;
