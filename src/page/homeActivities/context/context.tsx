import { createContext } from "react";
import { HomeActivitiesState } from "./state";
import { HomeActivitiesContextType } from "./types";

export const HomeActivitiesContext = createContext<HomeActivitiesContextType | null>(null);

const HomeActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

    const {  activitiesOne } = HomeActivitiesState()

    return (
        <HomeActivitiesContext.Provider value={{ activitiesOne }}>
            {children}
        </HomeActivitiesContext.Provider>
    )
}

export default HomeActivitiesProvider;