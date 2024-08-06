import { useEffect, useState } from "react";
import { useFetchRequestClassroomList } from "../service/query";
import { ClassroomList, JoinTheClassroom } from "../service/types";
import { ListClassroomController } from "../service/controller";

export const ListClassroomState = () => {
    const [classroomList, setClassroomList] = useState<ClassroomList | undefined>()


    const { data: classroomRequest, isLoading, isError } = useFetchRequestClassroomList();


    const { JoinTheClassroomMutation } = ListClassroomController();

    const JoinTheClassroomClassroom = (body: JoinTheClassroom) => {
        JoinTheClassroomMutation.mutate(body)
    }

    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    return {classroomList, isLoading,isError, JoinTheClassroomClassroom }
}