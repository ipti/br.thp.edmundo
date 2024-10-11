import { useParams } from "react-router-dom";
import { EditActivities } from "../../type";
import { EditActivitiesController } from "../service/controller"
import { useEffect, useState } from "react";
import { useFetchRequestFindOneActivities } from "../service/query";
import { difficult, type_activities } from "../../../../Controller/controllerGlobal";
import queryClient from "../../../../service/reactquery";

export const EditActivitiesState = () => {

const [is, setIs] = useState(false)
    
    const { id } = useParams()
    const [activitiesOne, setactivitiessOne] = useState<any | undefined>()



    const { data: activitiesOneRequest, isLoading, isError } = useFetchRequestFindOneActivities(id!);

    useEffect(() => {
        if (activitiesOneRequest && is) {
            setactivitiessOne(activitiesOneRequest)
        }
    }, [activitiesOneRequest, is])

    useEffect(() => {

        queryClient.removeQueries("useRequestsOneActivities")
        setIs(true)
    }, [])
    


    const initialValue: EditActivities = {
        name: activitiesOne?.name ?? "",
        description: activitiesOne?.description ?? "",
        difficult: difficult?.find(props => props.id === activitiesOne?.difficult) ?? { id: "", name: "" },
        points_activities: activitiesOne?.points_activities ?? 0,
        time_activities: activitiesOne?.time_activities ?? 0,
        type_activities: type_activities?.find(props => props.id === activitiesOne?.type_activities) ?? {id: "", name: ""},
        expected_return: activitiesOne?.expected_return ?? ""
    }



    const { EditActivitiesMutation } = EditActivitiesController();

    const EditActivities = (body: EditActivities, id: number) => {
        EditActivitiesMutation.mutate({ data: body, id: id })
    }
    return { initialValue, EditActivities, isLoading, isError, activitiesOne }
}