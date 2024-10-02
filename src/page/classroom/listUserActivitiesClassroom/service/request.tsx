import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const ClassroomCorrectionOfActivitiesRequest = async (id: string) => {

    return await http
      .get("/user-activities-bff?id=" + id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}



