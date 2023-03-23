import "./Profile.css";
import profilePic from "../assets/ProfilePic.jpg"
function Profile() {
    return(
        <div className="layout">
            <img src={profilePic} alt="profile1" />
            <h1 className="name">Nay Che</h1>
            <hr />
        </div>
    )

}
export default Profile;