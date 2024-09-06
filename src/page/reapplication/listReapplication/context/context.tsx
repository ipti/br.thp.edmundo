import { createContext } from "react";
import { ListReapplicationState } from "./state";
import { ListReapplicationContextType } from "./types";

export const ListReapplicationContext = createContext<ListReapplicationContextType | null>(null);

const ListReapplicationProvider = ({ children }: { children: React.ReactNode }) => {

    const { reapplicationList, isError, isLoading, DeleteReapplication } = ListReapplicationState()

    return (
        <ListReapplicationContext.Provider value={{ reapplicationList, isError, isLoading, DeleteReapplication }}>
            {children}
        </ListReapplicationContext.Provider>
    )
}

export default ListReapplicationProvider;