import { Link } from 'react-router-dom';
import './Item.css';
export default function Item({id, image, title, price, rating}){
    return(
        <div className='item'>
            <Link to={`/productDetails/${id}`}><img src={image} alt={title}/></Link>
            <p>{title}</p>
            <div className='item-price'>
                <div className='item-price-original'>
                    Rs.{price}
                </div>
                <div className='item-price-offer'>
                    Rs.{price}
                </div>
            </div>
        </div>
    )
}