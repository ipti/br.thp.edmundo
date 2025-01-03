import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";
import { JoinTheGroup } from "./types";

export const ListGroupRequest = async () => {

    return await http
      .get("/group")
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}


export const OneGroupRequest = async (id: string) => {
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

export const DeleteGroupRequest = async (id: number) => {
  return await http
      .delete("/group/" + id)
      .then((response) => response.data)
      .catch((err) => {
          if (err.response.status === 401) {
              logout()
              window.location.reload()
          }
          throw err;
      });

}


export const JoinTheGroupRequest = async (body: JoinTheGroup) => {
  return await http.put("/Group-bff/join-the-Group?idGroup=" + body.idGroup + "&idUser=" + body.idUser)
}

