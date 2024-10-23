import { useEffect, useState } from "react"
import { ILink } from "../../interfaces/Link"
import LinkList from "./components/LinkList"
import toast, { Toaster } from 'react-hot-toast';

import "./AddLink.css"

function AddLink() {
    const [links, setLinks] = useState<ILink[]>([])
    
    useEffect(() => {
        const links = window.localStorage.getItem("links")
        if(links){
            setLinks(JSON.parse(links))
        }
    },[])
    
    const handleAddLink = () => {
        let uuid = self.crypto.randomUUID();
        const newLink = {
            id: uuid,
            platform: "Github",
            linkUrl: "",
        }
        setLinks([...links, newLink]);
    }

    const onRemoveLink = (newList: ILink[]) => {
        setLinks(newList)
    }

    const onUpdateLink = (newList: ILink[]) => {
        setLinks(newList)
    }
    
    const handleSaveLinks = () => {
        localStorage.setItem("links", JSON.stringify(links));
        toast('Your changes have been successfully saved!', {
            duration: 2000,
            position: 'bottom-center',
          
            // Styling
            style: {
                backgroundColor: "#111",
                color: "#fff"
            },
            className: '',
          
            // Custom Icon
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z">
                    </path>
                    </svg>,
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
    }

    return (
        <section className="link__container">
            <article className="link__article">
                <div className="link__article__title">
                    <h2>Customize your links</h2>
                    <p>Add/edit/remove links below and then share all your profiles with the wolrd!</p>
                    <button className="link__button__add" onClick={handleAddLink}>+ Add new link</button>
                </div>
                <LinkList links={links} onRemoveLink={onRemoveLink} onUpdateLink={onUpdateLink}/>
                <button className="link__article__button" onClick={handleSaveLinks}>Save</button>
            </article>
            <Toaster />
        </section>
    )
}

export default AddLink
