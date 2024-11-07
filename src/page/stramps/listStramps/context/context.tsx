import { createContext } from "react";
import { ListStampsState } from "./state";
import { ListStampsContextType } from "./types";

export const ListStampsContext = createContext<ListStampsContextType | null>(null);

const ListStampsProvider = ({ children }: { children: React.ReactNode }) => {

    const { stamps, isError, isLoading, DeleteStamps } = ListStampsState()

    return (
        <ListStampsContext.Provider value={{ stamps, isError, isLoading, DeleteStamps }}>
            {children}
        </ListStampsContext.Provider>
    )
}

export default ListStampsProvider;