import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayProduct from "../components/displayProduct/DisplayProduct";

export default function ProductDetails(){
    let {productId} = useParams();
    const productList = useSelector((state)=>state.product.product_list)

    const product = productList.find(item => item.id === Number(productId))
   
    return(
        <div>
            <DisplayProduct product={product}/>
        </div>
    )
}