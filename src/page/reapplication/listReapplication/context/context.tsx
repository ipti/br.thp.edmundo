import { createContext } from "react";
import { ListReapplicationState } from "./state";
import { ListReapplicationContextType } from "./types";

export const ListReapplicationContext = createContext<ListReapplicationContextType | null>(null);

const ListReapplicationProvider = ({ children }: { children: React.ReactNode }) => {

    const { reapplicationList, isError, isLoading } = ListReapplicationState()

    return (
        <ListReapplicationContext.Provider value={{ reapplicationList, isError, isLoading }}>
            {children}
        </ListReapplicationContext.Provider>
    )
}

export default ListReapplicationProvider;