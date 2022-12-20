import './App.scss';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react';

const App = () => {

  const [ loading, setLoading ] = React.useState(true);

  const [ products, setProducts ] = React.useState([])
  React.useEffect(() => {
    fetch('https://639ddeeb3542a2613051d263.mockapi.io/products').then((prod) => {
      return prod.json();
    }).then((json) => {
      setProducts(json)
      setLoading(!loading)
    })
  }, [])


  // const [showCartWindow, setShowCartWindow] = useState(false);
  // const showCart = () => {
  //   setShowCartWindow(!showCartWindow)
  // }

  return (
    <div className="App">
      <Header />
      <Main products={products}
            loading={loading} />
      <Footer />
    </div>
  );
}

export { App };
