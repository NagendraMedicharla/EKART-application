import { addtoWishList } from "../../features/wishlistSlice";
import "./DisplayProduct.css";
import { useDispatch } from "react-redux";
import cartSlice, { addItemtoCart } from "../../features/cartSlice";
import { user } from "../../features/loginSlice";
import cart from "../../features/cartSlice";
import { useState } from "react";
import CustomSnackbar from "../snackbar/Snackbar";

export default function DisplayProduct(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  // let snackbarMessage = ""

  const { product } = props;
  const { id, price, category, title, offerPrice, image } = product || {};

  const handleClose = () => {
    setOpen(false);
  };

  const addItem = (type) => {
    const payload = {
      id,
      price,
      category,
      offerPrice,
      title,
      image,
    };
    if (type === "cart") {
      dispatch(addItemtoCart(payload));
    } else {
      dispatch(addtoWishList(payload));
    }

    setSnackbarMessage("Item successfully added to cart!");
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  return (
    <div className="product-total-container">
      <div className="product-display-image">
        <img
          className="product-image"
          src={product?.image}
          alt="productImage"
        />
      </div>
      <div className="product-total-details">
        <h1>{product?.title}</h1>
        <div className="product-prices">
          <div className="product-old-price">Rs.{product?.price}</div>
          <div className="product-new-price">Rs.{product?.offerPrice}</div>
        </div>
        <div className="product-description">{product?.description}</div>
        <div className="product-sizes-container">
          <h1>Select Size</h1>
          <ul className="product-sizes">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </div>
        <div className="display-product-btn-container">
          <button onClick={() => addItem("cart")} className="add-to-cart-btn">
            Add to cart
          </button>
          <button
            onClick={() => addItem("wishlist")}
            className="add-to-cart-btn add-to-wishlist-btn"
          >
            Add to wishlist
          </button>
        </div>
      </div>
      {open && (
        <CustomSnackbar
          open={open}
          onClose={handleClose}
          message={snackbarMessage}
        />
      )}
    </div>
  );
}
