import { useParams } from "react-router-dom";
import { CreateActivities } from "../../type";
import { CreateActivitiesController } from "../service/controller"
import { useEffect, useState } from "react";
import { useFetchRequestFindTagsActitvities } from "../service/query";
import { Tags } from "../../../profile/service/types";

export const CreateActivitiesState = () => {

    const { idClasses } = useParams()


    const initialValue: CreateActivities = {
        name: "",
        description: "",
        difficult: {id: "", name: ""},
        points_activities: 0,
        time_activities: 0,
        type_activities: {id:"", name: ""},
        expected_return: "",
        id_classes: parseInt(idClasses!)
    }
    

    const [tags, setTags] = useState<Tags | undefined>()

    const { data: tagsRequest } = useFetchRequestFindTagsActitvities()

    useEffect(() => {
        if (tagsRequest) {
            setTags(tagsRequest)
        }
    }, [tagsRequest])

    const [tagsActivities, setTagsActivities] = useState<any>([])



    const { CreateActivitiesMutation } = CreateActivitiesController();

    const CreateActivities = (body: CreateActivities) => {
        CreateActivitiesMutation.mutate({...body});
    }
    
    return { initialValue, CreateActivities, tagsActivities, setTagsActivities, tags }
}