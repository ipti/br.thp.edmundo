import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";
import { AddClasseClassroom } from "../type";

export const AllclasseRequest = async () => {
  return await http
    .get("/classes")
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

export const AllclasseClassroomRequest = async (id: number) => {
  return await http
    .get("/classe-bff?id="+ id)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}




export const AddClasseClassroomRequest = async (body: AddClasseClassroom) => {
  return await http.post("/classe-bff/add-classe-classroom?idClassroom=" + body.idClassroom + "&idClasse=" + body.idClasse, body)
}


export const UpdateclasseClassroomRequest = async (body: {active: boolean}, id: number) => {
  return await http.put("/classe-bff/add-classe-classroom?id="+ id, body)
}



