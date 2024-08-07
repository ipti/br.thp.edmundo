import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const MembersClassroomRequest = async (id: string) => {

    return await http
      .get("/classroom-bff/" + id +"/members?id="+id)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}



