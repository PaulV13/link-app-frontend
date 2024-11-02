import { useState } from "react"
import { ILink } from "../../../../interfaces/Link";
import Dropdown from "../dropdown/Dropdown";
import LinesIcon from "../../../../components/icons/LinesIcon"
import useAppStore from "../../../../store/store";

import "./Link.css"

type Props = {
  link: ILink
  index: number
}

function Link({link, index} : Props) {
  const [newLinkUrl, setLinkUrl] = useState(link.linkUrl)
  const [platform, setSelected] = useState<{value: string, icon: JSX.Element | null}>({value: link.platform, icon: null})
  
  const updatePlatformLink = useAppStore(state => state.updatePlatformLink)
  const updateUrlLink = useAppStore(state => state.updateUrlLink)
  const removeLink = useAppStore(state => state.removeLink)

  const handleSelected = (selected: {
    value: string;
    icon: JSX.Element
  }) => {
    setSelected(selected)
    updatePlatformLink(link, selected.value)
  }
  
  const changeLinkUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(e.currentTarget.value)
    updateUrlLink(link, e.currentTarget.value)
  }

  const handleRemoveLink = (link: ILink) => {
    removeLink(link)
  }
  
  return (
    <li className="link__article__item">
      <div className="link__item__title">
        <h3><LinesIcon width={16} fill="#cdcdcd" /> Link #{index + 1}</h3>
        <a className="link__item__remove" onClick={() => handleRemoveLink(link)}>Remove</a>
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
