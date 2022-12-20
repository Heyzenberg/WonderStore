import './Product.scss';
import { Link } from 'react-router-dom';
import { ProductSkeleton } from './ProductSkeleton/ProductSkeleton';
import { ProductItems } from './ProductItems/ProductItems';


const Product = ({id, name, image, description, price, setIndexProduct, setGetBack }) => {

    const syncBack = (id, name) => {
        setIndexProduct(id)
        setGetBack(name)
    }

    return(
        <Link to={name} className="Product" onClick={() => syncBack(id, name)}>
            <ProductSkeleton />
            <ProductItems image={image}
                                    name={name}
                                    description={description}
                                    price={price} />
        </Link>
    )
}

export { Product };