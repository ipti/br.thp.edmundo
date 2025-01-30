import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { EditActivities, PropsCorrectAnswerMetricActivities, PropsFormActivities } from "../../type"


export const EditActivitiesRequest = async (body: EditActivities, id: number) => {
    return await http.put("/activities/" + id, { ...body, difficult: body.difficult.id, type_activities: body.type_activities.id })
}

export const CreateFormRequest = async (body: PropsFormActivities) => {
    return await http.post("/form-bff", body)
}

export const CorrectAnswerRequest = async (id: number, body: PropsCorrectAnswerMetricActivities[]) => {
    return await http.put("/activities-bff/correct-answer-metric-activities?id=" + id, { metrics: body })
}


export const FindOneActivitiesRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/activities-bff/one?id=" + id)
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