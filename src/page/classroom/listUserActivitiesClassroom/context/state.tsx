import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestActivitiesSent } from "../service/query";
import { CreateAvaliationController } from "../service/controller";
import { CreateNotasAvaliationType } from "../service/types";

export const ActivitiesSentState = () => {
    const [activities, setactivities] = useState<any | undefined>()

    const {idClassroomUser} = useParams()

    const { data: activitiesRequest, isLoading, isError } = useFetchRequestActivitiesSent(idClassroomUser!);

    const { CreateAvaliationMutation, UpdateAvaliationMutation, UpdateAvaliationAllMutation } = CreateAvaliationController()


    const createAvaliation = (body: CreateNotasAvaliationType, id: number) => {
        CreateAvaliationMutation.mutate({ data: body, id: id })
    }


    const updateAvaliation = (body: CreateNotasAvaliationType, id: number) => {
        UpdateAvaliationMutation.mutate({ data: body, id: id })
    }

    const updateAvaliationAll = (id: number) => {
        UpdateAvaliationAllMutation.mutate({ id: id })
    }
  
    useEffect(() => {
        if (activitiesRequest) {
            setactivities(activitiesRequest)
        }
    }, [activitiesRequest])


    return {activities, isLoading,isError, createAvaliation, updateAvaliation, updateAvaliationAll }
}