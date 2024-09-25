import { useParams } from "react-router-dom";
import { CreateModule } from "../../type";
import { EditModuleController } from "../service/controller"
import { useFetchRequestFindOneModule } from "../service/query";
import { useEffect, useState } from "react";

export const EditModuleState = () => {

    const { id } = useParams()
    const [moduleOne, setModulesOne] = useState<any | undefined>()



    const { data: moduleOneRequest, isLoading, isError } = useFetchRequestFindOneModule(id!);

    useEffect(() => {
        if (moduleOneRequest) {
            setModulesOne(moduleOneRequest)
        }
    }, [moduleOneRequest])

    const initialValue: CreateModule = {
        name: "",
        description: ""
    }



    const { EditModuleMutation } = EditModuleController();

    const EditModule = (body: CreateModule) => {
        EditModuleMutation.mutate(body)
    }

    return { initialValue, EditModule, moduleOne, isLoading, isError }
}