import { createContext } from "react";
import { UpdateUserState } from "./state";
import { UpdateUserContextType } from "./types";

export const UpdateUserContext = createContext<UpdateUserContextType | null>(null);

const UpdateUserProvider = ({ children }: { children: React.ReactNode }) => {

    const { UpdateUser, initialValue, user, isError, isLoading, file, setFile, classroomUserChart } = UpdateUserState()

    return (
        <UpdateUserContext.Provider value={{ UpdateUser, initialValue, user, isError, isLoading, file, setFile, classroomUserChart}}>
            {children}
        </UpdateUserContext.Provider>
    )
}

export default UpdateUserProvider;