import { createContext } from "react";
import { ActivitiesClassroomState } from "./state";
import { ActivitiesClassroomContextType } from "./types";

export const ActivitiesClassroomContext = createContext<ActivitiesClassroomContextType | null>(null);

const ActivitiesClassroomProvider = ({ children }: { children: React.ReactNode }) => {

    const { classroomActivitiesList, isError, isLoading } = ActivitiesClassroomState()

    return (
        <ActivitiesClassroomContext.Provider value={{ classroomActivitiesList, isError, isLoading }}>
            {children}
        </ActivitiesClassroomContext.Provider>
    )
}

export default ActivitiesClassroomProvider;