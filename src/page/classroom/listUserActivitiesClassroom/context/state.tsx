import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestActivitiesSent } from "../service/query";

export const ActivitiesSentState = () => {
    const [activities, setactivities] = useState<any | undefined>()

    const {idClassroomUser} = useParams()

    const { data: activitiesRequest, isLoading, isError } = useFetchRequestActivitiesSent(idClassroomUser!);
  
    useEffect(() => {
        if (activitiesRequest) {
            setactivities(activitiesRequest)
        }
    }, [activitiesRequest])


    return {activities, isLoading,isError }
}