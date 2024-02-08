import axios from "axios";

// const api_key = "9DI8Z5BPdaYfIIxbHsd9gYn9IUjjfBEhlQeBKtiU"
export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_APP_BASE_URL,
    params: {
        api_key: process.env.NEXT_APP_API_KEY
    }
})

// axiosInstance.interceptors.request.use((config)=>{
//     config.params['api_key'] = process.env.NEXT_APP_API_KEY
//     return config
// })

