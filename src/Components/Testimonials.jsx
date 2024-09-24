export default function Testimonials({user}){
    return(
        <div className="userLayout">
            <p className="testText">{user.text}</p>
            <img src={user.image} alt="placeholder" className="testImg"/>
            <p className="testName">{user.name}</p>

        </div>
    )
}