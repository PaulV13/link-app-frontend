import Link from "../link/Link"
import { ILink } from "../../../../interfaces/Link"

import "./LinkList.css"

type Props = {
    links: ILink[]
}

function LinkList({links} : Props) {
    return (
        <ul className="link__article__list">
            {links.map((link, index) =>
                <Link key={link.id} link={link} index={index}/>
            )}
        </ul>
    )
}

export default LinkList