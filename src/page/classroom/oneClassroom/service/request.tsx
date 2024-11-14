import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";
import { DistributeStamps, UpdateClassroom } from "./type";

export const FindOneClassroomRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/classroom-bff/" + id)
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


export const FindStampsRequest = async () => {
      return await http
          .get("/stamps")
          .then((response) => response.data)
          .catch((err) => {
              if (err.response.status === 401) {
                  logout()
                  window.location.reload()
              }
              throw err;
          });
}


export const FindChartClassroomRequest = async (id: string) => {
  if (id) {
      return await http
          .get("/chart-bff/classroom?id=" + id)
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




export const PutClassroomRequest = async (id: string, body: UpdateClassroom) => {
    if (id) {
      return await http
        .put("/classroom/" + id, body)
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


  export const DitributeStampsRequest = async (body: DistributeStamps) => {

      return await http
        .post("/stamp-bff/users", body)
        .then((response) => response.data)
        .catch((err) => {
          if (err.response.status === 401) {
            logout()
            window.location.reload()
          }
          throw err;
        });
    
  }