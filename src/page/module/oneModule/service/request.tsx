import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const FindOneModuleRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/module-bff?id=" + id)
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


export const DeleteClassesRequest = async (id: number) => {
    return await http
        .delete("/classes/" + id)
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });
  
  }


  export const DeleteActivitiesRequest = async (id: number) => {
    return await http
        .delete("/activities/" + id)
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });
  
  }