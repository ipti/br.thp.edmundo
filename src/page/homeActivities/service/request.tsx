import http from "../../../service/axios";
import { logout } from "../../../service/localstorage";
import { JoinTheActivitiesUser } from "../type";


export const AddActivitiesUserRequest = async (body: JoinTheActivitiesUser) => {
  return await http.post("/activities-bff/add-activities-classroom-user?idClassroom=" + body.idClassroom + "&idActivities=" + body.idActivities)
}
export const ActivitiesRequest = async (id: string) => {

  return await http
    .get("/activities-bff?id=" + id)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });

}