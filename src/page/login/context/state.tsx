import { LoginController } from "../service/controller"
import { LoginTypes } from "../service/types"

export const LoginState = () => {
    const initialValue: LoginTypes = {
        email: "",
        password: ""
    }

    const { LoginRequestMutation } = LoginController()

    const Login = (body: LoginTypes) => {
        LoginRequestMutation.mutate(body)
    }
    return { initialValue, Login }
}