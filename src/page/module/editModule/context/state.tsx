import { useParams } from "react-router-dom";
import { CreateModule, ModulesOneEdit } from "../../type";
import { EditModuleController } from "../service/controller"
import { useFetchRequestFindOneModule } from "../service/query";
import { useEffect, useState } from "react";
import queryClient from "../../../../service/reactquery";

export const EditModuleState = () => {

    const { id } = useParams()
    const [moduleOne, setModulesOne] = useState<ModulesOneEdit | undefined>()
    const [is, setIs] = useState(false)



    const { data: moduleOneRequest, isLoading, isError } = useFetchRequestFindOneModule(id!);

    useEffect(() => {
        if (moduleOneRequest && is) {
            setModulesOne(moduleOneRequest)
        }
    }, [moduleOneRequest, is])

    const initialValue: CreateModule = {
        name: moduleOne?.name ?? "",
        description: moduleOne?.description ??
            ""
    }



    useEffect(() => {

        queryClient.removeQueries("useRequestsOneModule")
        setIs(true)
    }, [])


    const { EditModuleMutation } = EditModuleController();

    const EditModule = (body: CreateModule, id: number) => {
        EditModuleMutation.mutate({ data: body, id: id })
    }

    return { initialValue, EditModule, moduleOne, isLoading, isError }
}