import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestFindChartClassroomBff, useFetchRequestFindOneClassroomBff } from "../service/query";
import { ChartType, ClassroomOne, UpdateClassroom } from "../service/type";
import { OneClassroomController } from "../service/controller";

export const OneClassroomState = () => {
    const { id } = useParams()
    const [classroomOne, setClassroomOne] = useState<ClassroomOne | undefined>()
    const [classroomChart, setClassroomChart] = useState<ChartType | undefined>()

    const { PutClassroomMutation } = OneClassroomController()


    const { data: classroomOneRequest, isLoading, isError } = useFetchRequestFindOneClassroomBff(id!);
    const { data: classroomChartRequest } = useFetchRequestFindChartClassroomBff(id!);


    const UpdateClassroom = (id: string, body: UpdateClassroom) => {
        PutClassroomMutation.mutate({ data: body, id: id })
    }


    useEffect(() => {
        if (classroomOneRequest) {
            setClassroomOne(classroomOneRequest)
        }

        if(classroomChartRequest){
            setClassroomChart(classroomChartRequest)
        }
    }, [classroomOneRequest, classroomChartRequest])


    return { classroomOne, isLoading, isError, UpdateClassroom, classroomChart }
}