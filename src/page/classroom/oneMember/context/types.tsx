import { Dispatch, SetStateAction } from "react";
import { ChartUserType, UpdateUser, User } from "../service/types";
import { ModuleList } from "../../modulesClassroom/context/type";

export interface UpdateUserContextType {
    initialValue: UpdateUser;
    UpdateUser: (body: UpdateUser) => void;
    user: User | undefined;
    isLoading: boolean;
    isError: boolean;
    setFile: Dispatch<SetStateAction<File[] | undefined>>
    file: File[] | undefined
    classroomUserChart: ChartUserType | undefined
    moduleAtivities: any,
    classroomModuleMedia: any
    classroomModule: ModuleList | undefined
    moduleId: any
    setModuleId: Dispatch<any>
}