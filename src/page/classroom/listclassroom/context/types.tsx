import { ClassroomList } from "../service/types";

export interface ListClassroomContextType {
    classroomList: ClassroomList | undefined;
    isLoading: boolean;
    isError: boolean;
}