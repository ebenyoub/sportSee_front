import { Bicycle, Yoga, Swim, Weight } from "../iconComponents/index";
import { Link } from "react-router-dom";

const SidebarNav = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__icons">
                <Link to={`/user/12`} aria-label="Yoga">
                    <Yoga className="sidebar__icons__icon" />
                </Link>
                <Link to={`/user/12`} aria-label="Swimming">
                    <Swim className="sidebar__icons__icon" />
                </Link>
                <Link to={`/user/12`} aria-label="Bicycle">
                    <Bicycle className="sidebar__icons__icon" />
                </Link>
                <Link to={`/user/12`} aria-label="Weight Lifting">
                    <Weight className="sidebar__icons__icon" />
                </Link>
            </div>
            <div className="rights">
                <p className="rights__copyrights">Copyrights, SportSee 2024</p>
            </div>
        </aside>
    );
}

export default SidebarNav;
