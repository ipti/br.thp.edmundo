import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { EditActivities } from "../../type"
export const EditActivitiesRequest = async (body: EditActivities, id: number) => {
    return await http.put("/activities/" + id, { ...body, difficult: body.difficult.id })
}

export const FindOneActivitiesRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/activities/" + id)
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