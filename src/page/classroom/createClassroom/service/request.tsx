import http from "../../../../service/axios"
import { CreateClassroom } from "./types"

export const CreateClassroomRequest = async (body: CreateClassroom) => {
    return await http.post("/classroom", body)
}

