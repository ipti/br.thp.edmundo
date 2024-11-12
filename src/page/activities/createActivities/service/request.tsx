import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { CreateActivities, CreateActivitiesTagsDto } from "../../type"
export const CreateActivitiesRequest = async (body: CreateActivities) => {
    return await http.post("/activities", {...body, difficult: body.difficult.id, type_activities: body.type_activities.id})
}

export const FindTagsActivitiesRequest = async () => {
    return await http
        .get("/tags-bff/activities-all")
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });
}

export const AddEditorImage = (body: any) => { 

    console.log(body)
    return http.post("/activities-bff/editor-image", body)
}

export const AddTagActivities = async (body: CreateActivitiesTagsDto) => {
    return await http.post("/tags-bff/activities", body)
}