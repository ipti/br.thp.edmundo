import http from "../../../../../service/axios";
import { logout } from "../../../../../service/localstorage";

export const FindMigrationProjectRequest = async () => {
    return await http
      .get("/migration-bff")
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  }

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