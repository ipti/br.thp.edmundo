import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { CreateGroup } from "./types"

export const CreateGroupRequest = async (body: CreateGroup) => {
    return await http.post("/group", body)
}

export const ListTypeGroupRequest = async () => {

    return await http
      .get("/type_group")
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}