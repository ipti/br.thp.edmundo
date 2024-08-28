import { useParams } from "react-router-dom";
import { CreateActivities } from "../../type";
import { CreateActivitiesController } from "../service/controller"

export const CreateActivitiesState = () => {

    const { idModule } = useParams()


    const initialValue: CreateActivities = {
        name: "",
        description: "",
        difficult: 0,
        points_activities: 0,
        time_activities: 0,
        type_activities: 0,
    }



    const { CreateActivitiesMutation } = CreateActivitiesController();

    const CreateActivities = (body: CreateActivities) => {
        CreateActivitiesMutation.mutate(body)
    }
    return { initialValue, CreateActivities }
}