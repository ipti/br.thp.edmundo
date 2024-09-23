import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestClassroomCorrectionOfActivities } from "../service/query";

export const ClassroomCorrectionOfActivitiesState = () => {
    const [activities, setactivities] = useState<any | undefined>()

    const {idUserActivities} = useParams()

    const { data: activitiesRequest, isLoading, isError } = useFetchRequestClassroomCorrectionOfActivities(idUserActivities!);
  
    useEffect(() => {
        if (activitiesRequest) {
            setactivities(activitiesRequest)
        }
    }, [activitiesRequest])


    return {activities, isLoading,isError }
}