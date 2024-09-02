import { useParams } from "react-router-dom";
import { CreateActivities } from "../../type";
import { CreateActivitiesController } from "../service/controller"

export const CreateActivitiesState = () => {

    const { idClasses } = useParams()


    const initialValue: CreateActivities = {
        name: "",
        description: "",
        difficult: {id: "", name: ""},
        points_activities: 0,
        time_activities: 0,
        type_activities: "CODE",
        id_classes: parseInt(idClasses!)
    }



    const { CreateActivitiesMutation } = CreateActivitiesController();

    const CreateActivities = (body: CreateActivities) => {
        CreateActivitiesMutation.mutate({...body})
    }
    return { initialValue, CreateActivities }
}