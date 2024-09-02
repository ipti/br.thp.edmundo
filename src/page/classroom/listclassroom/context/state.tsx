import { useEffect, useState } from "react";
import { useFetchRequestClassroomList } from "../service/query";
import { ClassroomList, JoinTheClassroom } from "../service/types";
import { ListClassroomController } from "../service/controller";

export const ListClassroomState = () => {
    const [classroomList, setClassroomList] = useState<ClassroomList | undefined>()


    const { data: classroomRequest, isLoading, isError } = useFetchRequestClassroomList();


    const { JoinTheClassroomMutation, DeleteClassroomRequestMutation } = ListClassroomController();

    const JoinTheClassroomClassroom = (body: JoinTheClassroom) => {
        JoinTheClassroomMutation.mutate(body)
    }

    const DeleteClassroom = (id: number) => {
        DeleteClassroomRequestMutation.mutate(id)
    }

    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    return {classroomList, isLoading,isError, JoinTheClassroomClassroom, DeleteClassroom }
}