

export default function Address(props){
    return(
        <div className="addressContainer">
            <div className="addressLeft">
                <h2>Visit Us</h2>
                <p>{props.compName}</p>
                <p>{props.address}</p>
                <p>{props.city}, {props.state} {props.zip}</p>
                <p>Phone: {props.phone}</p>
            </div>
            <div className="addressRight">
                <img src={props.building} alt="Building" className="buildingImgStyle"/>   
            </div>
        </div>
    )}