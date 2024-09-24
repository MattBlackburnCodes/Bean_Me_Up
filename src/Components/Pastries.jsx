export default function Pastries({pastry}){
    return(
        <button key={pastry.id} className="pastryOptionsStyle">
            <img src={pastry.image} className="pastryImageStyle"/>
            <h4>{pastry.name}</h4>
            <ul className="priceSection">
                <li>${pastry.price}</li>
            </ul>
            <p className="pastryDesc">{pastry.description}</p>
        </button>
    )}