import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestClassroomCorrectionOfActivities } from "../service/query";
import { CreateAvaliationController } from "../service/controller";
import { CreateNotasType } from "../service/types";
import queryClient from "../../../../service/reactquery";

export const ClassroomCorrectionOfActivitiesState = () => {
    const [activities, setactivities] = useState<any | undefined>()
    const [is, setIs] = useState(false)

    useEffect(() => {

        queryClient.removeQueries("useRequestsClassroomCorrectionOfActivities")
        setIs(true)
    }, [])


    const { idUserActivities } = useParams()

    const { data: activitiesRequest, isLoading, isError } = useFetchRequestClassroomCorrectionOfActivities(idUserActivities!);

    const { CreateAvaliationMutation, UpdateAvaliationMutation } = CreateAvaliationController()


    const createAvaliation = (body: CreateNotasType, id: number) => {
        CreateAvaliationMutation.mutate({ data: body, id: id })
    }


    const updateAvaliation = (body: CreateNotasType, id: number) => {
        UpdateAvaliationMutation.mutate({ data: body, id: id })
    }

    useEffect(() => {
        if (activitiesRequest && is) {
            setactivities(activitiesRequest)
        }
    }, [activitiesRequest, is])


    return { activities, isLoading, isError, createAvaliation, updateAvaliation }
}