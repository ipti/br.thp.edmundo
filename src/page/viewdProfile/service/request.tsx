import http from "../../../service/axios";
import { logout } from "../../../service/localstorage";


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


export const FindTagsUserRequest = async () => {
    return await http
        .get("/tags-bff/users-all")
        .then((response) => response.data)
        .catch((err) => {
            if (err.response.status === 401) {
                logout()
                window.location.reload()
            }
            throw err;
        });

}


export const requestUpdateAvatarRegistration = (id: number, file: File) => {

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