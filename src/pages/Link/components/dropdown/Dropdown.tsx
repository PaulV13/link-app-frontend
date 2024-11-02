import { useState } from "react"
import GithubIcon from "../../../../components/icons/GithubIcon"
import YoutubeIcon from "../../../../components/icons/YoutubeIcon"
import LinkedInIcon from "../../../../components/icons/LinkedInIcon"
import ArrowDownIcon from "../../../../components/icons/ArrowDownIcon"
import ArrowUpIcon from "../../../../components/icons/ArrowUpIcon"

import "./Dropdown.css"

type Props = {
    selected: {
        value: string;
        icon: JSX.Element | null
    },
    onSelect: (selected: {value: string, icon: JSX.Element}) => void
}

const OPTIONS = [
    {value: "Github", icon: <GithubIcon size={18} fill="gray"/>}, 
    {value: "Youtube", icon: <YoutubeIcon size={18} fill="gray"/>},
    {value: "LinkedIn", icon: <LinkedInIcon size={18} fill="gray"/>}]

function Dropdown({selected, onSelect}: Props) {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='dropdown'>
            <div className='dropdown__button' onClick={() => setIsActive(!isActive)}>
                <div className="dropdown__icon">
                    {OPTIONS.filter(option => option.value === selected.value)[0].icon}
                    <p>{selected.value}</p>
                </div>
                {isActive ? <ArrowUpIcon size={22} stroke="rgb(89, 66, 200)"/> : <ArrowDownIcon size={22} stroke="rgb(89, 66, 200)" />}
            </div>
            {isActive &&
                <div className='dropdown__content' onMouseLeave={() => setIsActive(false)}>
                    {
                        OPTIONS.map(option => (
                            <div className="dropdown__item" key={option.value} onClick={() => {
                                    onSelect(option)
                                    setIsActive(false)
                                }}>
                               {option.icon}
                               <p>{option.value}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Dropdown