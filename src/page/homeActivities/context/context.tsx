import { createContext } from "react";
import { HomeState } from "./state";
import { HomeContextType } from "./types";

export const HomeContext = createContext<HomeContextType | null>(null);

const HomeProvider = ({ children }: { children: React.ReactNode }) => {

    const {  JoinTheClassroomClassroom, classroomUser } = HomeState()

    return (
        <HomeContext.Provider value={{  JoinTheClassroomClassroom, classroomUser }}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider;