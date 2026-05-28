import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import "./styles/global.scss";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import  Checkout  from "./pages/Checkout/Checkout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import Admin from "./pages/Admin/AdminDashboard";

import { AuthProvider } from "./context/AuthContext";

import Register from "./pages/Register/Register";
import { CartProvider } from "./context/CartContext";


function App () {
  return (
    <AuthProvider>
      <CartProvider>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
    </CartProvider>
    </AuthProvider>
  )
}

export default App;
