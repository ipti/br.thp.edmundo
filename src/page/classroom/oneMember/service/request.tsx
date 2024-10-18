import http from "../../../../service/axios"
import { GetIdUser, logout } from "../../../../service/localstorage"
import { UpdateUser } from "./types"

export const UpdateUserRequest = async (body: UpdateUser) => {
    if (GetIdUser()) {

  

        return await http.put("/user-registration-bff?idUser=" + GetIdUser(), {...body,  responsable_telephone: body?.responsable_telephone?.replace(/[^a-zA-Z0-9]/g, '')})
    } else {
        logout()
        window.location.reload()
    }
}

export const FindChartClassroomUserRequest = async (idClassroom: string, idUser: string) => {
    if (idClassroom && idUser) {
        return await http
            .get("/chart-bff/classroom-user?idClassroom=" + idClassroom+"&idUser="+idUser)
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


  export const FindChartClassroomModuleNotasUserRequest = async (idClassroom: string, idUser: string, idModule: string) => {
    if (idClassroom && idUser) {
        return await http
            .get("/chart-bff/module-user?idClassroom=" + idClassroom+"&idUser="+idUser+"&idModule="+idModule)
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

  export const FindChartClassroomModuleNotasUserMediaRequest = async (idClassroom: string, idUser: string) => {
    if (idClassroom && idUser) {
        return await http
            .get("/chart-bff/module-user-media?idClassroom=" + idClassroom+"&idUser="+idUser)
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


export const FindOneUserRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/user-registration-bff/" + id)
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


export const requestUpdateAvatarRegistration = ( id: number, file: File) => {

    const formData = new FormData()
  
    formData.append("file", file)
  
    return http
      .put("/user-registration-bff/avatar/" + id, formData)
      .then(response => response.data)
      .catch(err => {
        if (err.response.status === 401) {
          window.location.reload()
        }
        alert(err.response.message)
  
        throw err;
      });
  };