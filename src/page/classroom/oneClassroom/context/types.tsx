import { ClassroomMembers } from "../../membersClassroom/context/types";
import { ChartType, ClassroomOne, DistributeStamps, StampsType, UpdateClassroom } from "../service/type";

export interface OneClassroomContextType {
    classroomOne: ClassroomOne | undefined;
    isLoading: boolean;
    isError: boolean;
    UpdateClassroom: (id: string, body: UpdateClassroom) => void
    classroomChart: ChartType | undefined
    stamps: StampsType[] | undefined
    classroomMembersList: ClassroomMembers | undefined
    handleDistributeStamps: (body: DistributeStamps) => void
}
