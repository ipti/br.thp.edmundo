import { createContext } from "react";
import { HomeActivitiesState } from "./state";
import { HomeActivitiesContextType } from "./types";

export const HomeActivitiesContext = createContext<HomeActivitiesContextType | null>(null);

const HomeActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const {  activitiesOne, JoinTheActivitiesUser, FinishActivitiesUser, onChangeFile } = HomeActivitiesState()

    return (
        <HomeActivitiesContext.Provider value={{ activitiesOne, JoinTheActivitiesUser, onChangeFile, FinishActivitiesUser }}>
            {children}
        </HomeActivitiesContext.Provider>
    )
}

export default HomeActivitiesProvider;