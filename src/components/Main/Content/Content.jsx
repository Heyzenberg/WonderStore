import './Content.scss';
import { NavPanel } from './NavPanel/NavPanel';
import { ProductItem } from './ProductItem/ProductItem';
import { Search } from './Search/Search';
import { ProductSkeleton } from './ProductItem/ProductSkeleton/ProductSkeleton';

const Content = ({products, setIndexProduct, setGetBack, loading, filterIndex, setFilterIndex, sortIndex, setSortIndex}) => {
    return(
        <div className="Content">
            <NavPanel filterIndex={filterIndex}
                    setFilterIndex={setFilterIndex}
                    sortIndex={sortIndex}
                    setSortIndex={setSortIndex} />
            <div className="contantWrapper">
                <Search />
                <div className="wrapper">
                    {loading ? [...new Array(8)].map((_, index) => <ProductSkeleton key={index} />)
                            :
                                products.map((item) => <ProductItem key={item.id}
                                                                    id={item.id}
                                                                    name={item.name}
                                                                    image={item.image}
                                                                    description={item.description}
                                                                    price={item.price}
                                                                    setIndexProduct={setIndexProduct}
                                                                    setGetBack={setGetBack} />)}
                </div>
            </div>
        </div>
    )
}

export { Content };
