import http from "../../../../service/axios"
import { CreateClasses } from "../../type"
export const CreateClassesRequest = async (body: CreateClasses) => {
    return await http.post("/classes", body)
}

