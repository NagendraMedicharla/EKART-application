import './HomeCategory.css'
import { Link } from "react-router-dom"

export default function HomeCategory(){
    return(
        <div className="categories-container">
            <Link to='/products/electronics' className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683522149/electronics_yjk1bl.webp" alt="/" className='w-75' />
                    <p className='card-names' >   Electronics </p>
                </div>
            </Link>

            <Link to='/products/men' className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1684305671/fashion_mens1.2_vjs9nm.png" alt="/" className='w-75 p-1' />
                    <p className='card-names'>Men's Wear</p>
                </div>
            </Link>
            <Link to='/products/women' className="link">
            <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683561941/kurtaset1_suhzrp.png" alt="/" className="w-100" />
                    <p className='card-names'> Womens </p>
                </div>
            </Link>

            <Link to='/products/jewelery' className="link">
                <div className='card-info'>
                    <img src="https://res.cloudinary.com/dx7zsxo2g/image/upload/v1683538795/jewellery_axx0pv.png" alt="/" className='w-75' />
                    <p className='card-names img'>  Jewellery </p>
                </div>
            </Link>
        </div>
    )
}