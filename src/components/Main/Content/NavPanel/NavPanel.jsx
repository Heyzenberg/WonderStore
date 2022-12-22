import './NavPanel.scss';
import { useState } from 'react';

const NavPanel = ({filterIndex, setFilterIndex, sortIndex, setSortIndex}) => {

    const filterData = ['All', 'Game consoles', 'Smartphones', 'TV', 'Notebooks'];
    const sortData = [
                        {localName: 'Popularity', globalName: '-rating'},
                        {localName: 'Name', globalName: 'name'},
                        {localName: 'Price up', globalName: 'price'},
                        {localName: 'Price down', globalName: '-price'},
                    ];

    const [showDeviceFilter, setShowDeviceFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const toggle = (setFilter, filter) => {
        setFilter(!filter)
    };

    return(
        <div className="NavPanel">
            <button onClick={() => toggle(setShowDeviceFilter, showDeviceFilter)}>Categories</button>
            <div className={showDeviceFilter ? "filterWindow show" : "filterWindow"}>
                {filterData.map((item, index) => <span key={index} className={filterIndex === index ? 'active' : ''} onClick={() => setFilterIndex(index)}>{item}</span>)}
            </div>

            <button  onClick={() => toggle(setShowSort, showSort)}>Sort</button>
            <div className={showSort ? "sortWindow show" : "sortWindow"}>
                {sortData.map((item, index) => <span key={index} className={sortIndex.localName === item.localName ? 'active' : ''} onClick={() => setSortIndex(item)}>{item.localName}</span>)}
            </div>
        </div>
    )
}

export { NavPanel };