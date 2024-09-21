import Drinks from "../assets/Images/Drinks.png"
export default function About(props){
    return(
        <div className="aboutContainer">
            <div className="aboutRight">
                <img src={Drinks} alt="" className="aboutImgStyle"/>
            </div>
            <div className="aboutLeft">
                <h2>About Us</h2>
                <p>{props.about}</p>
            </div>
        </div>
    )
}