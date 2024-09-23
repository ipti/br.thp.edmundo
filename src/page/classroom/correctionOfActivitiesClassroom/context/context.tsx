import { createContext } from "react";
import { ClassroomCorrectionOfActivitiesState } from "./state";
import { ClassroomCorrectionOfActivitiesContextType } from "./types";

export const ClassroomCorrectionOfActivitiesContext = createContext<ClassroomCorrectionOfActivitiesContextType | null>(null);

const ClassroomCorrectionOfActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const { activities, isError, isLoading } = ClassroomCorrectionOfActivitiesState()

    return (
        <ClassroomCorrectionOfActivitiesContext.Provider value={{ activities, isError, isLoading }}>
            {children}
        </ClassroomCorrectionOfActivitiesContext.Provider>
    )
}

export default ClassroomCorrectionOfActivitiesProvider;