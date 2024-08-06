import http from "../../../../service/axios"
import { GetIdReapplication, logout } from "../../../../service/localstorage";
import { JoinTheClassroom } from "./types";

export const ListClassroomRequest = async () => {

    return await http
      .get("/classroom-bff?idReapplication=" + GetIdReapplication())
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}


export const OneClassroomRequest = async (id: string) => {
  if (id) {
    return await http
      .get("/classroom/" + id)
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


export const JoinTheClassroomRequest = async (body: JoinTheClassroom) => {
  return await http.put("/classroom-bff/join-the-classroom?idClassroom=" + body.idClassroom + "&idUser=" + body.idUser)
}

