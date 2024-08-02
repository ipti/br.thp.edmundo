import { createContext } from "react";
import { ListClassroomState } from "./state";
import { ListClassroomContextType } from "./types";

export const ListClassroomContext = createContext<ListClassroomContextType | null>(null);

const ListClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const { classroomList, isError, isLoading } = ListClassroomState()

    return (
        <ListClassroomContext.Provider value={{ classroomList, isError, isLoading }}>
            {children}
        </ListClassroomContext.Provider>
    )
}

export default ListClassroomProvider;