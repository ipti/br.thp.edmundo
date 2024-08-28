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


// export const PutModuleRequest = async (id: string, body: UpdateClassroom) => {
//     if (id) {
//       return await http
//         .put("/modules/" + id, body)
//         .then((response) => response.data)
//         .catch((err) => {
//           if (err.response.status === 401) {
//             logout()
//             window.location.reload()
//           }
//           throw err;
//         });
//     }
//   }