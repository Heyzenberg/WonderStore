import './Header.scss';
import { BsFillCartFill, BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

    const [ cartOpen, setCartOpen ] = useState(false);

    return(
        <div className="Header">
            <div className='navBtn'></div>
            <Link to='/' onClick={() => setCartOpen(false)}>
                <h1>Wonder<span>Store</span></h1>
            </Link>
            {cartOpen === false ? <Link to='cart' className='cartOpen' onClick={() => setCartOpen(true)}>{<BsFillCartFill />}</Link> : <Link to={-1} className='cartClose' onClick={() => setCartOpen(false)}>{<BsXLg />}</Link>}
        </div>
    )
}

export { Header };