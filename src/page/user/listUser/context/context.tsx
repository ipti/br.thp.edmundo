import { createContext } from "react";
import { ListUserState } from "./state";
import { ListUserContextType } from "./types";

export const ListUserContext = createContext<ListUserContextType | null>(null);

const ListUserProvider = ({ children }: { children: React.ReactNode }) => {

    const { users, isError, isLoading } = ListUserState()

    return (
        <ListUserContext.Provider value={{ users, isError, isLoading }}>
            {children}
        </ListUserContext.Provider>
    )
}

export default ListUserProvider;