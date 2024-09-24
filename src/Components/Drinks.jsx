export default function Drinks({drink}){

    return(
        <button key={drink.id} className="drinkOptionsStyle">
            <img src={drink.image} className="drinkImageStyle"/>
            <h4>{drink.name}</h4>
            <ul className="priceSection">
                <li>Small: ${drink.sPrice}</li>
                <li>Medium: ${drink.mPrice}</li>
                <li>Large: ${drink.lPrice}</li>
            </ul>
            <p className="drinkDesc">{drink.description}</p>
        </button>
    )

}