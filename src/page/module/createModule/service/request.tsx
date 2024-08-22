import http from "../../../../service/axios"
import { CreateModule } from "./types"

export const CreateModuleRequest = async (body: CreateModule) => {
    return await http.post("/module", body)
}

