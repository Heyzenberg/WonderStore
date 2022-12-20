import './App.scss';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';



const App = () => {

  const [ loading, setLoading ] = React.useState(true);

  const [filterIndex, setFilterIndex] = React.useState(0);
  const [sortIndex, setSortIndex] = React.useState({localName: 'Name', globalName: 'name'});

  const [ products, setProducts ] = React.useState([])
  React.useEffect(() => {
    setLoading(true)
      fetch(`https://639ddeeb3542a2613051d263.mockapi.io/products?${
        filterIndex > 0 ? "categoryId=" + filterIndex : ''
      }&sortBy=${sortIndex.globalName}&order=asc`).then((prod) => {
        return prod.json();
      }).then((json) => {
        setProducts(json)
        setLoading(false)
      })
  }, [filterIndex, sortIndex])

  console.log(filterIndex, sortIndex)

  return (
    <div className="App">
      <Header />
      <Main products={products}
            loading={loading}
            filterIndex={filterIndex}
            setFilterIndex={setFilterIndex}
            sortIndex={sortIndex}
            setSortIndex={setSortIndex} />
      <Footer />
    </div>
  );
}

export { App };
