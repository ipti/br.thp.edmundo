import { ClassroomOne } from "../service/type";

export interface OneClassroomContextType {
    classroomOne: ClassroomOne | undefined;
    isLoading: boolean;
    isError: boolean;
}
