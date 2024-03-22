import { addItemsToWishList } from '../../features/wishList';
import './DisplayProduct.css';
import { useDispatch } from 'react-redux';

export default function DisplayProduct(props){
    const dispatch = useDispatch()
    const {product} = props
    let newProduct
    // const email = localStorage.getItem('email')
    const addToWishList = ()=>{
        // newProduct = {
        //     category: product.category,
        //     description: product.description,
        //     image: product.image,
        //     offer_price: Number(product.offer_price),
        //     price: Number(product.price),
        //     title: product.title,
        //     email: email,
        //     product_id: Number(product.id)

        // }
        addItemsToWishList(newProduct)
    }

    const addToCart = ()=>{
        dispatch(cartAction.addItemtoCart({product}))
    }
    
    return(
        <div className="product-total-container">
            <div className="product-display-image">
                <img className="product-image" src={product?.image} alt="productImage" />
            </div>
            <div className='product-total-details'>
                <h1>{product?.title}</h1>
                <div className='product-prices'>
                    <div className='product-old-price'>Rs.{product?.price*2}</div>
                    <div className='product-new-price'>Rs.{product?.price/2}</div>
                </div>
                <div className='product-description'>{product?.description}</div>
                <div className='product-sizes-container'>
                    <h1>Select Size</h1>
                    <ul className='product-sizes'>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                        <li>XXL</li>
                    </ul>
                </div>
                <div className='display-product-btn-container'>
                    <button className='add-to-cart-btn'>Add to cart</button>
                    <button onClick={(product)=>addToWishList(product)} className='add-to-cart-btn add-to-wishlist-btn'>Add to wishlist</button>
                </div>
            </div>
        </div>
    )
}