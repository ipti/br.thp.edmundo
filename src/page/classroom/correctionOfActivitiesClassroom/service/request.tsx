import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";
import { CreateNotasType } from "./types";

export const ClassroomCorrectionOfActivitiesRequest = async (
  id: string,
  idClassroom: string
) => {
  return await http
    .get("/user-activities-bff?id=" + id + "&idClassroom=" + idClassroom)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};

export const CreateAvaliationRequest = async (
  body: CreateNotasType,
  id: number
) => {
  return await http.post("/user-activities-bff/user-avaliation?id=" + id, body);
};

export const UpdateAvaliationRequest = async (
  body: CreateNotasType,
  id: number
) => {
  return await http.put("/user-activities-bff/user-avaliation?id=" + id, body);
};
