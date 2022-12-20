import { Content } from './Content/Content';
import './Main.scss';
import { Cart } from './Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './ProductPage/ProductPage';
import { useState } from 'react';
import { NotFound } from './NotFound/NotFound';

const Main = ({products, showCartWindow, loading}) => {

  const [indexProduct, setIndexProduct] = useState('');
  const [getBack, setGetBack] = useState('');

  return (
    <div className="Main">
      <Routes>
        <Route path='/' element={<Content products={products}
                                          setIndexProduct={setIndexProduct}
                                          setGetBack={setGetBack}
                                          loading={loading} />} />
        <Route path={'product_page/' + indexProduct} element={products.map((item, index) => index === indexProduct
                                                                                    && 
                                                                                <ProductPage key={item.id}
                                                                                          name={item.name}
                                                                                          image={item.image}
                                                                                          description={item.description}
                                                                                          price={item.price}
                                                                                          fullDescription={item.fullDescription}
                                                                                          characteristics={item.characteristics} />)} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export { Main };