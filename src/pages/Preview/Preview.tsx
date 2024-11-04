import { useEffect } from "react";
import ArrowIcon from "../../components/icons/ArrowIcon";
import GithubIcon from "../../components/icons/GithubIcon";
import LinkedInIcon from "../../components/icons/LinkedInIcon";
import YoutubeIcon from "../../components/icons/YoutubeIcon";
import CustomButton from "../../components/button/CustomButton";
import useAppStore from "../../store/store";

import "./Preview.css";
import { NavLink } from "react-router-dom";

const platformOptions = [
  { platform: "Github", color: "#1D1D1C", icon: <GithubIcon size={16} fill="white"/> },
  { platform: "Youtube", color: "#FF2E2F", icon: <YoutubeIcon size={16} fill="white"/> },
  { platform: "LinkedIn", color: "#2E2FFF", icon: <LinkedInIcon size={16} fill="white"/> },
]

const getBackgroundColor = (platform: string) => {
  const platformExist = platformOptions.find(value => value.platform === platform)
  if(platformExist){
    return platformExist.color
  }
}

const getIconPlatform = (platform: string) => {
  const platformExist = platformOptions.find(value => value.platform === platform)
  if(platformExist){
    return platformExist.icon
  }
}

function Preview() {
  const profile = useAppStore(state => state.profile);
  const links = useAppStore(state => state.links);
  const updateData = useAppStore(state => state.updateData)

  useEffect(() => {
    const data = localStorage.getItem("profile")
    if(data){
      updateData(JSON.parse(data));
    };
  }, [])

  const handleShareLink = () => {
    console.log(profile)
    console.log(links)
  }

  return (
    <div className="preview__container">
      <nav className="preview__navbar">
      <NavLink 
          className="button button__outline" 
          to="/profile">
            Back to editor
          </NavLink>
        <CustomButton 
          type="button"
          className="button button__blue" 
          title="Share Link" 
          onHandleClick={handleShareLink} />
      </nav>
      <section className="preview__section">
        <article className="preview__info">
          <img className="preview__image" src={profile.photoUrl} />
          <h3>{profile.firstName} {profile.lastName}</h3>
          <p>{profile.email}</p>
        </article>
        <div className="preview__list">
          {
            links.map((link) => (
              <a key={link.id} href="https://www.github.com" className="preview__list__item" style={{
                backgroundColor: getBackgroundColor(`${link.platform}`)
              }}>
                <div className="preview__list__item__link">
                  {getIconPlatform(link.platform)}
                  <p>{link.platform}</p>
                </div>
                <ArrowIcon size={16} fill="white"/>
              </a>
            ))
          }
        </div>
      </section>
      <div className="preview__background"></div>
    </div>
  )
}

export default Preview