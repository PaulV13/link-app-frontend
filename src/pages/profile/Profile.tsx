import { useState, useRef, ChangeEvent, MouseEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IProfile } from "../../interfaces/Profile";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useCloudinary from "../../hooks/useCloudinary";

import "./Profile.css"

const schema = z.object({
    firstName: z.string().min(2, { message: 'Please enter your first name.' }),
    lastName: z.string().min(2, { message: 'Please enter your last name.'}),
    email: z.string().email({message: 'Please enter a valid email.'}).or(z.literal(''))
});

type FormData = {
    firstName: string;
    lastName: string;
    email: string
};
const typeImagesAccept = ["image/png", "image/jpeg", "image/avif"]; 

function Profile() {
    const [imageSelected, setImageSelected] = useState<File>()
    const [previewImage, setPreviewImage] = useState<string>("");
    const [profile, setProfile] = useState<IProfile>({
        firstName: "",
        lastName: "",
        email: "",
        photoUrl: ""
    })
    const profileImageRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        values: profile,
        resolver: zodResolver(schema),
    });
    const {uploadImage} = useCloudinary();
    
    useEffect(() => {
        const profileDataString = localStorage.getItem("profile");
        if(profileDataString){
            const profileData = JSON.parse(profileDataString!);
            setProfile(profileData);
        }
    }, [])
    
    const onSubmit = async (data: FormData) => {
        const {error, photoUrl} = await uploadImage(imageSelected!);
        if(error) {
            toast.error(error, {
                duration: 2000,
                position: 'bottom-center',
                style: {
                    backgroundColor: "#111",
                    color: "#fff"
                },
            });
            return;
        }else{
            const profileData: IProfile = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                photoUrl: photoUrl
            };
            localStorage.setItem("profile", JSON.stringify(profileData));
            setProfile(profileData);
            toast.success('Your changes have been successfully saved!', {
                duration: 2000,
                position: 'bottom-center',
                style: {
                    backgroundColor: "#111",
                    color: "#fff"
                },
            });
        }
    };

    const handleImageUpload = (event: MouseEvent<HTMLLabelElement>) => {
        event.preventDefault();
        profileImageRef.current?.click();
    }

    const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files as FileList;
        if(typeImagesAccept.includes(selectedFiles[0]?.type)){
            setPreviewImage(URL.createObjectURL(selectedFiles[0]))
            setImageSelected(selectedFiles[0])
        }else{
            toast.error('This file type not accepted!', {
                duration: 2000,
                position: 'bottom-center',
                style: {
                    backgroundColor: "#111",
                    color: "#fff"
                },
            });
        }                 
    }
    
    return (
        <section className="profile__section">
            <div className="profile__title">
                <h2>Profile Details</h2>
                <p>Add your details to create a personal touch to your profile.</p>
            </div>
            <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="profile__picture">
                    <label>Profile picture</label>
                    <div className="profile__picture__info">
                        <label className="profile__picture__preview" style={{
                            backgroundImage: `url(${previewImage ? previewImage : profile.photoUrl})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }} onClick={handleImageUpload}>
                            <span>Change Image</span>
                        </label>   
                        <input
                            type="file"
                            ref={profileImageRef}
                            name="profileImage"
                            hidden
                            onChange={handleSelectImage}
                        />
                        <div>
                            <p>Image must be below 1024x1024px</p>
                            <p>Use PNG, JPG, or BMP format</p>
                        </div>
                    </div>    
                </div>
                <div className="profile__inputs">
                    <div className="profile__form__row">
                        <label>First name*</label>
                        <div className="profile__form__input">
                            <input {...register("firstName")}/>
                            <p className="error__message">{errors.firstName?.message}</p>
                        </div>
                    </div>
                    <div className="profile__form__row">
                        <label>Last name*</label>
                        <div className="profile__form__input">
                            <input {...register("lastName")}/>
                            <p className="error__message">{errors.lastName?.message}</p>
                        </div>
                    </div>
                    <div className="profile__form__row">
                        <label>Email</label>
                        <div className="profile__form__input">
                            <input {...register("email")} />
                            <p className="error__message">{errors.email?.message}</p>
                        </div>
                    </div>
                </div>
                <button type="submit" className="profile__button">Save</button>
            </form>  
            <Toaster />
        </section>
  )
}

export default Profile