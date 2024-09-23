import { Dispatch, SetStateAction } from "react";
import { ClasroomUser, JoinTheClassroom } from "../type";

export interface HomeContextType {
    JoinTheClassroomClassroom: (body: JoinTheClassroom) => void
    classroomUser: ClasroomUser | undefined
    searchClassroom: boolean;
    setSearchClassroom: Dispatch<SetStateAction<boolean>>;
}

