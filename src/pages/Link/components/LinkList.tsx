import Link from "../../../components/link/Link"
import { ILink } from "../../../interfaces/Link"

import "./LinkList.css"

type Props = {
    links: ILink[]
    onUpdateLink: (newList: ILink[]) => void
    onRemoveLink: (newList: ILink[]) => void
}

function LinkList({links, onRemoveLink, onUpdateLink} : Props) {

    const updateLink = (link: ILink, index: number) => {
        onUpdateLink(links.map(item => {
            if (link.id === item.id) {
                if(index == 1){
                    return { ...item, platform: link.platform };
                }else{
                    return { ...item, linkUrl: link.linkUrl };
                }
            } else {
              return item;
            }
        }))
    } 
    
    const removeLink = (id: string) => {
        const newList = links.filter(link => link.id !== id)
        onRemoveLink(newList)
    }

    return (
        <ul className="link__article__list">
            {links.map((link, index) =>
                <Link key={link.id} link={link} updateLink={updateLink} onRemoveLink={removeLink} index={index}/>
            )}
        </ul>
  )
}

export default LinkList