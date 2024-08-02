import "../styles/ProductList.css";
import Item from "../components/item/Item";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../features/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product_list);
  const { productType } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    if (productType === "all") {
      setListOfProducts(productList);
    } else {
      dispatch(fetchProductsByCategory(productType))
        .then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
            setListOfProducts(res.payload);
          } else {
            alert("Something went wrong, please try again later!");
          }
        })
        .catch(() => {
          alert("Something went wrong, please try again later!");
        });
    }
  }, [productType]);

  const handlePagination = (event, page) => {
    setCurrentPage(page);
  };

  
  const itemsPerPage = 6;
  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;

  const currentRecords = listOfProducts?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(listOfProducts?.length / itemsPerPage);

  return (
    <div>
      <div className="products-container">
        {currentRecords?.map((item) => {
          if (item.category === productType || productType === "all") {
            return (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                offerPrice={item.offerPrice}
              />
            );
          }
        })}
      </div>
      <div>
        <Pagination
          onChange={handlePagination}
          count={nPages}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component="button"
              onClick={(event) => handlePagination(event, item.page)}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
}
