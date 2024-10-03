import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PropsFormActivities } from "../../type"
import { EditActivitiesController } from "../../editActivities/service/controller"





export const CreateOrEditFormState = () => {

    const [form, setform] = useState<PropsFormActivities | undefined>({questions: []})

    const [responses, setResponses] = useState<any | undefined>()


    const { id } = useParams()

    const { CreateFormMutation } = EditActivitiesController();

    const CreateForm = () => {
        CreateFormMutation.mutate({data: form!})
    }

    useEffect(() => {
        
    }, [id])


    return {
        form, setform, responses, CreateForm
    }
}

