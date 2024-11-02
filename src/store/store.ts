import { create } from 'zustand'
import { IProfile } from '../interfaces/Profile'
import { ILink } from '../interfaces/Link'

type State = {
    profile: {
        firstName: string
        lastName: string
        email: string
        photoUrl: string
    }
    links: ILink[]
}

type Action = {
    updateData: (data: IProfile) => void
    updateLinks: (links: ILink[]) => void
    addLink: (link: ILink) => void
    removeLink: (link: ILink) => void
    updatePlatformLink: (link: ILink, platform: string) => void
    updateUrlLink: (link: ILink, url: string) => void
}

const getProfile = () => {
    const profile = window.localStorage.getItem("profile");
    if(profile) return JSON.parse(profile);
    return {
        firstName: "",
        lastName: "",
        email: "",
        photoUrl: "",
    }
}

const useAppStore = create<State & Action>((set) => ({
    profile: getProfile(),
    links: [],
    updateData: (data) => set(() => ({ profile: data })),
    updateLinks: (links) => set(() => ({ links: links })),
    addLink: (link) => set((state) => ({
        links: [...state.links, link],
    })),
    removeLink: (link) => set((state) => ({
        links: state.links.filter((l) => l.id != link.id)
    })),
    updatePlatformLink: (link, platform) => set((state) => ({
        links: state.links.map(item => {
            if (link.id === item.id){
                return { ...item, platform: platform }
            }else {
                return item
            }
        })
    })),
    updateUrlLink: (link, url) => set((state) => ({
        links: state.links.map(item => {
            if (link.id === item.id){
                return { ...item, linkUrl: url }
            }else {
                return item
            }
        })
    }))
}));

export default useAppStore;