import http from "../../../../service/axios"
import { CreateReapplication } from "./types"

export const CreateReapplicationRequest = async (body: CreateReapplication) => {
    return await http.post("/reapplication", body)
}

