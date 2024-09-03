import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";
import { AddModuleClassroom } from "../type";

export const AllModuleRequest = async () => {
  return await http
    .get("/modules")
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const AllModuleClassroomRequest = async (id: number) => {
  return await http
    .get("/module-bff/classroom?id="+ id)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}




export const AddModuleClassroomRequest = async (body: AddModuleClassroom) => {
  return await http.post("/module-bff/add-module-classroom?idClassroom=" + body.idClassroom + "&idModule=" + body.idModule, body)
}


export const UpdateModuleClassroomRequest = async (body: {active: boolean}, id: number) => {
  return await http.put("/module-bff/add-module-classroom?id="+ id, body)
}



