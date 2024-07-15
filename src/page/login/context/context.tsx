import { createContext } from "react";
import { LoginState } from "./state";
import { LoginContextText } from "./types";

export const LoginContext = createContext<LoginContextText | null>(null);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {

    const { Login, initialValue } = LoginState()

    return (
        <LoginContext.Provider value={{ Login, initialValue }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;