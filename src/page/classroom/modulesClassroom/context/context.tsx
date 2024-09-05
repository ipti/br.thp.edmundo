import { createContext } from "react";
import { ClassroomModulesState } from "./state";
import { ClassroomModulesContextType } from "./type";

export const ClassroomModulesContext = createContext<ClassroomModulesContextType | null>(null);

const ClassroomModulesProvider = ({ children }: { children: React.ReactNode }) => {

    const { modulesClassroomList, isError, isLoading, AddModuleClassroom, UpdateModuleClassroom, allModules, AddclasseClassroom, UpdateclasseClassroom, AddActivitiesClassroom, UpdateActivitiesClassroom, RemoveModuleClassroom } = ClassroomModulesState()

    return (
        <ClassroomModulesContext.Provider value={{ modulesClassroomList, isError, isLoading, AddModuleClassroom, UpdateModuleClassroom, allModules, AddclasseClassroom, UpdateclasseClassroom, AddActivitiesClassroom, UpdateActivitiesClassroom, RemoveModuleClassroom }}>
            {children}
        </ClassroomModulesContext.Provider>
    )
}

export default ClassroomModulesProvider;