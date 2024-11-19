import { useState } from "react";
import { CreateStampsController } from "../service/controller";

export const CreateStampsState = () => {
    const [file, setFile] = useState<File[] | undefined>();


    const { CreateStampsRequestMutation } = CreateStampsController();

    const CreateStamps = (body: any) => {

        const formData = new FormData()
        formData.append("name", body.name)
        formData.append("description", body.description)
        formData.append("type", body.type.id)


        if (file) {
            formData.append("file", file[0])
        }

        console.log(formData)

        CreateStampsRequestMutation.mutate(formData)
    }


    return { CreateStamps, file, setFile }
}