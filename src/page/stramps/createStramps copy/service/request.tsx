import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";


export const UpdateStampsRequest = async (body: any, id: number) => {
    return await http.put("/stamps/"+ id, body)
}

export const FindOneStampsRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/stamps/" + id)
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
