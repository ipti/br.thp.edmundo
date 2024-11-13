import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestFindChartClassroomBff, useFetchRequestFindOneClassroomBff, useFetchRequestFindStamps } from "../service/query";
import { ChartType, ClassroomOne, StampsType, UpdateClassroom } from "../service/type";
import { OneClassroomController } from "../service/controller";

export const OneClassroomState = () => {
    const { id } = useParams()
    const [classroomOne, setClassroomOne] = useState<ClassroomOne | undefined>()
    const [classroomChart, setClassroomChart] = useState<ChartType | undefined>()
    const [stamps, setStamps] = useState<StampsType[] | undefined>()

    const { PutClassroomMutation } = OneClassroomController()


    const { data: classroomOneRequest, isLoading, isError } = useFetchRequestFindOneClassroomBff(id!);
    const { data: classroomChartRequest } = useFetchRequestFindChartClassroomBff(id!);

    const { data: stampsRequest } = useFetchRequestFindStamps();

    console.log(stampsRequest)


    useEffect(() => {
     if(stampsRequest){
        setStamps(stampsRequest)
     }
    }, [stampsRequest])
    

    const UpdateClassroom = (id: string, body: UpdateClassroom) => {
        PutClassroomMutation.mutate({ data: body, id: id })
    }


    useEffect(() => {
        if (classroomOneRequest) {
            setClassroomOne(classroomOneRequest)
        }

        if (classroomChartRequest) {
            setClassroomChart(classroomChartRequest)
        }
    }, [classroomOneRequest, classroomChartRequest])


    return { classroomOne, isLoading, isError, UpdateClassroom, classroomChart, stamps }
}