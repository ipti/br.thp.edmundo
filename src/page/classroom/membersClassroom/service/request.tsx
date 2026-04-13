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

export const RemoveMemberFromClassroomRequest = async (body: {
  idUser: number;
  idClassroom: number;
}) => {
  return await http
    .put(
      "/classroom-bff/remove-from-classroom?idClassroom=" +
        body.idClassroom +
        "&idUser=" +
        body.idUser
    )
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};

export const TeachersByReapplicationRequest = async (idReapplication: number) => {
  return await http
    .get("/classroom-bff/teachers-by-reapplication?idReapplication=" + idReapplication)
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};

export const AddTeacherToClassroomRequest = async (body: {
  idUser: number;
  idClassroom: number;
}) => {
  return await http
    .put(
      "/classroom-bff/join-the-classroom?idClassroom=" +
        body.idClassroom +
        "&idUser=" +
        body.idUser
    )
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};
