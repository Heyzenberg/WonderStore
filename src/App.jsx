import './App.scss';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useSelector } from 'react-redux';

export const AppContext = React.createContext();


const App = () => {

  const [ loading, setLoading ] = React.useState(true);

  const filterIndex = useSelector((state) => state.filter.filterID);
  const sortIndex = useSelector((state) => state.filter.sortName.globalName);

  const [ products, setProducts ] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    setLoading(true)

    const categories = filterIndex > 0 ? "categoryId=" + filterIndex : '';
    const sortBy = sortIndex.replace('-', '');
    const sortReverse = sortIndex.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

      fetch(`https://639ddeeb3542a2613051d263.mockapi.io/products?${categories}&sortBy=${sortBy}&order=${sortReverse}${search}`)
      .then((prod) => {
        return prod.json();
      }).then((json) => {
        setProducts(json)
        setLoading(false)
      })
  }, [filterIndex, sortIndex, searchValue]);

  return (
    <div className="App">
      <AppContext.Provider value={{products,
                                    loading,
                                    sortIndex,
                                    searchValue,
                                    setSearchValue}} >
        <Header />
        <Main products={products} />
        <Footer />        
      </AppContext.Provider>
    </div>
  );
}

export { App };