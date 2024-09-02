import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const FindUserRequest = async () => {
    return await http
        .get("/users")
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });

}

export const DeleteUserRequest = async (id: number) => {
    return await http
        .delete("/users/" + id)
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });

}