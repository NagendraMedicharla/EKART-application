import "./WishListItem.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { deleteItemFromWishList } from "../../features/wishlistSlice";

export default function WishListItem() {
  const wishListItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const deleteItem = (payload) => {
    dispatch(deleteItemFromWishList(payload));
  };
  return (
    <div className="wishlist-container">
      {wishListItems?.map((item) => (
        <div className="wishlist-item">
          <Link to={`/productDetails/${item?.id}`}>
            <img src={item?.image} alt={item.name} />
          </Link>
          <p>{item?.name}</p>
          <div className="wishlist-item-price">
            <div className="wishlist-item-price-original">Rs.{item?.price}</div>
            <div className="wishlist-item-price-offer">Rs.{item?.price}</div>
          </div>

          <Button onClick={() => deleteItem(item)} variant="contained">
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}
