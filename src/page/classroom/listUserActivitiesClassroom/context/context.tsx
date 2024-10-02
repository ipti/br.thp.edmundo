import { createContext } from "react";
import { ActivitiesSentState } from "./state";
import { ActivitiesSentContextType } from "./types";

export const ActivitiesSentContext = createContext<ActivitiesSentContextType | null>(null);

const ActivitiesSentProvider = ({ children }: { children: React.ReactNode }) => {

    const { activities, isError, isLoading } = ActivitiesSentState()

    return (
        <ActivitiesSentContext.Provider value={{ activities, isError, isLoading }}>
            {children}
        </ActivitiesSentContext.Provider>
    )
}

export default ActivitiesSentProvider;