import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { CreateModule } from "../../type"
export const EditModuleRequest = async (body: CreateModule) => {
    return await http.post("/modules", body)
}

export const FindOneModuleRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/module" + id)
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
