import './Cart.scss';
import { BsFillCartFill } from 'react-icons/bs';

const Cart = () => {
    return(
        <div className='Cart'>
            <div className="title">
                <span>Cart <BsFillCartFill /></span>
                <span>Total cost: $ 0</span>
            </div>
            <div className="cart">
                <span>Cart is empty</span>
                <div className="emptyCart">
                    <img src="assets/images/empty-cart.png" alt="empty_cart_img" />
                </div>
                
            </div>
        </div>
    )
}

export { Cart };