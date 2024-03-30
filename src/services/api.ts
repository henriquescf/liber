import axios from "axios";

export const api = axios.create({
    baseURL: "https://my-fashion-store-api.onrender.com/",
    timeout: 8000,
})