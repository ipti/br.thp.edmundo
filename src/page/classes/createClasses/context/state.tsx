import { useParams } from "react-router-dom";
import { CreateClasses } from "../../type";
import { CreateClassesController } from "../service/controller"

export const CreateClassesState = () => {

    const { idModule } = useParams()


    const initialValue: CreateClasses = {
        name: "",
        duration: 0,
        necessary_material: "",
        objective: "",
        module_id: parseInt(idModule!),
        content: "",
    }



    const { CreateClassesMutation } = CreateClassesController();

    const CreateClasses = (body: CreateClasses) => {
        CreateClassesMutation.mutate(body)
    }
    return { initialValue, CreateClasses }
}