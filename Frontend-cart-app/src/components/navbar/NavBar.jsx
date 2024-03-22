import "./NavBar.css";
import logo from "../assets/cart_image2.jpg";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/productSlice";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="icon" />
        <p>E-Cart</p>
      </div>
      <div className="nav-search">
        <input
          type="search"
          name="search-product"
          id="search"
          placeholder="Quick Search"
        />
      </div>
      <ul className="nav-menu">
        {/* <Link to="/" style={{textDecoration: 'none'}}><li>Home</li></Link>
                <li><Link style={{textDecoration: 'none'}}><li>Category</li></Link></li>
                <li><Link to="/wishlist" style={{textDecoration: 'none'}}><li>Wishlist</li></Link></li>
                <li><Link to="/cart" style={{textDecoration: 'none'}}><li>Cart</li></Link></li> */}
        <li >
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="nav-li-items">
                <HomeIcon />
                <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          {/* <Link style={{textDecoration: 'none'}}>Category</Link>
                    <div className='sub-nav-menu'>
                        <ul>
                            <Link to="/products/all">All Products</Link>
                            <Link to='/products/men'><li>Men</li></Link>
                            <Link to='/products/women'><li>Women</li></Link>
                            <Link to='/products/jewelery'><li>jewelery</li></Link>
                            <Link to='/products/electronics'><li>Electronics</li></Link>
                        </ul>
                    </div> */}
          <NavDropdown title={<span>Categories</span>} id="basic-nav-dropdown">
            <ul>
                <Link to="/products/all" style={{textDecoration: 'none'}}>All Products</Link>
                <Link to='/products/men' style={{textDecoration: 'none'}}><li>Men</li></Link>
                <Link to='/products/women' style={{textDecoration: 'none'}}><li>Women</li></Link>
                <Link to='/products/jewelery' style={{textDecoration: 'none'}}><li>jewelery</li></Link>
                <Link to='/products/electronics' style={{textDecoration: 'none'}}><li>Electronics</li></Link>
            </ul>
          </NavDropdown>
        </li>
        <li>
          <Link to="/wishlist" style={{ textDecoration: "none" }}>
            <li>
              {/* Wishlist */}
              <FavoriteIcon />
            </li>
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="nav-li-items">
              <Badge color="secondary" badgeContent={4}>
                <ShoppingCartIcon />
              </Badge>
            </div>
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
