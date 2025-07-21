import { QueryClient } from "@tanstack/react-query"
import axios from "axios"

export const nexusQueryClient = new QueryClient()

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }, 
})
