 
import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name,img,price}=bottle;
    return (
        <div className='bottle-container'>
            <p><strong>Bottle: {name}</strong></p>
            <img src={img} alt="" />
            <p>Price ${price}</p>
        </div>
    );
};

export default Bottle;