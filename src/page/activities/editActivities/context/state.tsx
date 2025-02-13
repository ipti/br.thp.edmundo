import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { difficult, type_activities } from "../../../../Controller/controllerGlobal";
import queryClient from "../../../../service/reactquery";
import { Tags } from "../../../profile/service/types";
import { ActivitiesOne, CreateActivitiesTagsDto, EditActivities, PropsCorrectAnswerMetricActivities, PropsQuestionUpdate } from "../../type";
import { EditActivitiesController } from "../service/controller";
import { useFetchRequestFindOneActivities, useFetchRequestFindTagsActitvities } from "../service/query";

export const EditActivitiesState = () => {

    const [isLoadingMetric, setIsLoadingMetric] = useState(true)

    const [is, setIs] = useState(false)

    const { id } = useParams()
    const [activitiesOne, setactivitiessOne] = useState<ActivitiesOne | undefined>()

    const [tags, setTags] = useState<Tags | undefined>()
    const [tagsActivities, setTagsActivities] = useState<any>([])


    const { data: tagsRequest } = useFetchRequestFindTagsActitvities()

    const [metricCorrectAnswer, setMetricCorrectAnswer] = useState<{ idMetric: number, correctAnswer: string }[]>([])


    useEffect(() => {
        if (tagsRequest) {
            setTags(tagsRequest)
        }
    }, [tagsRequest])


    const { data: activitiesOneRequest, isLoading, isError } = useFetchRequestFindOneActivities(id!);

    useEffect(() => {
        if (activitiesOneRequest && is) {
            setactivitiessOne(activitiesOneRequest);
            
            var tagsActivities = activitiesOneRequest?.tags_activities?.map((item: any) => { return item.tag })
            setTagsActivities(tagsActivities!);
        }
    }, [activitiesOneRequest, is, metricCorrectAnswer])

    useEffect(() => {
        if (activitiesOneRequest && isLoadingMetric) {
            var array: any = []
            activitiesOneRequest?.activities_group_avaliation?.forEach((item: any) => {
                item?.group_avaliations?.metric_group_avaliation?.forEach((metric: any) => {
                    array.push({ correctAnswer: metric.metric_group_avaliation_correct_answer[0]?.correct_answer ?? "", idMetric: metric.id })
                    // setMetricCorrectAnswer(prevItems => [...prevItems, { correctAnswer: metric.metric_group_avaliation_correct_answer[0]?.correct_answer ?? "", idMetric: metric.id }])
                })
            })
            setMetricCorrectAnswer(array)
            setIsLoadingMetric(false)
        }
    }, [activitiesOneRequest, isLoadingMetric, metricCorrectAnswer])

    useEffect(() => {
        queryClient.removeQueries("useRequestsOneActivities")
        setIs(true)
    }, [])


    const findGroups = (array1: any) => {
        return array1?.map((item: any) => { return item.group_avaliations });
    }

    const initialValue: EditActivities = {
        name: activitiesOne?.name ?? "",
        description: activitiesOne?.description ?? "",
        difficult: difficult?.find(props => props.id === activitiesOne?.difficult) ?? { id: "", name: "" },
        points_activities: activitiesOne?.points_activities ?? 0,
        time_activities: activitiesOne?.time_activities ?? 0,
        type_activities: type_activities?.find(props => props.id === activitiesOne?.type_activities) ?? { id: "", name: "" },
        expected_return: activitiesOne?.expected_return ?? "",
        groups: findGroups(activitiesOne?.activities_group_avaliation) ?? [],
    }


    const { EditActivitiesMutation, requestAddTagActivitiesMutation, CorrectAnswerMetricActivitiesMutation, UpdateQuestionMutation } = EditActivitiesController();


    const CorrectAnswerMetricActivities = (id: number, body: PropsCorrectAnswerMetricActivities[]) => {
        CorrectAnswerMetricActivitiesMutation.mutate({ data: body, id: id })
    }


    const handleQuestionUpdate = ( body: PropsQuestionUpdate) => {
        UpdateQuestionMutation.mutate({  data: body })
    }



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
    return { initialValue, EditActivities, isLoading, isError, activitiesOne, tags, tagsActivities, setTagsActivities, CorrectAnswerMetricActivities, metricCorrectAnswer, setMetricCorrectAnswer, handleQuestionUpdate }
}