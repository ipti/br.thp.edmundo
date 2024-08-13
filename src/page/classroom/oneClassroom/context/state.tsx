import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestFindOneClassroomBff } from "../service/query";
import { ClassroomOne, UpdateClassroom } from "../service/type";
import { OneClassroomController } from "../service/controller";

export const OneClassroomState = () => {
    const { id } = useParams()
    const [classroomOne, setClassroomOne] = useState<ClassroomOne | undefined>()

    const { PutClassroomMutation } = OneClassroomController()


    const { data: classroomOneRequest, isLoading, isError } = useFetchRequestFindOneClassroomBff(id!);

    const UpdateClassroom = (id: string, body: UpdateClassroom) => {
        PutClassroomMutation.mutate({ data: body, id: id })
    }


    useEffect(() => {
        if (classroomOneRequest) {
            setClassroomOne(classroomOneRequest)
        }
    }, [classroomOneRequest])


    return { classroomOne, isLoading, isError, UpdateClassroom }
}