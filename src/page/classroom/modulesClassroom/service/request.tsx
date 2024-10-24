import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";
import { AddAtivitiesClassroom, AddClasseClassroom, AddModuleClassroom } from "../type";

export const AllModuleRequest = async (id: number) => {
  return await http
    .get("/module-bff/all?id="+id)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout()
        window.location.reload()
      }
      throw err;
    });
}

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
  return await http.post("/module-bff/add-module-classroom?idClassroom=" + body.idClassroom + "&idModule=" + body.idModule)
}

export const RemoveModuleClassroomRequest = async (body: AddModuleClassroom) => {
  return await http.put("/module-bff/remove-module-classroom?idClassroom=" + body.idClassroom + "&idModule=" + body.idModule)
}


export const UpdateModuleClassroomRequest = async (body: {active: boolean}, id: number) => {
  return await http.put("/module-bff/add-module-classroom?id="+ id, body)
}


export const AddClasseClassroomRequest = async (body: AddClasseClassroom) => {
  return await http.post("/classe-bff/add-classe-classroom?idClassroom=" + body.idClassroom + "&idClasse=" + body.idClasse)
}


export const UpdateclasseClassroomRequest = async (body: {active: boolean}, id: number) => {
  return await http.put("/classe-bff/add-classe-classroom?id="+ id, body)
}

export const AddAtivitiesClassroomRequest = async (body: AddAtivitiesClassroom) => {
  return await http.post("/activities-bff/add-activities-classroom?idClassroom=" + body.idClassroom + "&idActivities=" + body.idActivities)
}


export const UpdateAtivitiesClassroomRequest = async (body: {active: boolean}, id: number) => {
  return await http.put("/activities-bff/edit-activities-classroom?id="+ id, body)
}


