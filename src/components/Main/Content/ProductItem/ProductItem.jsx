import './ProductItem.scss';
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const ProductItem = ({id, name, image, description, price, setIndexProduct, setGetBack }) => {

    const syncBack = (id, name) => {
        setIndexProduct(id)
        setGetBack(name)
    }

    return(
        <Link to={'product_page/' + id} className="ProductItem" onClick={() => syncBack(id, name)}>
            <div className="imgField">
                <img src={image} alt="product" />
            </div>
            <div className="titleField">
                <p className="name">{name}</p>
            </div>
            <div className="descriptionField">
                <p className='description'>{description}</p>
            </div>
            <p className="price">${price}</p>
            <button className='addToCart'><BsFillCartPlusFill /></button>
        </Link>
    )
}

export { ProductItem };