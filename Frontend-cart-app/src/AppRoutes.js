import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Registration from "./pages/Registration";
import Footer from "./components/footer/footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products/:productType" element={<ProductList />} />
        <Route path="/productDetails" element={<ProductDetails />}>
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
