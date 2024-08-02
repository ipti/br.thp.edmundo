import { createContext } from "react";
import { CreateReapplicationState } from "./state";
import { CreateReapplicationContextType } from "./types";

export const CreateReapplicationContext = createContext<CreateReapplicationContextType | null>(null);

const CreateReapplicationProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateReapplication, initialValue } = CreateReapplicationState()

    return (
        <CreateReapplicationContext.Provider value={{ CreateReapplication, initialValue }}>
            {children}
        </CreateReapplicationContext.Provider>
    )
}

export default CreateReapplicationProvider;