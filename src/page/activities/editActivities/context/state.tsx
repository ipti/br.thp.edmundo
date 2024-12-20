import { useParams } from "react-router-dom";
import { CreateActivitiesTagsDto, EditActivities } from "../../type";
import { EditActivitiesController } from "../service/controller"
import { useEffect, useState } from "react";
import { useFetchRequestFindOneActivities, useFetchRequestFindTagsActitvities } from "../service/query";
import { difficult, type_activities } from "../../../../Controller/controllerGlobal";
import queryClient from "../../../../service/reactquery";
import { Tags } from "../../../profile/service/types";

export const EditActivitiesState = () => {

    const [is, setIs] = useState(false)

    const { id } = useParams()
    const [activitiesOne, setactivitiessOne] = useState<any | undefined>()

    const [tags, setTags] = useState<Tags | undefined>()
    const [tagsActivities, setTagsActivities] = useState<any>([])


    const { data: tagsRequest } = useFetchRequestFindTagsActitvities()

    useEffect(() => {
        if (tagsRequest) {
            setTags(tagsRequest)
        }
    }, [tagsRequest])


    const { data: activitiesOneRequest, isLoading, isError } = useFetchRequestFindOneActivities(id!);

    useEffect(() => {
        if (activitiesOneRequest && is) {
            setactivitiessOne(activitiesOneRequest)
            var tagsActivities = activitiesOneRequest?.tags_activities?.map((item: any) => { return item.tag })
            setTagsActivities(tagsActivities!)
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
        type_activities: type_activities?.find(props => props.id === activitiesOne?.type_activities) ?? { id: "", name: "" },
        expected_return: activitiesOne?.expected_return ?? ""
    }



    const { EditActivitiesMutation, requestAddTagActivitiesMutation } = EditActivitiesController();

    const EditActivities = (body: EditActivities, id: number) => {
        EditActivitiesMutation.mutate({ data: body, id: id })

        var tagsUserBody: CreateActivitiesTagsDto = {
            items: [

            ],
            idActivitie: id
        }

        for (const i of tagsActivities) {
            tagsUserBody.items.push({ idTag: i.id })
        }


        requestAddTagActivitiesMutation.mutate(tagsUserBody)
    }
    return { initialValue, EditActivities, isLoading, isError, activitiesOne, tags, tagsActivities, setTagsActivities }
}