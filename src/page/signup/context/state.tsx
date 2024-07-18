import { CreateUserController } from "../service/controller"
import { CreateUserTypes } from "../service/types"

export const CreateUserState = () => {
    const initialValue: CreateUserTypes = {
        email: "",
        name: "",
        password: ""
    }



    const { CreateUserRequestMutation } = CreateUserController();

    const CreateUser = (body: CreateUserTypes) => {
        CreateUserRequestMutation.mutate(body)
    }
    return { initialValue, CreateUser }
}