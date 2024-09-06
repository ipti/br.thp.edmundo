import http from "../../../../service/axios"
import { CreateModule } from "../../type"
export const CreateModuleRequest = async (body: CreateModule) => {
    return await http.post("/modules", body)
}

