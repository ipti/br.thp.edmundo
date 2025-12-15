import { createContext } from "react";
import { HomeModulesState } from "./state";
import { HomeModulesContextType } from "./types";

export const HomeModulesContext = createContext<HomeModulesContextType | null>(null);

const HomeModulesProvider = ({ children }: { children: React.ReactNode }) => {

    const { modules, handleViewdClassesUser } = HomeModulesState()

    return (
        <HomeModulesContext.Provider value={{ modules, handleViewdClassesUser }}>
            {children}
        </HomeModulesContext.Provider>
    )
}

export default HomeModulesProvider;