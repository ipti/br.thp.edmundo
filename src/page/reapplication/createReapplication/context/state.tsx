import { CreateReapplicationController } from "../service/controller"
import { CreateReapplication } from "../service/types"

export const CreateReapplicationState = () => {
    const initialValue: CreateReapplication = {
        name: "",
    }

  

    const { CreateReapplicationMutation } = CreateReapplicationController();

    const CreateReapplication = (body: CreateReapplication) => {
        CreateReapplicationMutation.mutate(body)
    }
    return { initialValue, CreateReapplication }
}