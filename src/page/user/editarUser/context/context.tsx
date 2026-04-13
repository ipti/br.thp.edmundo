import { createContext } from "react";
import { EditUserState } from "./state";
import { EditUserContextType } from "./types";

export const EditUserContext = createContext<EditUserContextType | null>(null);

const EditUserProvider = ({ children }: { children: React.ReactNode }) => {

    const { users, isError, isLoading, UpdateUser, ResetPassword, AddUserReapplication, RemoveUserReapplication, reapplications } = EditUserState()

    return (
        <EditUserContext.Provider value={{ users, isError, isLoading, UpdateUser, ResetPassword, AddUserReapplication, RemoveUserReapplication, reapplications }}>
            {children}
        </EditUserContext.Provider>
    )
}

export default EditUserProvider;
