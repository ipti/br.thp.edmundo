import { CreateModule } from "../../type";
import { EditModuleController } from "../service/controller"

export const EditModuleState = () => {
    const initialValue: CreateModule = {
        name: "",
        description: ""
    }



    const { EditModuleMutation } = EditModuleController();

    const EditModule = (body: CreateModule) => {
        EditModuleMutation.mutate(body)
    }

    return { initialValue, EditModule }
}