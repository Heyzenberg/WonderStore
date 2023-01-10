import './Content.scss';
import { NavPanel } from './NavPanel/NavPanel';
import { ProductItem } from './ProductItem/ProductItem';
import { Search } from './Search/Search';
import { ProductSkeleton } from './ProductItem/ProductSkeleton/ProductSkeleton';
import { useContext } from 'react';
import { AppContext } from '../../../App';

const Content = () => {

    const {products, loading, searchValue} = useContext(AppContext);

    const skeletons = [...new Array(8)].map((_, index) => <ProductSkeleton key={index} />)
    const allProducts = products.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase())).map(
                                        (item) => <ProductItem key={item.id}
                                                            id={item.id}
                                                            name={item.name}
                                                            image={item.image}
                                                            description={item.description}
                                                            price={item.price} />)

    return(
        <div className="Content">
            <NavPanel />
            <div className="contantWrapper">
                <Search />
                <div className="wrapper">
                    {loading ? skeletons : allProducts}
                </div>
            </div>
        </div>
    )
}

export { Content };
