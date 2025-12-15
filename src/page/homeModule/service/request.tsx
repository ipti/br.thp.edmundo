import http from "../../../service/axios";
import { logout } from "../../../service/localstorage";
import { ViewdClassesProps } from "../type";


export const FindOneModuleClassroomRequest = async (id: string, idClassroom: string) => {
    if (id) {
        return await http
            .get("/module-bff/classroom-student?id=" + id + "&idClassroom="+idClassroom)
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


export const ViewdClassesUserRequest = async (body: ViewdClassesProps) => {
    return await http.patch("/classe-bff/viewd-classe-user", body)
  }