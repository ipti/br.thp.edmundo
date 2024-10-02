import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

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



