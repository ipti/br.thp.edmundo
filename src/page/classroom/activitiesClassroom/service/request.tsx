import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const ActivitiesClassroomRequest = async (id: string) => {

    return await http
      .get("/classroom-bff/activities?id=" + id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}



