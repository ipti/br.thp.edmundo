import { createContext } from "react";
import { CreateUserState } from "./state";
import { SignUpContextTypes } from "./types";

export const SignUpContext = createContext<SignUpContextTypes | null>(null);

const SignUpProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateUser, initialValue } = CreateUserState()

    return (
        <SignUpContext.Provider value={{ CreateUser, initialValue }}>
            {children}
        </SignUpContext.Provider>
    )
}

export default SignUpProvider;