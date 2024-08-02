import { useEffect, useState } from "react";
import { useFetchRequestClassroomList } from "../service/query";
import { ClassroomList } from "../service/types";

export const ListClassroomState = () => {
    const [classroomList, setClassroomList] = useState<ClassroomList | undefined>()


    const { data: classroomRequest, isLoading, isError } = useFetchRequestClassroomList();


    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    return {classroomList, isLoading,isError }
}