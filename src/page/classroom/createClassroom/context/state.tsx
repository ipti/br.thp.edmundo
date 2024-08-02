import { CreateClassroomController } from "../service/controller"
import { CreateClassroom } from "../service/types"

export const CreateClassroomState = () => {
    const initialValue: CreateClassroom = {
        name: "",
        reapplication: 0
    }

  

    const { CreateClassroomMutation } = CreateClassroomController();

    const CreateClassroom = (body: CreateClassroom) => {
        CreateClassroomMutation.mutate(body)
    }
    return { initialValue, CreateClassroom }
}