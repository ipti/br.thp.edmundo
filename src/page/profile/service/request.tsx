import http from "../../../service/axios"
import { GetIdUser, logout } from "../../../service/localstorage"
import { UpdateUser } from "./types"

export const UpdateUserRequest = async (body: UpdateUser) => {
    if (GetIdUser()) {

        return await http.put("/user-registration-bff?idUser=" + GetIdUser(), {...body, cpf: body.cpf.replace(/[^a-zA-Z0-9]/g, ''), responsable_telephone: body.responsable_telephone.replace(/[^a-zA-Z0-9]/g, ''), responsable_cpf: body.responsable_cpf.replace(/[^a-zA-Z0-9]/g, '')})
    } else {
        logout()
        window.location.reload()
    }
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

