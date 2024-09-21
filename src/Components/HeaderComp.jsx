export default function HeaderComp(props) {
    return (
        <div className="headerContainer">
            <div className="leftHeader">
                <h1 className="compTitle">{props.compName}</h1>
                <h3>{props.slogan}</h3>
            </div>
            <div className="rightHeader">
                <img src={props.compImg} alt="Company Logo" className="compImgStyle"/>
            </div>

        </div>
    )
}