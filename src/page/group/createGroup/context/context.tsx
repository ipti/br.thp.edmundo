import { createContext } from "react";
import { CreateGroupState } from "./state";
import { CreateGroupContextType } from "./types";

export const CreateGroupContext = createContext<CreateGroupContextType | null>(null);

const CreateGroupProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateGroup, initialValue } = CreateGroupState()

    return (
        <CreateGroupContext.Provider value={{ CreateGroup, initialValue }}>
            {children}
        </CreateGroupContext.Provider>
    )
}

export default CreateGroupProvider;