import axios, { AxiosInstance  } from "axios";


const apiClient: AxiosInstance = axios.create ({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers: {
        "Access-Control-Allow-Origin":"*",
        "Content-type": "application/json"
    }
})

export default apiClient