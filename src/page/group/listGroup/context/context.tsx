import { createContext } from "react";
import { ListGroupState } from "./state";
import { ListGroupContextType } from "./types";

export const ListGroupContext = createContext<ListGroupContextType | null>(null);

const ListGroupProvider = ({ children }: { children: React.ReactNode }) => {

    const { groupList, isError, isLoading, DeleteGroup} = ListGroupState()

    return (
        <ListGroupContext.Provider value={{ groupList, isError, isLoading, DeleteGroup }}>
            {children}
        </ListGroupContext.Provider>
    )
}

export default ListGroupProvider;