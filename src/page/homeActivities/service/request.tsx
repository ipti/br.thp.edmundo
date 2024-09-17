import http from "../../../service/axios";
import { logout } from "../../../service/localstorage";

  
  export const ActivitiesRequest = async (id: string) => {

    return await http
      .get("/activities/"+id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}