import http from "../../../../service/axios"


export const CreateStampsRequest = async (body: any) => {
    return await http.post("/stamps", body)
}

