import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { CreateModule } from "../../type"
export const EditModuleRequest = async (body: CreateModule, id: number) => {
    return await http.put("/modules/"+id, body)
}

export const FindOneModuleRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/modules/" + id)
            .then((response) => response.data)
            .catch((err) => {
                if (err.response.status === 401) {
                    logout()
                    window.location.reload()
                }
                throw err;
            });
    }
}
