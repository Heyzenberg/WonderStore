import './NavPanel.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { setCategoryId, setSort } from '../../../../redux/slices/filterSlice';


const NavPanel = () => {

    const filterIndex = useSelector((state) => state.filter.filterID);
    const filterData = useSelector((state) => state.filter.filterData);
    const dispatch = useDispatch();
    const getIdByClick = (id) => {
        dispatch(setCategoryId(id))
    }

    const sortIndex = useSelector((state) => state.filter.sortName);
    const sortData = useSelector((state) => state.filter.sortData);
    const getSortBiClick = (item) => {
        dispatch(setSort(item))
    }

    const [showDeviceFilter, setShowDeviceFilter] = React.useState(false);
    const [showSort, setShowSort] = React.useState(false);
    const toggle = (setFilter, filter) => {
        setFilter(!filter)
    };

    return(
        <div className="NavPanel">
            <button onClick={() => toggle(setShowDeviceFilter, showDeviceFilter)}>Categories</button>
            <div className={showDeviceFilter ? "filterWindow show" : "filterWindow"}>
                {filterData.map((item, index) => <span key={index} className={filterIndex === index ? 'active' : ''} onClick={() => getIdByClick(index)}>{item}</span>)}
            </div>

            <button  onClick={() => toggle(setShowSort, showSort)}>Sort</button>
            <div className={showSort ? "sortWindow show" : "sortWindow"}>
                {sortData.map((item, index) => <span key={index} className={sortIndex.localName === item.localName ? 'active' : ''} onClick={() => getSortBiClick(item)}>{item.localName}</span>)}
            </div>
        </div>
    )
}

export { NavPanel };