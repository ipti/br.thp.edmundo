import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { EditClasses } from "../../type"
export const EditClassesRequest = async (body: EditClasses, id: number) => {
    return await http.put("/classes/"+id, body)
}

export const FindOneClassesRequest = async (id: string) => {
    console.log(id)
    if (id) {
        return await http
            .get("/classes/" + id)
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
