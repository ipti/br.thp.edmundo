import { ClassroomList, JoinTheClassroom } from "../service/types";

export interface ListClassroomContextType {
    classroomList: ClassroomList | undefined;
    isLoading: boolean;
    isError: boolean;
    JoinTheClassroomClassroom: (body: JoinTheClassroom) => void
    DeleteClassroom: (id: number) => void
}

export interface Classroom {
    id: number
    name: string
    owner_user_fk: number
    reapplication_fk: number
    active: boolean
    createdAt: string
    updatedAt: string
    isOpen: boolean
  }