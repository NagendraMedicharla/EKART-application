import "./CartItem.css";
export default function CartItem() {
  const CART_ITEMS = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      category: "men",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      category: "men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      category: "men",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
  ];
  return (
    <div className="cart-item">
      {/* <hr /> */}
      <ul className="cart-items-head">
        <li>Products</li>
        <li>Title</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
        <li>Remove</li>
      </ul>
      {/* <hr/> */}
      {CART_ITEMS.map((item) => (
        <div>
          <ul className="cart-item-list-row">
            <li>
              <img
                src={item.image}
                alt="products"
                className="cart-item-image"
              />
            </li>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li className="cart-items-maniplate-container">
              <button className="cart-dec-button">-</button>
              <p className="cart-item-count">1</p>
              <button className="cart-inc-button">+</button>
            </li>
            <li>{item.price}</li>
            <li>
              <svg
                className="delete-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </li>
          </ul>
          {/* <hr/> */}
        </div>
      ))}
    </div>
  );
}
