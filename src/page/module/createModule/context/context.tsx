import { createContext } from "react";
import { CreateModuleState } from "./state";
import { CreateModuleContextType } from "./types";

export const CreateModuleContext = createContext<CreateModuleContextType | null>(null);

const CreateModuleProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateModule, initialValue } = CreateModuleState()

    return (
        <CreateModuleContext.Provider value={{ CreateModule, initialValue }}>
            {children}
        </CreateModuleContext.Provider>
    )
}

export default CreateModuleProvider;