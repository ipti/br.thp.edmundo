import { createContext } from "react";
import { EditActivitiesState } from "./state";
import { EditActivitiesType } from "../../type";

export const EditActivitiesContext = createContext<EditActivitiesType | null>(null);

const EditActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const { EditActivities, initialValue, activitiesOne, isError, isLoading } = EditActivitiesState()

    return (
        <EditActivitiesContext.Provider value={{ EditActivities, initialValue, activitiesOne, isError, isLoading }}>
            {children}
        </EditActivitiesContext.Provider>
    )
}

export default EditActivitiesProvider;