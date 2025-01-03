import http from "../../../../service/axios"
import { CreateGroup } from "./types"

export const CreateGroupRequest = async (body: CreateGroup) => {
    return await http.post("/group", body)
}

