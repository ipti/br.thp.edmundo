import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";
import { CreateNotasAvaliationType } from "./types";

export const ActivitiesSentRequest = async (id: string) => {
    return await http
      .get("/activities-bff/user-classroom?id=" + id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
}

export const CreateAvaliationRequest = async (body: CreateNotasAvaliationType, id: number) => {
  return await http.post("/activities-bff/classroom-avaliation?id="+id, body)
}


export const UpdateAvaliationRequest = async (body: CreateNotasAvaliationType, id: number) => {
  return await http.put("/activities-bff/classroom-avaliation?id="+id, body)
}

export const UpdateAvaliationAllRequest = async (id: number) => {
  return await http.put("/user-activities-bff/user-avaliation-classroom?idClassroomActivities="+id)
}

