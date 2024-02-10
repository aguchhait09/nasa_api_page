import { ImgGalery } from "@/typescript/imgGalery.interface";
import { axiosInstance } from "../axiosInstance";
import { endpoints } from "../endpoints";

export const imageGalery = async ()=> {
    const res = await axiosInstance.get<ImgGalery>(
        endpoints.imgGalery
    )
    console.log('res', res);
    
    return res?.data?.photos
}

