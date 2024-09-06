import { createContext } from "react";
import { OneModuleState } from "./state";
import { OneModulesContextType } from "../../type";

export const OneModuleContext = createContext<OneModulesContextType | null>(null);

const OneModuleProvider = ({ children }: { children: React.ReactNode }) => {

    const { moduleOne, isError, isLoading} = OneModuleState()

    return (
        <OneModuleContext.Provider value={{ moduleOne, isError, isLoading }}>
            {children}
        </OneModuleContext.Provider>
    )
}

export default OneModuleProvider;