import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";

export const ListReapplicationRequest = async () => {
    return await http
    .get("/reapplication-bff")
    .then((response) => response.data)
    .catch((err) => {
      if(err.response.status === 401){
        logout()
        window.location.reload()
      }
      throw err;
    });
}

