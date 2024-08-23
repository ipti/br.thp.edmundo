import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage";

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
