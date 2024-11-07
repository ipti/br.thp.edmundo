import { useState } from "react";
import { CreateStampsController } from "../service/controller";

export const CreateStampsState = () => {
    const [file, setFile] = useState<File[] | undefined>();


    const { CreateStampsRequestMutation } = CreateStampsController();

    const CreateStamps = (body: any) => {

        const formData = new FormData()
        formData.append("name", body.name)

        if(file){
            formData.append("file", file[0])
        }
        CreateStampsRequestMutation.mutate(formData)
    }

   
    return { CreateStamps, file, setFile }
}