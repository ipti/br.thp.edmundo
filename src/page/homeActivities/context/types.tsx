import { ClasroomUser, JoinTheClassroom } from "../type";

export interface HomeContextType {
    JoinTheClassroomClassroom: (body: JoinTheClassroom) => void
    classroomUser: ClasroomUser | undefined
}

