import { useEffect } from "react"
import { LoginController } from "../service/controller"
import { LoginTypes } from "../service/types"
import { logout } from "../../../service/localstorage"

export const LoginState = () => {
    const initialValue: LoginTypes = {
        email: "",
        password: ""
    }

    useEffect(() => {
        logout()
    }, [])


    const { LoginRequestMutation } = LoginController();

    const Login = (body: LoginTypes) => {
        LoginRequestMutation.mutate(body)
    }
    return { initialValue, Login }
}