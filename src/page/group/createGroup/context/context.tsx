import { createContext } from "react";
import { CreateGroupState } from "./state";
import { CreateGroupContextType } from "./types";

export const CreateGroupContext = createContext<CreateGroupContextType | null>(null);

const CreateGroupProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateGroup, typeGroupList } = CreateGroupState()

    return (
        <CreateGroupContext.Provider value={{ CreateGroup, typeGroupList }}>
            {children}
        </CreateGroupContext.Provider>
    )
}

export default CreateGroupProvider;