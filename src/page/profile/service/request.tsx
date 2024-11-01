import http from "../../../service/axios"
import { GetIdUser, logout } from "../../../service/localstorage"
import { CreateUserTagsDto, UpdateUser } from "./types"

export const UpdateUserRequest = async (body: UpdateUser) => {
    if (GetIdUser()) {
        return await http.put("/user-registration-bff?idUser=" + GetIdUser(), { ...body, responsable_telephone: body?.responsable_telephone?.replace(/[^a-zA-Z0-9]/g, '') })
    } else {
        logout()
        window.location.reload()
    }
}

export const AddTagUser = async (body: CreateUserTagsDto) => {
    return await http.post("/tags-bff/users", body)
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