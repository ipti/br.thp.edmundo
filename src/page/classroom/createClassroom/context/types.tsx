import {CreateClassroom } from "../service/types";

export interface CreateClassroomContextType {
    initialValue: CreateClassroom;
    CreateClassroom: (body: CreateClassroom) => void;
}