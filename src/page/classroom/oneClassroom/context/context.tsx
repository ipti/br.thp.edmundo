import { createContext } from "react";
import { OneClassroomState } from "./state";
import { OneClassroomContextType } from "./types";

export const OneClassroomContext = createContext<OneClassroomContextType | null>(null);

const OneClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const { classroomOne, isError, isLoading, UpdateClassroom} = OneClassroomState()

    return (
        <OneClassroomContext.Provider value={{ classroomOne, isError, isLoading, UpdateClassroom }}>
            {children}
        </OneClassroomContext.Provider>
    )
}

export default OneClassroomProvider;