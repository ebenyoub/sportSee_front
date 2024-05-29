import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile">
            <h1>Connexion</h1>
            <div className="profile_cards">
                <Link className="profile_cards_card" to={"/user/12"} >Karl</Link>
                <Link className="profile_cards_card" to={"/user/18"} >Cecilia</Link>
            </div>
        </div>
    );
}

export default Profile;
