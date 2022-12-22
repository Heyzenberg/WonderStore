import './Search.scss';

const Search = ({setSearchValue, searchValue}) => {

    const trackChanges = (e) => {
        setSearchValue(e)
    }

    return(
        <div className="Search">
            <p>All products</p>
            <div className='inputContainer'>
                <div className='inputBox'>
                    <input type="text" maxLength={45} placeholder='Enter name product...' onChange={(e) => trackChanges(e.target.value)} value={searchValue} />
                    {searchValue && <i className="fa-solid fa-xmark clear" onClick={() => setSearchValue('')}></i>}         
                </div>
                <div className="iconBox">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}

export { Search };