import "./NavBar.css";
import logo from "../assets/cart_image2.jpg";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/productSlice";
import { NavDropdown } from "react-bootstrap";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { logout } from "../../features/loginSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { isLoggedIn } = useSelector((state) => state.login);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderMenuLogin = () => {
    return (
      <>
        {isLoggedIn ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ mt: "50px" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
              <MenuItem >Profile</MenuItem>
            </Menu>
          </Box>
        ) : (
          <div className="nav-login-cart">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </>
    );
  };

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
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="nav-li-items">
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <NavDropdown title={<span>Categories</span>} id="basic-nav-dropdown">
            <ul>
              <Link to="/products/all" className="textDecorationNone">
                All Products
              </Link>
              <Link to="/products/men" className="textDecorationNone">
                <li>Men</li>
              </Link>
              <Link to="/products/women" className="textDecorationNone">
                <li>Women</li>
              </Link>
              <Link to="/products/jewelery" className="textDecorationNone">
                <li>jewelery</li>
              </Link>
              <Link to="/products/electronics" className="textDecorationNone">
                <li>Electronics</li>
              </Link>
            </ul>
          </NavDropdown>
        </li>
        <li>
          <Link to="/wishlist" className="textDecorationNone">
            <li>
              <FavoriteIcon />
            </li>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="textDecorationNone">
            <div className="nav-li-items">
              <Badge color="secondary" badgeContent={cartItems?.length}>
                <ShoppingCartIcon />
              </Badge>
            </div>
          </Link>
        </li>
      </ul>
      {renderMenuLogin()}
    </div>
  );
}
