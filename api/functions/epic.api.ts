import { axiosInstance } from "../axiosInstance"
import { endpoints } from "../endpoints"
import { EpicDate } from "@/typescript/epicDate.interface"
import { DateWiseData } from "@/typescript/dateWiseData.interface"

export const getEpicAllDate = async ()=>{
    const res = await axiosInstance.get<EpicDate    >(
        endpoints.epicAllDate
    )
    return res?.data
}

export const getEpicData = async ()=>{
    const res = await axiosInstance.get<DateWiseData>(
        // endpoints.epicDateWiseData(`${date}`)
        endpoints.epicDateWiseData
    )
    return res?.data
}

export const getEpicImg = async (img: string)=>{
    const res = await axiosInstance.get(
        endpoints.epicImages(`${img}`)
    )
    return res?.data
}