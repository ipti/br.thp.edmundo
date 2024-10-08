import { CreateUserController } from "../service/controller"
import { CreateUserTypes } from "../service/types"

export const CreateUserState = () => {
    const initialValue: any = {
        email: "",
        name: "",
        password: "",
        role: ""
    }



    const { CreateUserRequestMutation } = CreateUserController();

    const CreateUser = (body: CreateUserTypes) => {
        CreateUserRequestMutation.mutate({...body })
    }
    return { initialValue, CreateUser }
}