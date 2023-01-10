import { Content } from './Content/Content';
import './Main.scss';
import { Cart } from './Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { ProductPage } from './ProductPage/ProductPage';
import React from 'react';
import { NotFound } from './NotFound/NotFound';

export const MainContext = React.createContext();


const Main = ({products}) => {

  const [indexProduct, setIndexProduct] = React.useState(''); 
  const [getBack, setGetBack] = React.useState('');

  return (
    <div className="Main">
      <MainContext.Provider value={{setIndexProduct, setGetBack}} >
        <Routes>
          <Route path='/' element={<Content />}/>
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
      </MainContext.Provider>

    </div>
  );
}

export { Main };