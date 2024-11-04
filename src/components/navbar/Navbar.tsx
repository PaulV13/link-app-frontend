import { NavLink } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import DevlinksLogo from "../icons/DevlinksLogo";
import LinkIcon from "../icons/LinkIcon";
import ProfileIcon from "../icons/ProfileIcon";
import ViewIcon from "../icons/ViewIcon";

import "./Navbar.css"

function Navbar() {
    return <section className="nav">
        <NavLink to="/" className={({ isActive }) =>
                    isActive ? "nav__icon" : "nav__icon"
            }>
            <div className="nav__icon__image">
                <DevlinksLogo width={16} fill="#fff" />
            </div>
            <h1 className="nav__icon__text">
                devlinks
            </h1>
        </NavLink>
        <ul className="nav__list">
            <NavLink to="/" className={({ isActive }) =>
                    isActive ? "nav__item active" : "nav__item"
            }>
                <LinkIcon width={14} fill="currentColor" />
                <p className="nav__icon__text">Links</p>
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
                    isActive ? "nav__item active" : "nav__item"
            }>
                <ProfileIcon width={14} stroke="currentColor" />
                <p className="nav__icon__text">Profile Details</p>
            </NavLink>
        </ul>
        <div className="nav__icon__view">
            <ViewIcon width={14} fill="currentColor" />
        </div>
        <NavLink to="/preview" className={({ isActive }) =>
            isActive ? "nav__button active" : "nav__button"
        }>Preview</NavLink>
    </section>
}

export default Navbar;