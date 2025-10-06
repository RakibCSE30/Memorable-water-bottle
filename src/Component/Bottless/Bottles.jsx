import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
 import './Bottles.css'

const Bottles = () => {
    const [bottles,setBottles] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/B9-memorable-water-bottle/refs/heads/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

     

    const handleAddToCart = bottle =>{
        const newCart =[...cart,bottle];
        setCart(newCart)

    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h3>Bottle: {cart.length}</h3>
            <div className="bottles-container">
                {
                bottles.map(bottle => <Bottle

                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                     >

                    </Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;