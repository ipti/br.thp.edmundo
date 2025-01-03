import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";
import { CreateMetricGroup } from "./types";


export const UpdateGroupRequest = async (body: any, id: number) => {
    return await http.put("/group/"+ id, {...body, type: body?.type?.id})
}

export const FindOneGroupRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/group/" + id)
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


export const CreateMetricGroupRequest = async (body: CreateMetricGroup) => {
    return await http.post("/metricgroup", body)
}
