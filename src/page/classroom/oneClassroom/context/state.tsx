import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestFindOneClassroomBff } from "../service/query";
import { ClassroomOne } from "../service/type";

export const OneClassroomState = () => {
    const {id} = useParams()
    const [classroomOne, setClassroomOne] = useState<ClassroomOne | undefined>()


    const { data: classroomOneRequest, isLoading, isError } = useFetchRequestFindOneClassroomBff(id!);


    useEffect(() => {
        if (classroomOneRequest) {
            setClassroomOne(classroomOneRequest)
        }
    }, [classroomOneRequest])


    return {classroomOne, isLoading,isError }
}