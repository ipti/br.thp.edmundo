import { createContext } from "react";
import { CreateClassesState } from "./state";
import { CreateClassesContextType } from "../../type";

export const CreateClassesContext = createContext<CreateClassesContextType | null>(null);

const CreateClassesProvider = ({ children }: { children: React.ReactNode }) => {

    const { CreateClasses, initialValue } = CreateClassesState()

    return (
        <CreateClassesContext.Provider value={{ CreateClasses, initialValue }}>
            {children}
        </CreateClassesContext.Provider>
    )
}

export default CreateClassesProvider;