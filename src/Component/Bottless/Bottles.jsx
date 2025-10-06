import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
 import './Bottles.css'

const Bottles = () => {
    const [bottles,setBottles] = useState([]);
    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/B9-memorable-water-bottle/refs/heads/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div>
            <h3>Bottles Here: {bottles.length}</h3>
            <div className="bottles-container">
                {
                bottles.map(bottle => <Bottle
                    key={bottle.id} bottle={bottle} ></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;