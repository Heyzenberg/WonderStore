import './Search.scss';
import React from 'react';

const Search = () => {

    return(
        <div className="Search">
            <p>All products</p>
            <div className='inputBox'>
                <div>
                    <input type="text" />
                    <i className="fa-solid fa-xmark clear"></i>          
                </div>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export { Search };