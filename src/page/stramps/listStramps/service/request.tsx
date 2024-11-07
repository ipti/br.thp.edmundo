import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const FindStampsRequest = async () => {
    return await http
        .get("/stamps")
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });

}

export const DeleteStampsRequest = async (id: number) => {
    return await http
        .delete("/stamps/" + id)
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });

}