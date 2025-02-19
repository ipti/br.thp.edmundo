import http from "../../../service/axios";
import { logout } from "../../../service/localstorage";
import {
  CreateResponse,
  JoinTheActivitiesUser,
  PropsRating,
  SendIA,
} from "../type";

export const AddActivitiesUserRequest = async (body: JoinTheActivitiesUser) => {
  return await http.post(
    "/activities-bff/add-activities-classroom-user?idClassroom=" +
      body.idClassroom +
      "&idActivities=" +
      body.idActivities
  );
};

export const AddResponseActivitiesRequest = async (body: CreateResponse) => {
  return await http.post("/form-bff/response", body);
};

export const AddRatingActivitiesRequest = async (
  id: number,
  body: PropsRating
) => {
  return await http.post(
    "/user-activities-bff/user-activities-rating?id=" + id,
    body
  );
};

export const FinishActivitiesUserRequest = async (id: number, files: any) => {
  return await http.put(
    "/activities-bff/finish-activities-classroom-user?id=" + id,
    files
  );
};

export const SendAnswerAIRequest = async (body: SendIA) => {
  return await http.post(
    "/user-activities-bff/answer-user-activities-send",
    body
  );
};

export const ActivitiesRequest = async (id: string, idClassroom: string) => {
  return await http
    .get("/activities-bff?id=" + id + "&idClassroom=" + idClassroom)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};
