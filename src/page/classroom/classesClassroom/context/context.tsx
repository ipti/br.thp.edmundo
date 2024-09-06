import { createContext } from "react";
import { ClassroomclasseState } from "./state";
import { ClassroomClasseContextType } from "./type";

export const ClassroomClasseContext = createContext<ClassroomClasseContextType | null>(null);

const ClassroomClasseProvider = ({ children }: { children: React.ReactNode }) => {

    const {AddclasseClassroom, UpdateclasseClassroom, allclasseList, classeClassroomList, isError, isLoading } = ClassroomclasseState()

    return (
        <ClassroomClasseContext.Provider value={{ AddclasseClassroom, allclasseList, classeClassroomList, isError, isLoading, UpdateclasseClassroom }}>
            {children}
        </ClassroomClasseContext.Provider>
    )
}

export default ClassroomClasseProvider;