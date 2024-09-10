import http from "../../../../service/axios"
import { CreateUserTypes } from "./types"

export const CreateUserRequest = async (body: CreateUserTypes) => {
    return await http.post("/user-registration-bff", body)
}

