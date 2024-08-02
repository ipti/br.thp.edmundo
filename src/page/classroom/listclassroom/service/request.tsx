import http from "../../../../service/axios"
import { GetIdReapplication, logout } from "../../../../service/localstorage";

export const ListClassroomRequest = async () => {
  if (GetIdReapplication()) {
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
}

