import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import NavBar from './components/navbar/NavBar';
import ProductDetails from './pages/ProductDetails'
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ProductList from './pages/ProductList'
import Registration from './pages/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/productSlice';
import Footer from './components/footer/footer';

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/products/:productType' element={<ProductList/>} />
        <Route path='/productDetails' element={<ProductDetails/>}>
          <Route path=':productId' element={<ProductDetails/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
  
}

export default App;


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<RootLayout/>,
//     errorElement:<ErrorPage/>,
//     children:[
//       {path:'/', element:<HomePage/>},
//       {path:'/products', element:<ProductsPage/>},
//       {path:'/products/:productId', element:<ProductDetailPage/>}
//     ]
//     }
  
  
// ])

// function App() {
//   return <RouterProvider router={router}/>
// }

// export default App;