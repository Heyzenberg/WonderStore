import './ProductItem.scss';
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const ProductItem = ({id, name, image, description, price, setIndexProduct, setGetBack }) => {

    const syncBack = (id, name) => {
        setIndexProduct(id)
        setGetBack(name)
    }

    return(
        <div className="ProductItem">
            <Link to={'product_page/' + id} className="ProductItemBox" onClick={() => syncBack(id, name)}>
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
            </Link>
            <button className='addToCart'><BsFillCartPlusFill /></button>
        </div>

    )
}

export { ProductItem };