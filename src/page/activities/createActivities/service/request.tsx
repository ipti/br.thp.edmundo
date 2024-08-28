import http from "../../../../service/axios"
import { CreateActivities } from "../../type"
export const CreateActivitiesRequest = async (body: CreateActivities) => {
    return await http.post("/activities", body)
}

