export default function Drinks({drink}){

    return(
        <button key={drink.id} className="drinkOptionsStyle">
            <img src={drink.image} className="drinkImageStyle"/>
            <h4>{drink.name}</h4>
            <p>${drink.price}</p>
        </button>
    )

}