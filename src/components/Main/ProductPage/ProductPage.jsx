import './ProductPage.scss'
import { BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';


const ProductPage = ({name, image, description, price, fullDescription, characteristics}) => {

    const [ addToList, setAddToList ] = useState(false);
    const changeLike = () => {
        setAddToList(!addToList)
    }

    const [flag, setFlag] = useState(true);

    return (
        <div className='ProductPage'>
            <div className="generalInfo">
                <div className="imageProduct">
                    <img src={image} alt="" />
                </div>
                <div className="infoContainer">
                    <h2 className='title'>{name}</h2>
                    <p>{description}</p>
                    <div className='info'>
                        <p className='price'>$ {price}</p>
                        <button className={addToList ? 'addToList active' : 'addToList'} onClick={changeLike}><BsHeartFill /> Add to list</button>
                    </div>
                    <div className="addToCart">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="descriptionContainer">
                <div className="togglesBox">
                    <button className={flag ? "toggle active" : "toggle"} onClick={() => setFlag(true)}>Description</button>
                    <button className={!flag ? "toggle active" : "toggle"} onClick={() => setFlag(false)}>Characteristics</button>
                </div>
                <div className={flag ? "description active" : "description"}>
                    <p>{fullDescription}</p>
                </div>
                <div className={!flag ? "characteristics active" : "characteristics"}>
                    <p>{characteristics}</p>
                </div>
            </div>
        </div>
    )
}

export { ProductPage };
