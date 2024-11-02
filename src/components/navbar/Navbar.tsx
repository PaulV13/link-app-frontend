import CustomButton from "../button/CustomButton";
import DevlinksLogo from "../icons/DevlinksLogo";
import LinkIcon from "../icons/LinkIcon";
import ProfileIcon from "../icons/ProfileIcon";
import ViewIcon from "../icons/ViewIcon";

import "./Navbar.css"

type Props = {
    onIsActive: (id: number) => void 
    isActive: number
}

function Navbar({onIsActive, isActive}: Props) {
    const onSelectPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        onIsActive(Number(e.currentTarget.id));
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
            <li className={`nav__item ${isActive === 1 ? "active" : null}`} id="1" onClick={onSelectPage}>
                <LinkIcon width={14} fill="currentColor" />
                <p className="nav__icon__text">Links</p>
            </li>
            <li className={`nav__item ${isActive === 2 ? "active" : null}`} id="2"  onClick={onSelectPage}>
                <ProfileIcon width={14} stroke="currentColor" />
                <p className="nav__icon__text">Profile Details</p>
            </li>
        </ul>
        <div>
            <div className="nav__icon__view">
                <ViewIcon width={14} fill="currentColor" />
            </div>
            <button className="nav__button" onClick={onSelectPage} id="3">Preview</button>
        </div>
    </section>
}

export default Navbar;