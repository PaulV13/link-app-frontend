import { useEffect } from "react"
import LinkList from "./components/linkList/LinkList";
import toast, { Toaster } from 'react-hot-toast';
import useAppStore from "../../store/store";
import CustomButton from "../../components/button/CustomButton";

import "./AddLink.css"

function AddLink() {
    const links = useAppStore(state => state.links)
    const addLink = useAppStore(state => state.addLink)
    const updateLink = useAppStore(state => state.updateLinks)

    useEffect(() => {
        const links = window.localStorage.getItem("links")
        if(links){
            updateLink(JSON.parse(links))
        }
    },[])
    
    const handleAddLink = () => {
        let uuid = self.crypto.randomUUID();
        const newLink = {
            id: uuid,
            platform: "Github",
            linkUrl: "",
        }
        addLink(newLink)
    }

    const handleSaveLinks = () => {
        localStorage.setItem("links", JSON.stringify(links));
        toast('Your changes have been successfully saved!', {
            duration: 2000,
            position: 'bottom-center',
          
            style: {
                backgroundColor: "#111",
                color: "#fff"
            },
            
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path d="M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z">
                    </path>
                    </svg>,
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
                <LinkList links={links} />
                <div className="button__container">
                    <CustomButton 
                        type="button"
                        className="button button__blue" 
                        title="Save"
                        onHandleClick={handleSaveLinks} />
                </div>
            </article>
            <Toaster />
        </section>
    )
}

export default AddLink
