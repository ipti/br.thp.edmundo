import { createContext } from "react";
import { HomeModulesState } from "./state";
import { HomeModulesContextType } from "./types";

export const HomeModulesContext = createContext<HomeModulesContextType | null>(null);

const HomeModulesProvider = ({ children }: { children: React.ReactNode }) => {

    const { modules } = HomeModulesState()

    return (
        <HomeModulesContext.Provider value={{ modules }}>
            {children}
        </HomeModulesContext.Provider>
    )
}

export default HomeModulesProvider;