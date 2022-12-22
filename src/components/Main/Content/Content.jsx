import './Content.scss';
import { useState } from 'react';
import { NavPanel } from './NavPanel/NavPanel';
import { ProductItem } from './ProductItem/ProductItem';
import { Search } from './Search/Search';
import { ProductSkeleton } from './ProductItem/ProductSkeleton/ProductSkeleton';

const Content = ({products, setIndexProduct, setGetBack, loading, filterIndex, setFilterIndex, sortIndex, setSortIndex}) => {

    const [searchValue, setSearchValue] = useState('');

    const skeletons = [...new Array(8)].map((_, index) => <ProductSkeleton key={index} />)
    const allProducts = products.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => <ProductItem key={item.id}
                                                        id={item.id}
                                                        name={item.name}
                                                        image={item.image}
                                                        description={item.description}
                                                        price={item.price}
                                                        setIndexProduct={setIndexProduct}
                                                        setGetBack={setGetBack} />)


    return(
        <div className="Content">
            <NavPanel filterIndex={filterIndex}
                    setFilterIndex={setFilterIndex}
                    sortIndex={sortIndex}
                    setSortIndex={setSortIndex} />
            <div className="contantWrapper">
                <Search setSearchValue={setSearchValue}
                        searchValue={searchValue} />
                <div className="wrapper">
                    {loading ? skeletons : allProducts}
                </div>
            </div>
        </div>
    )
}

export { Content };
