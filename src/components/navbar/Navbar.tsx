import { useState } from "react";
import DevlinksLogo from "../icons/DevlinksLogo";
import LinkIcon from "../icons/LinkIcon";
import ProfileIcon from "../icons/ProfileIcon";

import "./Navbar.css"
import ViewIcon from "../icons/ViewIcon";

type Props = {
    onIsActive: (id: number) => void 
}

function Navbar({onIsActive}: Props) {
    const [itemActive, setItemActive] = useState(1);

    const onSelectPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setItemActive(Number(e.currentTarget.id))
        onIsActive(Number(e.currentTarget.id))
    }
    
    return <section className="nav">
        <div className="nav__icon">
            <div className="nav__icon__image">
                <DevlinksLogo width={16} fill="#fff" />
            </div>
            <h1 className="nav__icon__text">
                devlinks
            </h1>
        </div>
        <ul className="nav__list">
            <li className={`nav__item ${itemActive == 1 ? "active" : null}`} id="1" onClick={onSelectPage}>
                <LinkIcon width={14} fill="currentColor" />
                <p className="nav__icon__text">Links</p>
            </li>
            <li className={`nav__item ${itemActive == 2 ? "active" : null}`} id="2"  onClick={onSelectPage}>
                <ProfileIcon width={14} stroke="currentColor" />
                <p className="nav__icon__text">Profile Details</p>
            </li>
        </ul>
        <div>
            <div className="nav__icon__view">
                <ViewIcon width={14} fill="currentColor" />
            </div>
            <button className="nav__button">Preview</button>
        </div>
    </section>
}

export default Navbar;