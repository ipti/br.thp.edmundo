import { createContext } from "react";
import { EditModuleState } from "./state";
import { EditModuleContextType } from "../../type";

export const EditModuleContext = createContext<EditModuleContextType | null>(null);

const EditModuleProvider = ({ children }: { children: React.ReactNode }) => {

    const { EditModule, initialValue } = EditModuleState()

    return (
        <EditModuleContext.Provider value={{ EditModule, initialValue }}>
            {children}
        </EditModuleContext.Provider>
    )
}

export default EditModuleProvider;