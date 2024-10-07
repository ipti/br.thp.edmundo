import { createContext } from "react";
import { ClassroomCorrectionOfActivitiesState } from "./state";
import { ClassroomCorrectionOfActivitiesContextType } from "./types";

export const ClassroomCorrectionOfActivitiesContext = createContext<ClassroomCorrectionOfActivitiesContextType | null>(null);

const ClassroomCorrectionOfActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const { activities, isError, isLoading, createAvaliation, updateAvaliation } = ClassroomCorrectionOfActivitiesState()

    return (
        <ClassroomCorrectionOfActivitiesContext.Provider value={{ activities, isError, isLoading, createAvaliation, updateAvaliation }}>
            {children}
        </ClassroomCorrectionOfActivitiesContext.Provider>
    )
}

export default ClassroomCorrectionOfActivitiesProvider;