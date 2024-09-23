import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestMActivitiesClassroom } from "../service/query";
import { ClassroomActivities } from "../service/types";

export const ActivitiesClassroomState = () => {
    const [classroomActivitiesList, setClassroomList] = useState<ClassroomActivities | undefined>()

    const {id} = useParams()

    const { data: classroomRequest, isLoading, isError } = useFetchRequestMActivitiesClassroom(id!);
  
    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])


    return {classroomActivitiesList, isLoading,isError }
}