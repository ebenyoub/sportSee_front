import logo from "../assets/logo.svg"
import { NavLink, Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <Link to={"/user/12"} tabIndex="0">
                <img src={logo} alt="logo de SportSee" width={178} height={61} />
            </Link>
            <nav className="navbar">
                <NavLink to={`/user/12`} tabIndex="0">Accueil</NavLink>
                <NavLink to={`/profile`} tabIndex="0">Profil</NavLink>
                <NavLink to={`/user/12`} tabIndex="0">Réglages</NavLink>
                <NavLink to={`/user/12`} tabIndex="0">Communauté</NavLink>
            </nav>
        </header>
    );
}

export default Header;
