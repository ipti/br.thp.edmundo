import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const FindOneClassroomRequest = async (id: string) => {
    if (id) {
        return await http
            .get("/classroom-bff/" + id)
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

