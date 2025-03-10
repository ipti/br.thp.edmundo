import http from "../../../../../service/axios";
import {
  GetIdReapplication,
  logout,
} from "../../../../../service/localstorage";

export const FindMigrationProjectRequest = async () => {
  return await http
    .get("/migration-bff")
    .then((response) => response.data)
    .catch((err) => {
      if (err.response.status === 401) {
        logout();
        window.location.reload();
      }
      throw err;
    });
};

export const FindMigrationClassroomListequest = async (idProject?: string) => {
  if (idProject) {
    return await http
      .get("/migration-bff/classroom-list?idProject=" + idProject)
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout();
          window.location.reload();
        }
        throw err;
      });
  }
};

export const MigrationClassroomRequest = async (body: {
  idClassroom: number;
}) => {
  return await http.post("/migration-bff/meubentocoded", {
    ...body,
    idReaplication: parseInt(GetIdReapplication() ?? "1"),
  });
};

//   export const FindMigrationProjectClassroomListRequest = async () => {
//     return await http
//       .get("/migration-bff/classroom-list")
//       .then((response) => response.data)
//       .catch((err) => {
//         if (err.response.status === 401) {
//           logout()
//           window.location.reload()
//         }
//         throw err;
//       });
//   }
