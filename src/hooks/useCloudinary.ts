import { ICloudinary } from "../interfaces/Cloudinary";

const useCloudinary = () => {
    const name = import.meta.env.VITE_CLOUDINARY_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file!);
        formData.append("upload_preset", `${uploadPreset}`);
        try{
            const response = await fetch(`https://api.cloudinary.com/v1_1/${name}/image/upload`, {
                method: "POST",
                body: formData
            });
            const result:ICloudinary = await response.json();
            return {error: null, photoUrl: result.secure_url};
        }catch(e){
            return {error: "Upload image to cloudinary failed.", photoUrl: ""};
        }
    }
    return {uploadImage};
}

export default useCloudinary;