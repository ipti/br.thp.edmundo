import http from "../../../service/axios"
import { LoginTypes } from "./types"

export const LoginRequest = async (body: LoginTypes) => {
    return await http.post("/auth/login", body)
}

