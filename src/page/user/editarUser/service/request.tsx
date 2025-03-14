import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";
import { UpdateUser } from "./type";

export const FindUserRequest = async (id?: string) => {
  if (id) {
    return await http
      .get("/user-registration-bff/" + id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout();
          window.location.reload();
        }
        throw err;
      });
  }
};

export const UpdateUserRequest = async (body: UpdateUser, id: string) => {
    if (id) {
        return await http.put("/user-registration-bff?idUser=" + id, { ...body, responsable_telephone: body?.responsable_telephone?.replace(/[^a-zA-Z0-9]/g, '') })
    } else {
        logout()
        window.location.reload()
    }
}


export const DeleteUserRequest = async (id: number) => {
  return await http
    .post("/users/" + id)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};
