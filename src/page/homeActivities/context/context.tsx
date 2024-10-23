import { createContext } from "react";
import { HomeActivitiesState } from "./state";
import { HomeActivitiesContextType } from "./types";

export const HomeActivitiesContext = createContext<HomeActivitiesContextType | null>(null);

const HomeActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const {  activitiesOne, JoinTheActivitiesUser, FinishActivitiesUser, onChangeFile, initialValueForm, ResponseActivities } = HomeActivitiesState()

    return (
        <HomeActivitiesContext.Provider value={{ activitiesOne, JoinTheActivitiesUser, onChangeFile, FinishActivitiesUser, initialValueForm, ResponseActivities }}>
            {children}
        </HomeActivitiesContext.Provider>
    )
}

export default HomeActivitiesProvider;