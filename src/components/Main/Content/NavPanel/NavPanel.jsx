import './NavPanel.scss';
import { useState } from 'react';

const NavPanel = () => {

    const filterData = ['All', 'Game consoles', 'Smartphones', 'TV', 'Notebooks'];
    const sortData = ['Name', 'Price up', 'Price down', 'Popularity'];

    const [showDeviceFilter, setShowDeviceFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);
    const toggle = (setFilter, filter) => {
        setFilter(!filter)
    };

    const [filterIndex, setFilterIndex] = useState(0);
    const [sortIndex, setSortIndex] = useState(0);

    return(
        <div className="NavPanel">
            <button onClick={() => toggle(setShowDeviceFilter, showDeviceFilter)}>Categories</button>
            <div className={showDeviceFilter ? "filterWindow show" : "filterWindow"}>
                {filterData.map((item, index) => <span key={index} className={filterIndex === index ? 'active' : ''} onClick={() => setFilterIndex(index)}>{item}</span>)}
            </div>

            <button  onClick={() => toggle(setShowSort, showSort)}>Sort</button>
            <div className={showSort ? "sortWindow show" : "sortWindow"}>
                {sortData.map((item, index) => <span key={index} className={sortIndex === index ? 'active' : ''} onClick={() => setSortIndex(index)}>{item}</span>)}
            </div>
        </div>
    )
}

export { NavPanel };