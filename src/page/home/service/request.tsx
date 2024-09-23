import http from "../../../service/axios"
import { logout } from "../../../service/localstorage"
import { JoinTheClassroom } from "../type"

export const JoinTheClassroomRequest = async (body: JoinTheClassroom) => {
    return await http.put("/classroom-bff/join-the-classroom?idClassroom=" + body.idClassroom + "&idUser=" + body.idUser)
  }
  
  export const ListClassroomRequest = async () => {

    return await http
      .get("/classroom-bff/user")
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}