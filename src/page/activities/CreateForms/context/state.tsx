import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PropsFormActivities } from "../../type"
import { EditActivitiesController } from "../../editActivities/service/controller"
import Swal from "sweetalert2"





export const CreateOrEditFormState = () => {

    const [form, setform] = useState<PropsFormActivities | undefined>({questions: []})

    const [responses] = useState<any | undefined>()


    const { id } = useParams()

    const { CreateFormMutation } = EditActivitiesController();

    const CreateForm = () => {

        const allQuestionsHaveResponse = form?.questions.every((question) =>
            question.options.some((option) => option.isResponse === true)
          );
        
          if (!allQuestionsHaveResponse) {
            Swal.fire("É necessário ao menos uma opção seja selecionada nas perguntas.");
            return;
          }
        
        CreateFormMutation.mutate({data: form!})
    }

    useEffect(() => {
        
    }, [id])


    return {
        form, setform, responses, CreateForm
    }
}

