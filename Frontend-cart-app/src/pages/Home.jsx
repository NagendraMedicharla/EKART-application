// import { useDispatch} from "react-redux";
// import { useEffect } from "react";
import HomeCategory from "../components/homeItems/HomeCategory";
import HomeCourasal from "../components/homeItems/HomeCourosal";
// import { fetchProducts } from "../features/productSlice";
import { useSelector } from "react-redux";

export default function Home() {
  const jwtToken = useSelector((state) => state.login.jwt_token);
  const email = useSelector((state) => state.login.email);
  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(fetchProducts());
  // },[dispatch])

  localStorage.setItem("token", jwtToken);
  localStorage.setItem("email", email);

  console.log("Home component rendered");
  return (
    <div>
      <HomeCourasal />
      <HomeCategory />
    </div>
  );
}
