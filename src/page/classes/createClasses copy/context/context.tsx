import { createContext } from "react";
import { EditClassesState } from "./state";
import { EditClassesContextType } from "../../type";

export const EditClassesContext = createContext<EditClassesContextType | null>(null);

const EditClassesProvider = ({ children }: { children: React.ReactNode }) => {

    const { EditClasses, initialValue, classesOne } = EditClassesState()

    return (
        <EditClassesContext.Provider value={{ EditClasses, initialValue, classesOne }}>
            {children}
        </EditClassesContext.Provider>
    )
}

export default EditClassesProvider;