import { useDispatch, useSelector } from "react-redux";
import {
  addItemtoCart,
  decrementItemFromCart,
  deleteItemFromCart,
} from "../../features/cartSlice";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography } from "@mui/material";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleChangeCount = (item, type = "delete") => {
    if (type === "increment") {
      dispatch(addItemtoCart(item));
    } else if (type === "decrement") {
      dispatch(decrementItemFromCart(item));
    } else {
      dispatch(deleteItemFromCart(item));
    }
  };
  const renderCartItems = () => {
    return (
      <div className="cart-item">
        <ul className="cart-items-head">
          <li>Products</li>
          <li>Title</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
        {cartItems?.map((item) => (
          <div>
            <ul className="cart-item-list-row">
              <li>
                <img
                  src={item?.image}
                  alt="products"
                  className="cart-item-image"
                />
              </li>
              <li>{item?.name}</li>
              <li>{item?.price?.toFixed(2)}</li>
              <li className="cart-items-maniplate-container">
                <button
                  className="cart-dec-button"
                  onClick={() => handleChangeCount(item, "decrement")}
                >
                  -
                </button>
                <p className="cart-item-count">{item?.quantity}</p>
                <button
                  className="cart-inc-button"
                  onClick={() => handleChangeCount(item, "increment")}
                >
                  +
                </button>
              </li>
              <li>{(item?.price * item?.quantity)?.toFixed(2)}</li>
              <li>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <DeleteIcon
                    onClick={() => handleChangeCount(item)}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "calc(100vh - 267.5px)" }}
      >
        <Typography>Oops! Your cart is empty.</Typography>
      </Box>
    );
  };

  return <>{cartItems?.length > 0 ? renderCartItems() : renderContent()}</>;
}
