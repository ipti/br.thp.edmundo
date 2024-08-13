import { ClassroomOne, UpdateClassroom } from "../service/type";

export interface OneClassroomContextType {
    classroomOne: ClassroomOne | undefined;
    isLoading: boolean;
    isError: boolean;
    UpdateClassroom: (id: string, body: UpdateClassroom) => void
}
