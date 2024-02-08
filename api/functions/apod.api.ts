import { InterfaceApod } from "@/typescript/apod.interface";
import { axiosInstance } from "../axiosInstance";
import { endpoints } from "../endpoints";

export const apodDetails = async ()=>{
    const res = await axiosInstance.get<InterfaceApod>(
        endpoints.apoData
    )
    console.log('res', res);
    return res?.data
}