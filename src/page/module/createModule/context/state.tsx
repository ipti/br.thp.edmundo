import { CreateModule } from "../../type";
import { CreateModuleController } from "../service/controller"

export const CreateModuleState = () => {
    const initialValue: CreateModule = {
        name: "",
        description: ""
    }

  

    const { CreateModuleMutation } = CreateModuleController();

    const CreateModule = (body: CreateModule) => {
        CreateModuleMutation.mutate(body)
    }
    return { initialValue, CreateModule }
}