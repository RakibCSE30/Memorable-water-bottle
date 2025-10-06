 
import './Bottle.css'
const Bottle = ({bottle , handleAddToCart}) => {
    const {name,img,price}=bottle;
    return (
        <div className='bottle-container'>
            <p><strong>Bottle: {name}</strong></p>
            <img src={img} alt="" />
            <p className=' bg-blue-200 ' >Price ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;