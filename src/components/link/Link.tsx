import { useState } from "react"
import { ILink } from "../../interfaces/Link";
import Dropdown from "../dropdown/Dropdown";
import LinesIcon from "../icons/LinesIcon"

import "./Link.css"

type Props = {
  link: ILink
  updateLink: (link: ILink, index: number) => void
  onRemoveLink: (id: string) => void
  index: number
}

function Link({link, updateLink, onRemoveLink, index} : Props) {
  const [newLinkUrl, setLinkUrl] = useState(link.linkUrl)
  const [platform, setSelected] = useState<{value: string, icon: JSX.Element | null}>({value: link.platform, icon: null})
  
  const handleSelected = (selected: {
    value: string;
    icon: JSX.Element
  }) => {
    setSelected(selected)
    let newLink: ILink = {
      id: link.id,
      platform: selected.value,
      linkUrl: newLinkUrl,
    }
    updateLink(newLink, 1)
  }
  
  const changeLinkUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.currentTarget.value)
    let newLink: ILink = {
      id: link.id,
      platform: platform.value,
      linkUrl: e.currentTarget.value,
    }
    updateLink(newLink, 2)
  }

  const removeLink = (id: string) => {
    onRemoveLink(id)
  }
  
  return (
    <li className="link__article__item">
      <div className="link__item__title">
        <h3><LinesIcon width={16} fill="#cdcdcd" /> Link #{index + 1}</h3>
        <a className="link__item__remove" onClick={() => removeLink(link.id)}>Remove</a>
      </div>
      <form className="link__item__form">
        <label>Platform</label>
        <Dropdown selected={platform} onSelect={handleSelected} />
        <label>Link</label>
        <input type="text" className="link__item__input" value={newLinkUrl} onChange={changeLinkUrl}/>
      </form>
    </li>
  )
}

export default Link
